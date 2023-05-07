
import AnimeModel from "../models/AnimeModel";

export const searchAnimes = async (animeSearch: string, limit: number = 10) : Promise<AnimeModel[]> => {

    const url: string = `http://localhost:9090/api/animes/search?title=${animeSearch}&limit=${limit}`;

    const response = await fetch(url);
    if(!response.ok){
        throw new Error("Something went wrong");
    }
    const responseJSON = await response.json();
    return responseJSON;
}

export const getRandomAnimes = async (limit: number = 10) : Promise<AnimeModel[]> => {
    const url: string = `http://localhost:9090/api/animes/random?limit=${limit}`;
    
    const response = await fetch(url);
    if(!response.ok){
        throw new Error("Something went wrong");
    }

    const responseJSON = await response.json();
    return responseJSON;
}

export const getTopScoredAnime = async (limit: number) => {
    const url: string = `http://localhost:9090/api/animes/top-scored?limit=${limit}`;

    const response = await fetch(url);
    if(!response.ok){
        throw new Error("Something went wrong");
    }

    const responseJSON = await response.json();
    return responseJSON;
}

export const getMostPopularAnime = async (limit: number) => {
    const url: string = `http://localhost:9090/api/animes/most-popular?limit=${limit}`;

    const response = await fetch(url);
    if(!response.ok){
        throw new Error("Something went wrong");
    }

    const responseJSON = await response.json();
    return responseJSON;
}

export const getMySuggestions = async () => {
    const url: string = `http://localhost:9090/api/animes/my-suggestions`;

    const response = await fetch(url);
    if(!response.ok){
        throw new Error("Something went wrong");
    }

    const responseJSON = await response.json();
    return responseJSON;
}

import AnimeModel from "../models/AnimeModel";

export const searchAnimes =async (animeSearch: string, limit: number = 10) : Promise<AnimeModel[]> => {

    const url: string = `http://localhost:9090/api/animes/search?title=${animeSearch}&limit=${limit}`;

    const response = await fetch(url);
    if(!response.ok){
        throw new Error("Something went wrong");
    }
    const responseJSON = await response.json();
    console.log(responseJSON)
    return responseJSON;
}
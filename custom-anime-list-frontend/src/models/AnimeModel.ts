import AnimeStatsModel from "./AnimeStatsModel";

interface AnimeModel{
    id: number,
    title: string,
    genre: string,
    englishTitle: string,
    japaneseTitle: string,
    titleSynonyms: string,
    status: string,
    episodes: number,
    premiered: string,
    studio: string,
    source: string,
    rating: string,
    description: string,
    imageUrl: string,
    type: string,
    animeStat: AnimeStatsModel
}

export default AnimeModel;
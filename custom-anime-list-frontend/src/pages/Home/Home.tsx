import * as React from 'react';
import AnimeModel from '../../models/AnimeModel';
import { getMostPopularAnime, getMySuggestions, getRandomAnimes, getTopScoredAnime } from '../../http/AnimeHttp';
import AnimeCarousel from '../../components/carousel/AnimeCarousel';
import "./home.css"

const Home = () => {
    const [randomAnime, setRandomAnime] = React.useState<AnimeModel[]>([]);
    const [topScoredAnime, setTopScoredAnime] = React.useState<AnimeModel[]>([]);
    const [mostPopulaeAnime, setMostPopularAnime] = React.useState<AnimeModel[]>([]);
    const [mySuggestions, setMySuggestions] = React.useState<AnimeModel[]>([]);

    // set random animes from http
    React.useEffect(() => {
        getRandomAnimes(15).then((animesResponse: AnimeModel[]) => {
            setRandomAnime(animesResponse);
        }).catch((error: Error) => {
            console.log(error.message);

        });

    }, []);

    // set top-scored anime from http
    React.useEffect(() => {
        getTopScoredAnime(15).then((animesResponse: AnimeModel[]) => {
            setTopScoredAnime(animesResponse);
        }).catch((error: Error) => {
            console.log(error.message);

        });
    }, []);

    // set most popular anime from http
    React.useEffect(() => {
        getMostPopularAnime(15).then((animesResponse: AnimeModel[]) => {
            setMostPopularAnime(animesResponse);
        }).catch((error: Error) => {
            console.log(error.message);

        });
    }, []);

    // set my suggestions from http
    React.useEffect(() => {
        getMySuggestions().then((animesResponse: AnimeModel[]) => {
            setMySuggestions(animesResponse);
        }).catch((error: Error) => {
            console.log(error.message);

        });
    }, []);


    return (
        <div className='home-div'>
            <div className='home-carousel'>
                <h3 className='carousel-title'>Top scored anime</h3>
                <AnimeCarousel animes={topScoredAnime} />
            </div>
            <div className='home-carousel'>
                <h3 className='carousel-title'>Most popular anime</h3>
                <AnimeCarousel animes={mostPopulaeAnime} />
            </div>
            <div className='home-carousel'>
                <h3 className='carousel-title'>My suggestions</h3>
                <AnimeCarousel animes={mySuggestions} />
            </div>
            <div className='home-carousel'>
                <h3 className='carousel-title'>Some random anime</h3>
                <AnimeCarousel animes={randomAnime} />
            </div>
        </div>
    );
}

export default Home;
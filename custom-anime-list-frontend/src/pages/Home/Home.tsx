import * as React from 'react';
import AnimeModel from '../../models/AnimeModel';
import { getMostPopularAnime, getRandomAnimes, getTopScoredAnime } from '../../http/AnimeHttp';
import AnimeCarousel from '../../components/carousel/AnimeCarousel';

const Home = () => {
    const [randomAnime, setRandomAnime] = React.useState<AnimeModel[]>([]);
    const [topScoredAnime, setTopScoredAnime] = React.useState<AnimeModel[]>([]);
    const [mostPopulaeAnime, setMostPopularAnime] = React.useState<AnimeModel[]>([]);

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


    return (
        <div className='d-flex flex-column'>
            <div className='mt-2'>
                <h3 style={{ textAlign: "center" }}>Top scored anime</h3>
                <AnimeCarousel animes={topScoredAnime} />
            </div>
            <div className='mt-5'>
                <h3 style={{ textAlign: "center" }}>Most popular anime</h3>
                <AnimeCarousel animes={mostPopulaeAnime} />
            </div>
            <div className='my-5'>
                <h3 style={{ textAlign: "center" }}>Some random anime</h3>
                <AnimeCarousel animes={randomAnime} />
            </div>
        </div>
    );
}

export default Home;
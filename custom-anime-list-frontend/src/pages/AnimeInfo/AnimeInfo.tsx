import * as React from 'react';
import "./animeInfo.css"
import { useParams } from 'react-router-dom';
import { getAnimeById } from '../../http/AnimeHttp';
import AnimeModel from '../../models/AnimeModel';

const AnimeInfo = () => {
    const animeId = useParams<{id: string}>();
    const [anime, setAnime] = React.useState<AnimeModel>();

    React.useEffect(() => {
        if(animeId.id === undefined){
            console.log("invalid id");
            return;
        }
        getAnimeById(animeId.id).then(anime => {
            setAnime(anime);
        }).catch((error: Error) => {
            console.log(error.message);
        });
    }, [])

    return (
        <div className='bg-div'>
        </div>
    );
}
 
export default AnimeInfo;
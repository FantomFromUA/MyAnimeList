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
            <div className='anime-info-card'>
                <div className='anime-info'>
                    <h1 style={{color: "white", marginLeft: "2vw"}}>{anime?.title}</h1>
                    <hr style={{color: "white"}}/>
                    <div className='div-stats'>
                        <h3 style={{color: "white"}}>Stats</h3>
                        <div className='stats-info'>
                            <div className='stat'>
                                <p style={{margin: 0}}>{anime?.animeStat.rank === 0? "N/A" : anime?.animeStat.rank}</p>
                                <hr style={{margin: 0}}/>
                                <h5 style={{margin: 0}}>Rank</h5>
                            </div>
                            <div className='stat'>
                                <p style={{margin: 0}}>{anime?.animeStat.score === 0? "N/A" : anime?.animeStat.score}</p>
                                <hr style={{margin: 0}}/>
                                <h5 style={{margin: 0}}>Score</h5>
                            </div>
                            <div className='stat'>
                                <p style={{margin: 0}}>{anime?.animeStat.popularity === 0? "N/A" : anime?.animeStat.popularity}</p>
                                <hr style={{margin: 0}}/>
                                <h5 style={{margin: 0}}>Popularity</h5>
                            </div>
                            <div className='stat'>
                                <p style={{margin: 0}}>{anime?.animeStat.members === 0? "N/A" : anime?.animeStat.members}</p>
                                <hr style={{margin: 0}}/>
                                <h5 style={{margin: 0}}>Members</h5>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 style={{textAlign: "center", color: "white"}}>Description</h3> 
                        <p style={{color: "white"}}> &emsp;&emsp; {anime?.description}</p> 
                    </div>  
                </div>
                <div className='image-div'>
                    <div style={{textAlign: "center"}}>
                        <img src={anime?.imageUrl} alt="image" /> 
                    </div>
                    <hr style={{color: "white"}} />
                    <div>
                        <h6 style={{color: "white", textAlign: "center"}}>Info</h6>
                        {anime?.englishTitle !== null && <p className='info-text'><b>English Title:</b> <em>{anime?.englishTitle}</em></p>}
                        <p className='info-text'><b>Source:</b> <em>{anime?.source}</em></p>
                        <p className='info-text'><b>Status:</b> <em>{anime?.status}</em></p>
                        <p className='info-text'><b>Episodes:</b> <em>{anime?.episodes === 0 ? "unknown" : anime?.episodes}</em></p>
                        <p className='info-text'><b>Studio:</b> <em>{anime?.studio}</em></p>
                        <p className='info-text'><b>Genres: </b> <em>{anime?.genre}</em></p>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default AnimeInfo;
import * as React from 'react';
import AnimeModel from '../../models/AnimeModel';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import "./anime.css"

const AnimeCarousel: React.FC<{ animes: AnimeModel[] }> = (props) => {
    console.log(props.animes);
    
    return (
            <Carousel variant="dark" indicators={false} interval={null}>
                {Array.from({length: props.animes.length / 5}, (_ , i) => (
                    <Carousel.Item key={i}>
                    <div className='carousel-element'>
                        {props.animes.slice(i * 5, i * 5 + 5).map(anime => (
                            <div className='anime-carousel-container' key={anime.id}>
                                <img
                                    src={anime.imageUrl}
                                    alt="Image"
                                    onClick={() => window.location.href = `/animes/${anime.id}`}
                                />
                                <div style={{ maxWidth: "200px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                                    <Link style={{ wordWrap: "break-word" }} to={`/animes/${anime.id}`}>{anime.title}</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </Carousel.Item>
                ))}
            </Carousel>
    );
}

export default AnimeCarousel;
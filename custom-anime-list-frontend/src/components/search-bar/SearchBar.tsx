import * as React from 'react';
import { Button, Form } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import AnimeModel from '../../models/AnimeModel';
import { searchAnimes } from '../../http/AnimeHttp';
import './searchBar.css';

const HeaderSearchBar = () => {
    const [animeSearch, setAnimeSearch] = React.useState("");
    const [animes, setAnimes] = React.useState<AnimeModel[]>([]);
    const [httpError, setHttpError] = React.useState("");

    React.useEffect(() => {
        setAnimes([]);
        if (animeSearch === "") {
            return;
        }
        searchAnimes(animeSearch, 4).then((animesResponse: AnimeModel[]) => {
            setAnimes(animesResponse);
        }).catch((error: Error) => {
            setHttpError(error.message);
        });
    }, [animeSearch]);

    const reset = () => {
        setAnimeSearch("");
        setAnimes([]);
    }

    return (
        <Form className="mt-1" onBlur={reset} style={{width: "18vw"}}>
            <div className='relative d-flex'>
                <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    value={animeSearch}
                    onChange={e => setAnimeSearch(e.target.value)}
                    width="400px"
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault();
                          window.location.href = `/anime/search?title=${animeSearch}`;
                        }
                    }}
                />
                <Button 
                    className='btn btn-dark' 
                    disabled={animeSearch.length === 0} 
                    onMouseDown={() => window.location.href=`/anime/search?title=${animeSearch}`}
                >
                    <FaSearch />
                </Button>
            </div>
            <div className='main-form'>
            {animes.length > 0 && <div className='mt-2 w-full bg-white border border-dark'>
                {animes.map((anime: AnimeModel) => (
                    <div key={anime.id}>
                        <div
                            className='serched-element'
                            onMouseDown={() =>  window.location.href=`/animes/${anime.id}`}
                        >
                            <img src={anime.imageUrl} alt="image" width={60} height={80} />
                            <div>
                                <p className='m-1'>{anime.title}</p>
                                <p className='m-1'>score: {anime.animeStat.score === 0 ? "N/A" : anime.animeStat.score}</p>
                            </div>
                        </div>
                        <hr />
                    </div>
                ))}
            </div>}
            </div>
        </Form>
    );
}

export default HeaderSearchBar;
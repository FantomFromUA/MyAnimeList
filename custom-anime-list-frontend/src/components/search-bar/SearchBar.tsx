import * as React from 'react';
import { Button, Form } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import AnimeModel from '../../models/AnimeModel';
import { searchAnimes } from '../../http/AnimeHttp';
import './searchBar.css';

const SearchBar = () => {
    const [animeSearch, setAnimeSearch] = React.useState("");
    const [animes, setAnimes] = React.useState<AnimeModel[]>([]);
    const [httpError, setHttpError] = React.useState("");

    const [isHovered, setIsHovered] = React.useState(false)

    React.useEffect(() => {
        setAnimes([]);
        if (animeSearch === "") {
            return;
        }
        searchAnimes(animeSearch, 3).then((animesResponse: AnimeModel[]) => {
            setAnimes(animesResponse);
        }).catch((error: Error) => {
            setHttpError(error.message);
        });
    }, [animeSearch]);

    return (
        <Form className="main-form"
        onMouseLeave={() => {
            setAnimeSearch("");
            setAnimes([]);
        }}>
            <div className='relative d-flex'>
                <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    value={animeSearch}
                    onChange={e => setAnimeSearch(e.target.value)}
                    width="400px"
                />
                <Button className='btn btn-dark' disabled={animeSearch.length === 0}>
                    <FaSearch />
                </Button>
            </div>
            {animes.length > 0 && <div className='mt-2 w-full bg-white border border-dark'>
                {animes.map((anime: AnimeModel) => (
                    <div>
                        <div
                            className='serched-element'
                            key={anime.id}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            <img src={anime.imageUrl} alt="image" width={60} height={80} />
                            <div>
                                <p style={{ fontSize: "5" }}>{anime.title}</p>
                                <p>score: {anime.animeStat.score === 0 ? "N/A" : anime.animeStat.score}</p>
                            </div>
                        </div>
                        <hr />
                    </div>
                ))}
            </div>}
        </Form>
    );
}

export default SearchBar;
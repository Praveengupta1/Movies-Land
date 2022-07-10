import { useEffect, useState } from 'react';
import SearchIcon from "./search.svg"
import MovieCard from './MoviesCard';
import './App.css'
const API_URL = "https://www.omdbapi.com?apikey=b6003d8a";
const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        console.log(data)
        setMovies(data.Search);
    }
    useEffect(() => {
        searchMovies('batman')
    }, [])
    return (
        <div className='app'>
            <h1>Movies Land</h1>
            <div className="search">
                <input
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search for movies"
                />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>
            <div className='container' >
                {movies?.length > 0 && movies.map((movie,i )=> <MovieCard key={i} movie={movie} />)}
            </div>
        </div>
    )
}

export default App;
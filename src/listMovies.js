import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function ListMovies() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");

        promise.then((answer) => {
            setMovies(answer.data)
        }).catch((error) => console.log(error))
    }, []);

    return (
        <ul className="movies">
            {movies.map((movie) => (
                <li key={movie.id}>
                    <Link to={`/movie/${movie.id}`}>
                        <img src={movie.posterURL}/>
                    </Link>
                </li>
            ))}
        </ul>
    )
}
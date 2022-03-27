import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Footer from "./footer";

export default function Movie() {
    const {idMovie} = useParams();
    const [movie, setMovie] = useState({});

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idMovie}/showtimes`)

        promise.then((answer) => {
            setMovie(answer.data)
        }).catch((error) => console.log(error))
    }, [])

    return (
        <>
        <section className="center">   
            <div className="title">Selecione o horário</div>
            <ul className="movies-sections">
                {movie.days?.map((day) => <Day id={day.id} weekday={day.weekday} date={day.date} showtimes={day.showtimes}/>)}
            </ul>
        </section>
        <Footer title={movie.title} posterUrl={movie.posterURL}/>
        </>
        
    )
}

function Day(props) {
    const {id, weekday, date, showtimes} = props;
    return (
        <li key={id}>
            <h1>{weekday} - {date}</h1>
            {showtimes.map((showtime) => <ButtonShowtimes time={showtime.name} id={id} showtimeId={showtime.id}/>)}
        </li>
    )
}

function ButtonShowtimes(props) {
    const {time, showtimeId, id} = props;
    
    return (
        <Link to={`/seats/${showtimeId}`}>
            <button>{time}</button>
        </Link>
    )
}
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate  } from "react-router-dom";
import axios from "axios";

export default function Seats() {
    const {idSession} = useParams();
    const [session, setSession] = useState({});
    const [name, setName] = useState("");
    const [cpf, setCpf] = useState("");
    const [seatsSelected, setSeatsSelected] = useState([]);
    const navigate = useNavigate();
    
    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSession}/seats`)

        promise.then((answer) => {
            setSession(answer.data)
        }).catch((error) => console.log(error))
    }, [])
    
    function submitData(event) {
        event.preventDefault();

        let seatsData =
        {
            ids: seatsSelected,
            name: name,
            cpf: cpf
        }

        const promise = axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many", (seatsData));            
            promise.then(() => {
                console.log("sucesso");
                //<Link to={"/sucess/"}/>
                /*
                <Link to={{ pathname: '/sucess', state: {title : session.movie.title, weekday : session.day.weekday, 
                    date : session.day.date, tickets : seatsSelected, name : name, cpf : cpf } }}>
                </Link>*/
                navigate('/sucess/', {state : {title : session.movie.title, weekday : session.day.weekday, 
                    date : session.day.date, tickets : seatsSelected, name : name, cpf : cpf }})
            }).catch((error) => console.log(error));

    }
    return (
        <section className="center">   
            <div className="title">Selecione o(s) assento(s)</div>
            <ul className="seats">
                {session.seats?.map((seat) => <Seat id={seat.id} isAvailable={seat.isAvailable} 
                seatsSelected={seatsSelected} setSeatsSelected={setSeatsSelected}/>)}        
            </ul>
            <ul className="symbols">
                <div><li className="selected"></li> Selecionado</div>
                <div><li></li> Disponível</div>
                <div><li className="unavailable"></li>Indisponível</div>
            </ul>
            <form onSubmit={submitData}>
                <label htmlFor="name">Nome do comprador:</label>
                <input type="text" id="name" placeholder="Digite seu nome..." onChange={(e) => setName(e.target.value)}/>
                <br></br>
                <label htmlFor="cpf">CPF do comprador:</label>
                <input type="number" id="cpf" placeholder="Digite seu CPF..." onChange={(e) => setCpf(e.target.value)}/>
                <div className="submit-button">
                    <button type="submit">Reservar assento(s)</button>
                </div>
            </form>
        </section>
    )
}

function Seat(props) {
    const {isAvailable, id, setSeatsSelected, seatsSelected} = props;
    const [selected, setSelected] = useState(false)

    function selectSeat() {
        if (selected) {
            setSeatsSelected(seatsSelected.filter(item => item !== id));
            setSelected(false);
        } else {
            setSelected(true)
            setSeatsSelected([...seatsSelected, id])
        }
    }

    return (
    
            <li className={selected ? "selected" : isAvailable ? null : "unavailable"} 
            onClick={() => isAvailable ? selectSeat() : null}>
                <div>{("0" + `${id}`).slice(-2)}</div>
            </li>

                
    )
}
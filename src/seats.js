import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export default function Seats() {
    const {idSession} = useParams();
    const [session, setSession] = useState({});
    const [name, setName] = useState("");
    const [cpf, setCpf] = useState("");
    
    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSession}/seats`)

        promise.then((answer) => {
            setSession(answer.data)
        }).catch((error) => console.log(error))
    }, [])
    
    function submitData(event) {
        event.preventDefault();
    }
    return (
        <section className="center">   
            <div className="title">Selecione o(s) assento(s)</div>
            <ul className="seats">
                {session.seats?.map((seat) => <Seat id={seat.id} isAvailable={seat.isAvailable}/>)}        
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
    const {isAvailable, id} = props;
    const [selected, setSelected] = useState(false)

    return (
    
            <li className={selected ? "selected" : isAvailable ? null : "unavailable"} onClick={() => isAvailable ? setSelected(!selected) : null}>
                <div>{("0" + `${id}`).slice(-2)}</div>
            </li>

                
    )
}
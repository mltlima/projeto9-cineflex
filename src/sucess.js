import { Link, useLocation } from "react-router-dom";

export default function Sucess() {
    const location = useLocation();
    //const {title, weekday, date, tickets, name, cpf} = location;
    console.log(location.state.tickets)
    return (
        <main className='sucess'>
                <div className="title-sucess">Pedido feito <br /> com sucesso!</div>
                <div className="all-tickets">
                    <div className="confirmed">
                        <p>Filme e sessão</p>
                        <div className='data-sucess'>
                            <p>{location.state.title}</p>
                            <p>{location.state.weekday} - {location.state.date}</p>
                        </div>
                    </div>
                    <div className="confirmed">
                        <p>Ingressos</p>
                        {location.state.tickets.map((ticket) => <Ticket ticket={ticket}/>)}
                    </div>
                    <div className="confirmed">
                        <p>Comprador</p>
                        <div className='data-sucess'>
                            <p>Nome: {location.state.name}</p>
                            <p>CPF: {location.state.cpf}</p>
                        </div>
                    </div>
                </div>
                <div className="home-button">
                    <Link to={`/`}>
                        <button>Voltar para Home</button>
                    </Link>
                </div>
            </main>
    )
}

function Ticket(props) {
    const {ticket} = props;

    return (
        <>
            <p>Assento {ticket.toString().slice(-2)}</p>
        </>
    )
}
import { Link } from "react-router-dom";
import { useNavigate  } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();
    return (
        <Link to="/">
            <header>
                CINEFLIX
                {window.location.pathname==="/" ? "" : <div className="back-button" onClick={() => navigate(-1)}><ion-icon name="chevron-back-circle-outline"></ion-icon></div>}
            </header>
        </Link>
    )
}
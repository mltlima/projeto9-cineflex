export default function Footer(props) {
    const {weekday, date, title, posterUrl} = props;

    return (
        <footer>
            <div className="footer-img"><img src={posterUrl}/></div>
            <div className="info-footer">
                <div className="title">{title}</div>
                <div className="title">{weekday} - {date}</div>
            </div>
        </footer>
    )
}
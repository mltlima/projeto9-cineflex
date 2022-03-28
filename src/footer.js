export default function Footer(props) {
    const {weekday, date, title, posterUrl} = props;

    return (
        <footer>
            <div className="footer-img"><img src={posterUrl}/></div>
            <div className="info-footer">
                <div className="title-footer">{title}</div>
                {weekday?.length > 1 ? <div className="title-footer">{weekday} - {date}</div> : null}
            </div>
        </footer>
    )
}
import "./Card.scss";

const Card = ({
    className = "",
    modifier = "",
    index,
    title,
    description,
    url,
}) => {
    return (
        <article className={`${className} card ${modifier}`.trim()}>
            <span className="card__number">
                {index < 9 ? "0" + (index + 1) : index + 1}
            </span>

            <h3 className="card__title sm-title">{title}</h3>

            <p className="card__description text">{description}</p>

            {url && (
                <a
                    className="card__link"
                    href={url}
                    onClick={
                        url === "#"
                            ? (event) => event.preventDefault()
                            : undefined
                    }
                >
                    Learn more
                </a>
            )}
        </article>
    );
};

export default Card;

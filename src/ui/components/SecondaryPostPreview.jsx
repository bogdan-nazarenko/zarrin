import { Link } from "react-router";
import DataRow from "./DataRow";
import "./SecondaryPostPreview.scss";

const SecondaryPostPreview = ({
    className = "",
    image,
    category,
    dateTime,
    time,
    title,
    description,
    id,
}) => {
    return (
        <article className={`${className} secondary-post-preview`.trim()}>
            <div className="secondary-post-preview__container">
                <div className="secondary-post-preview__image-wrapper">
                    <img
                        loading="lazy"
                        className="secondary-post-preview__image"
                        src={image}
                        alt=""
                    />
                </div>
                <div className="secondary-post-preview__info">
                    <DataRow
                        className="secondary-post-preview__data-row"
                        category={category}
                        dateTime={dateTime}
                        time={time}
                    />
                    <h3 className="secondary-post-preview__title md-title">
                        {title}
                    </h3>
                    <p className="secondary-post-preview__description text">
                        {description}
                    </p>
                    <Link
                        className="secondary-post-preview__link outlined-button"
                        to={`/blog/posts/${id}`}
                    >
                        Read more
                    </Link>
                </div>
            </div>
        </article>
    );
};

export default SecondaryPostPreview;

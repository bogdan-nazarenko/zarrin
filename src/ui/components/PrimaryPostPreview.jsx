import { Link } from "react-router";
import DataRow from "./DataRow";
import "./PrimaryPostPreview.scss";

const PrimaryPostPreview = ({
    image,
    category,
    dateTime,
    time,
    title,
    description,
    id,
}) => {
    return (
        <article className="primary-post-preview">
            <div className="container">
                <div className="primary-post-preview__content">
                    <div className="primary-post-preview__image-wrapper">
                        <img
                            loading="lazy"
                            className="primary-post-preview__image"
                            src={image}
                            alt=""
                        />
                    </div>
                    <div className="primary-post-preview__info">
                        <DataRow
                            className="primary-post-preview__data-row"
                            category={category}
                            dateTime={dateTime}
                            time={time}
                        />
                        <h2 className="primary-post-preview__title md-title">
                            {title}
                        </h2>
                        <p className="primary-post-preview__description text">
                            {description}
                        </p>
                        <Link
                            className="primary-post-preview__link outlined-button"
                            to={`/blog/posts/${id}`}
                        >
                            Read more
                        </Link>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default PrimaryPostPreview;

import DataRow from "./DataRow";
import "./PostPreview.scss";

const PostPreview = ({
    image,
    category,
    dateTime,
    time,
    TitleTag = "h2",
    title,
    description,
    id,
}) => {
    return (
        <article className="post-preview">
            <div className="post-preview__image-wrapper">
                <img
                    loading="lazy"
                    className="post-preview__image"
                    src={image}
                    alt=""
                />
            </div>

            <DataRow
                className="post-preview__data-row"
                category={category}
                dateTime={dateTime}
                time={time}
            />

            <TitleTag className="post-preview__title sm-title">
                {title}
            </TitleTag>

            <p className="post-preview__description text">{description}</p>

            <a
                className="post-preview__link"
                href={`/blog/posts/${id}`}
                onClick={
                    id === "#" ? (event) => event.preventDefault() : undefined
                }
            >
                Read more...
            </a>
        </article>
    );
};

export default PostPreview;

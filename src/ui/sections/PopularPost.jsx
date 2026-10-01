import { Link } from "react-router";
import PostPreview from "@ui/components/PostPreview";
import "./PopularPost.scss";

const PopularPost = ({ previews, previewTitleTag = "h3" }) => {
    return (
        <section className="popular-post section">
            <div className="container">
                <header className="popular-post__header base-header">
                    <h2 className="lg-title">Popular post</h2>

                    <Link className="button" to="/blog">
                        View all
                    </Link>
                </header>

                <div className="catalog">
                    {previews.map((preview) => {
                        const {
                            image,
                            category,
                            dateTime,
                            time,
                            title,
                            description,
                            id,
                        } = preview;

                        return (
                            <PostPreview
                                image={image}
                                category={category}
                                dateTime={dateTime}
                                time={time}
                                TitleTag={previewTitleTag}
                                title={title}
                                description={description}
                                id={id}
                                key={title}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default PopularPost;

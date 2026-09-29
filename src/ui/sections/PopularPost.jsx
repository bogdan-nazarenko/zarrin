import { Link } from "react-router";
import { postPreviewData } from "@data/posts";
import PostPreview from "@ui/components/PostPreview";
import "./PopularPost.scss";

const postPreviews = postPreviewData.slice(0, 6);

const PopularPost = () => {
    return (
        <section className="section popular-post">
            <div className="container">
                <header className="popular-post__header base-header">
                    <h2 className="lg-title">Popular post</h2>

                    <Link className="button" to="/blog">
                        View all
                    </Link>
                </header>

                <div className="catalog">
                    {postPreviews.map((preview) => {
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
                                TitleTag="h4"
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

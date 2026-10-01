import { Link } from "react-router";
import useMediaQuery from "@utils/responsive";
import { images } from "@data/images";
import SecondaryPostPreview from "@ui/components/SecondaryPostPreview";
import PostPreview from "@ui/components/PostPreview";
import "./RecentPost.scss";

const RecentPost = ({ secondaryPreview, previews }) => {
    const isMobile = useMediaQuery("width < 768px");

    return (
        <section className="recent-post section">
            <div className="container">
                <header className="recent-post__header base-header">
                    <h2 className="lg-title">Our recent post</h2>

                    <Link className="button" to="/blog">
                        View all
                    </Link>
                </header>

                {!isMobile && (
                    <SecondaryPostPreview
                        className="recent-post__secondary-post-preview"
                        image={secondaryPreview.image}
                        category={secondaryPreview.category}
                        dateTime={secondaryPreview.dateTime}
                        time={secondaryPreview.time}
                        title={secondaryPreview.title}
                        description={secondaryPreview.description}
                        id={secondaryPreview.id}
                    />
                )}

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
                                TitleTag={isMobile ? "h3" : "h4"}
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

export default RecentPost;

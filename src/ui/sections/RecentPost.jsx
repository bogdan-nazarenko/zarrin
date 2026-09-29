import { Link } from "react-router";
import useMediaQuery from "@utils/responsive";
import { images } from "@data/images";
import { postPreviewData } from "@data/posts";
import SecondaryPostPreview from "@ui/components/SecondaryPostPreview";
import PostPreview from "@ui/components/PostPreview";
import "./RecentPost.scss";

const postPreviews = postPreviewData.slice(6);

const RecentPost = () => {
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
                        image={images.vr1}
                        category="Development"
                        dateTime="2023-03-16"
                        time="16 March 2023"
                        title="How to make a Game look more attractive with New VR & AI Technology"
                        description="Google has been investing in AI for many years and bringing its benefits to individuals, businesses and communities. Whether it’s publishing state-of-the-art research, building helpful products or developing tools and resources that enable others, we’re committed to making AI accessible to everyone."
                        id="9fbae563"
                    />
                )}

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

export default RecentPost;

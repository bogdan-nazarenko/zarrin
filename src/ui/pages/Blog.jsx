import { postPreviewData } from "@data/posts";
import PostPreview from "@ui/components/PostPreview";
import "./Blog.scss";

const Blog = () => {
    return (
        <section className="blog section">
            <div className="container">
                <span className="blog__superscription superscription">
                    Our blogs
                </span>

                <h1 className="blog__title lg-title">
                    Find our all blogs from here
                </h1>

                <p className="blog__text text">
                    Our blogs are written from very research research and well
                    known writers writers so that we can provide you the best
                    blogs and articles articles for you to read them all along
                </p>

                <div className="blog__catalog catalog">
                    {postPreviewData.slice(1).map((preview) => {
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
                                TitleTag="h2"
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

export default Blog;

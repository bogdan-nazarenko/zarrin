import { postPreviewData } from "@data/posts";
import Hero from "@ui/sections/Hero";
import PrimaryPostPreview from "@ui/components/PrimaryPostPreview";
import RecentPost from "@ui/sections/RecentPost";
import PopularPost from "@ui/sections/PopularPost";

const postPreview = postPreviewData.find((preview) => {
    return preview.id === "9fbae563";
});

const Home = () => {
    return (
        <>
            <Hero />
            <PrimaryPostPreview
                image={postPreview.image}
                category={postPreview.category}
                dateTime={postPreview.dateTime}
                time={postPreview.time}
                title={postPreview.title}
                description={postPreview.description}
                id={postPreview.id}
            />
            <RecentPost
                secondaryPreview={postPreview}
                previews={postPreviewData.slice(7)}
            />
            <PopularPost previews={postPreviewData.slice(1, 7)} />
        </>
    );
};

export default Home;

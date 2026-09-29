import { images } from "@data/images";
import Hero from "@ui/sections/Hero";
import PrimaryPostPreview from "@ui/components/PrimaryPostPreview";
import RecentPost from "@ui/sections/RecentPost";
import PopularPost from "@ui/sections/PopularPost";

const Home = () => {
    return (
        <>
            <Hero />
            <PrimaryPostPreview
                image={images.vr1}
                category="Development"
                dateTime="2023-03-16"
                time="16 March 2023"
                title="How to make a Game look more attractive with New VR & AI Technology"
                description="Google has been investing in AI for many years and bringing its benefits to individuals, businesses and communities. Whether it’s publishing state-of-the-art research, building helpful products or developing tools and resources that enable others, we’re committed to making AI accessible to everyone."
                id="9fbae563"
            />
            <RecentPost />
            <PopularPost />
        </>
    );
};

export default Home;

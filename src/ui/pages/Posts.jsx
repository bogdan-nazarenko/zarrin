import { useParams } from "react-router";
import { postData, postPreviewData } from "@data/posts";
import PopularPost from "@ui/sections/PopularPost";
import Error from "./Error";

const Posts = () => {
    const { id } = useParams();
    const CurrentPost = postData[id]?.content;

    return CurrentPost ? (
        <>
            <CurrentPost />
            <PopularPost
                previews={postPreviewData.slice(4, 7)}
                previewTitleTag="h3"
            />
        </>
    ) : (
        <Error />
    );
};

export default Posts;

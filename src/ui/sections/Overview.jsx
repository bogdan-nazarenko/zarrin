import { images } from "@data/images";
import "./Overview.scss";

const Overview = () => {
    return (
        <section className="overview section">
            <div className="container">
                <span className="overview__superscription superscription">
                    About us
                </span>

                <h1 className="overview__title lg-title lg-title_centered">
                    Creative Blog Writting and publishing site
                </h1>

                <p className="overview__text text">
                    Leverage agile frameworks to provide a robust synopsis for
                    high level overviews. Iterative approaches to corporate
                    strategy foster collaborative thinking to further the
                    overall value proposition. Organically grow the holistic
                    world view of disruptive innovation via workplace diversity
                    and empowerment.
                </p>

                <div className="overview__image-wrapper">
                    <img
                        className="overview__image"
                        src={images.teamwork}
                        alt=""
                    />
                </div>
            </div>
        </section>
    );
};

export default Overview;

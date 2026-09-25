import { images } from "@data/images";
import "./Hero.scss";

const Hero = () => {
    return (
        <section className="hero section">
            <div className="hero__container container">
                <div className="hero__info">
                    <span className="hero__superscription">Featured post</span>
                    <h1 className="hero__title xxl-title">
                        How AI will Change the Future
                    </h1>
                    <p className="hero__text text">
                        The future of AI will see home robots having enhanced
                        intelligence, increased capabilities, and becoming more
                        personal and possibly cute. For example, home robots
                        will overcome navigation, direction
                    </p>
                    <a
                        className="hero__link white-button"
                        href="#"
                        onClick={(event) => event.preventDefault()}
                    >
                        Read more
                    </a>
                </div>
                <div className="hero__image-wrapper">
                    <img className="hero__image" src={images.ai} alt="" />
                </div>
            </div>
        </section>
    );
};

export default Hero;

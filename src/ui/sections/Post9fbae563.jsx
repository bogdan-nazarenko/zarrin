import { images, postCovers } from "@data/images";
import DataRow from "@ui/components/DataRow";
import "./Post9fbae563.scss";

const Post9fbae563 = () => {
    return (
        <section className="post-9fbae563 section" id="9fbae563">
            <div className="container">
                <header className="post-header">
                    <DataRow
                        category="Development"
                        dateTime="2023-03-16"
                        time="16 March 2023"
                    />

                    <h1 className="lg-title">
                        How to make a Game look more attractive with New VR & AI
                        Technology
                    </h1>
                </header>

                <div className="post-9fbae563__image-wrapper">
                    <img
                        className="post-9fbae563__image"
                        src={postCovers.vr}
                        alt="VR"
                    />
                </div>

                <div className="post-9fbae563__content">
                    <p className="post-9fbae563__text text">
                        Google has been investing in AI for many years and
                        bringing its benefits to individuals, businesses and
                        communities. Whether it’s publishing state-of-the-art
                        research, building helpful products or developing tools
                        and resources that enable others, we’re committed to
                        making AI accessible to everyone.
                    </p>

                    <p className="post-9fbae563__text text">
                        We’re now at a pivotal moment in our AI journey.
                        Breakthroughs in generative AI are fundamentally
                        changing how people interact with technology — and at
                        Google, we’ve been responsibly developing large language
                        models so we can safely bring them to our products.
                        Today, we’re excited to share our early progress.
                        Developers and businesses can now try new APIs and
                        products that make it easy, safe and scalable to start
                        building with Google’s best AI models through Google
                        Cloud and a new prototyping environment called
                        MakerSuite. And in Google Workspace, we’re introducing
                        new features that help people harness the power of
                        generative AI to create, connect and collaborate.
                    </p>

                    <blockquote className="post-9fbae563__blockquote">
                        <p>
                            People worry that computers will get too smart and
                            take over the world, but the real problem is that
                            they’re too stupid and they’ve already taken over
                            the world.
                        </p>
                        <cite>– Pedro Domingos</cite>
                    </blockquote>

                    <p className="post-9fbae563__text text">
                        More than 3 billion people already benefit from
                        AI-powered features in Google Workspace, whether it’s
                        using Smart Compose in Gmail or auto-generated summaries
                        in Google Docs. Now, we’re excited to take the next step
                        and bring a limited set of trusted testers a{" "}
                        <a
                            href="https://workspace.google.com/blog/product-announcements/generative-ai"
                            target="_blank"
                        >
                            new set of features
                        </a>{" "}
                        that makes the process of writing even easier. In Gmail
                        and Google Docs, you can simply type in a topic you’d
                        like to write about, and a draft will be instantly
                        generated for you. So if you’re a manager onboarding a
                        new employee, Workspace saves you the time and effort
                        involved in writing that first welcome email. From
                        there, you can elaborate upon or abbreviate the message
                        or adjust the tone to be more playful or professional —
                        all in just a few clicks. We’ll be rolling out these new
                        experiences to testers in the coming weeks.
                    </p>

                    <div className="post-9fbae563__image-wrapper post-9fbae563__image-wrapper_size_small">
                        <img
                            loading="lazy"
                            className="post-9fbae563__image"
                            src={images.vr}
                            alt="VR"
                        />
                    </div>

                    <p className="post-9fbae563__text text">
                        We’re so excited by the potential of generative AI, and
                        the opportunities it will unlock — from helping people
                        express themselves creatively, to helping developers
                        build brand new types of applications, to transforming
                        how businesses and governments engage their customers
                        and constituents. Stay tuned for more to come in the
                        weeks and months ahead.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Post9fbae563;

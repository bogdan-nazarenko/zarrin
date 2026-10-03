import Card from "@ui/components/Card";
import "./Workflow.scss";

const steps = [
    {
        title: "Brainstorming",
        description:
            "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated",
        url: "#",
    },
    {
        title: "Analysing",
        description:
            "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line solely on the bottom line.",
    },
    {
        title: "News publishing",
        description:
            "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.",
    },
];

const Workflow = () => {
    return (
        <section className="workflow section">
            <div className="container">
                <header className="workflow__header">
                    <hgroup className="workflow__title-group">
                        <span className="workflow__superscription superscription">
                            How we work
                        </span>

                        <h2 className="workflow__title lg-title">
                            I will show you how our team works
                        </h2>
                    </hgroup>

                    <p className="workflow__text text">
                        Bring to the table win-win market strategies to ensure
                        perfect articles.
                    </p>
                </header>

                <div className="workflow__card-group">
                    {steps.map((step, index) => {
                        const { title, description, url } = step;

                        return (
                            <Card
                                className="workflow__card"
                                modifier={
                                    title === "Brainstorming"
                                        ? "card_highlighted "
                                        : ""
                                }
                                index={index}
                                title={title}
                                description={description}
                                url={url}
                                key={title}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Workflow;

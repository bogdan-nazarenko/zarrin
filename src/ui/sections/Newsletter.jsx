import "./Newsletter.scss";

const Newsletter = () => {
    return (
        <section className="newsletter section">
            <div className="newsletter__container container">
                <h2 className="newsletter__title xl-title">
                    Get our stories delivered From us to your inbox weekly.
                </h2>

                <form
                    className="newsletter__form"
                    onSubmit={(event) => event.preventDefault()}
                >
                    <input
                        className="newsletter__field"
                        id="subscription"
                        type="email"
                        name="subscription"
                        placeholder="Your Email"
                        aria-label="Your Email"
                        required
                    />
                    <button className="newsletter__button button" type="submit">
                        Get started
                    </button>
                </form>

                <p className="newsletter__text">
                    Get a response tomorrow if you submit by 9pm today. If we
                    received after 9pm will get a reponse the following day.
                </p>
            </div>
        </section>
    );
};

export default Newsletter;

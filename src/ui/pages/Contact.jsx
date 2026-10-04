import { images } from "@data/images";
import "./Contact.scss";

const items = [
    {
        iconModifier: "contact__icon_office",
        name: "Office",
        url: "https://www.google.com/maps/search/victoria+street+uk",
        linkName: "Victoria Street, London, UK",
    },
    {
        iconModifier: "contact__icon_email",
        name: "Email",
        url: "mailto:hello@zarrin.com",
        linkName: "hello@zarrin.com",
    },
    {
        iconModifier: "contact__icon_phone",
        name: "Phone",
        url: "tel:+123423451",
        linkName: "(001) 2342 3451",
    },
];

const fields = [
    {
        label: "Name",
        id: "name",
        type: "text",
        autoComplete: "name",
    },
    {
        label: "Email",
        id: "email",
        type: "email",
        autoComplete: "email",
    },
    {
        label: "Phone",
        id: "phone-number",
        type: "tel",
        autoComplete: "tel",
    },
    {
        label: "Subject",
        id: "subject",
        type: "text",
    },
];

const Contact = () => {
    return (
        <section className="contact section">
            <div className="container">
                <h1 className="contact__title lg-title lg-title_centered">
                    Get in Touch
                </h1>

                <p className="contact__text text">
                    Contact us to publish your content and show ads to our
                    website and get a good reach.
                </p>

                <ul className="contact__list">
                    {items.map((item) => {
                        const { iconModifier, name, url, linkName } = item;

                        return (
                            <li className="contact__list-item" key={url}>
                                <div
                                    className={`contact__icon ${iconModifier}`}
                                ></div>

                                <span className="contact__name">{name}</span>

                                <a
                                    className="contact__link"
                                    href={url}
                                    target={
                                        name === "Office" ? "_blank" : undefined
                                    }
                                >
                                    {linkName}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>

            <div className="contact__image-wrapper">
                <img className="contact__image" src={images.map} alt="" />
            </div>

            <form
                className="contact__form"
                onSubmit={(event) => event.preventDefault()}
            >
                <fieldset className="contact__field-set">
                    {fields.map((field) => {
                        const { label, id, type, autoComplete } = field;

                        return (
                            <label className="contact__label" key={id}>
                                <span>{label}</span>

                                <input
                                    className="contact__field"
                                    id={id}
                                    type={type}
                                    name={id}
                                    autoComplete={autoComplete}
                                    required
                                />
                            </label>
                        );
                    })}

                    <label className="contact__label">
                        <span>Message</span>

                        <textarea
                            className="contact__text-area"
                            id="message"
                            name="message"
                            required
                        ></textarea>
                    </label>
                </fieldset>

                <button className="contact__button button" type="submit">
                    Send message
                </button>
            </form>
        </section>
    );
};

export default Contact;

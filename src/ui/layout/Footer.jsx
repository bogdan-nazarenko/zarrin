import { Link } from "react-router";
import { navLinks } from "@data/links";
import HomeLink from "@ui/components/HomeLink";
import "./Footer.scss";

const footerSocialLinks = [
    {
        url: "https://www.facebook.com/",
        label: "Facebook",
        name: "FB",
    },
    {
        url: "https://www.instagram.com/",
        label: "Instagram",
        name: "IG",
    },
    {
        url: "https://www.linkedin.com/",
        label: "Linkedin",
        name: "LN",
    },
    {
        url: "https://www.youtube.com/",
        label: "YouTube",
        name: "YT",
    },
];

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__top container">
                <HomeLink />

                <nav className="footer__nav">
                    <ul className="footer__list">
                        {navLinks.map((link) => {
                            const { url, name } = link;

                            return (
                                <li className="footer__list-item" key={url}>
                                    <Link className="footer__link" to={url}>
                                        {name}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                <div className="footer__social-media">
                    {footerSocialLinks.map((link) => {
                        const { url, label, name } = link;

                        return (
                            <Link
                                className="footer__social-link"
                                to={url}
                                aria-label={label}
                                key={url}
                            >
                                <span aria-hidden="true">{name}</span>
                            </Link>
                        );
                    })}
                </div>
            </div>

            <div className="footer__bottom container">
                <p className="footer__text">
                    Copyright Ideapeel Inc © 2023. All Right Reserved
                </p>
            </div>
        </footer>
    );
};

export default Footer;

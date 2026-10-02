import { Link } from "react-router";
import "./Error.scss";

const Error = () => {
    return (
        <section className="error section">
            <div className="container">
                <div className="error__content">
                    <h1 className="error__title">404</h1>

                    <p className="error__description">
                        Sorry!
                        <br />
                        The link is broken, try to refresh or go to home
                    </p>

                    <Link className="error__link light-gray-button" to="/">
                        Go to home
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Error;

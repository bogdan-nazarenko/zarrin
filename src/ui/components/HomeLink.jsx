import { Link } from "react-router";
import logo from "@media/images/logo.svg";
import "./HomeLink.scss";

const HomeLink = ({ className = "", onClick }) => {
    return (
        <Link
            className={`${className} home-link`.trim()}
            to="/"
            onClick={onClick}
        >
            <img className="logo" src={logo} alt="Zarrin" />
        </Link>
    );
};

export default HomeLink;

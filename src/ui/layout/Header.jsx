import { useState, useRef, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import useMediaQuery from "@utils/responsive";
import { setMenuOpen } from "@libs/redux";
import { navLinks } from "@data/links";
import HomeLink from "@ui/components/HomeLink";
import "./Header.scss";

const headerLinks = navLinks.filter((link) => {
    return link.url === "/blog" || link.url === "/about";
});

const Header = () => {
    const [isFieldVisible, setFieldVisible] = useState(false);
    const [isClearButtonVisible, setClearButtonVisible] = useState(false);
    const { pathname } = useLocation();
    const isMobile = useMediaQuery("width < 768px");

    const isMenuOpen = useSelector((state) => {
        return state.app.headerState.isMenuOpen;
    });
    const dispatch = useDispatch();

    const closeMenu = () => dispatch(setMenuOpen(false));

    const isMobileRef = useRef(isMobile);
    const isMenuOpenRef = useRef(isMenuOpen);

    useEffect(() => {
        isMobileRef.current = isMobile;
        isMenuOpenRef.current = isMenuOpen;

        document.body.classList.toggle(
            "page-layout_non-scrollable",
            isMenuOpen
        );
    }, [isMobile, isMenuOpen]);

    useEffect(() => {
        function windowHandler() {
            if (isMobileRef.current && isMenuOpenRef.current) {
                dispatch(setMenuOpen(false));
            }
        }

        const mobileMql = window.matchMedia("(width < 768px)");

        function mqlHandler() {
            if (!mobileMql.matches) dispatch(setMenuOpen(false));
        }

        window.addEventListener("popstate", windowHandler);
        mobileMql.addEventListener("change", mqlHandler);

        return () => {
            window.removeEventListener("popstate", windowHandler);
            mobileMql.removeEventListener("change", mqlHandler);
        };
    }, [dispatch]);

    function headerHandler(event) {
        if (event.target === event.currentTarget) {
            closeMenu();
        }
    }

    const fieldRef = useRef(null);
    const navigate = useNavigate();

    function searchByKeys(event) {
        event.preventDefault();

        fieldRef.current.value = fieldRef.current.value.trim();

        if (!fieldRef.current.value) {
            if (isMobile) setFieldVisible(false);

            setClearButtonVisible(false);
            return;
        }

        const data = new FormData(event.currentTarget);
        const params = new URLSearchParams(data);

        closeMenu();
        navigate(`/results?${params.toString()}`);

        fieldRef.current.focus();
    }

    function setFocus(state, event, elRef) {
        if (
            state &&
            event.propertyName === "visibility" &&
            event.target === event.currentTarget
        ) {
            elRef.current.focus();
        }
    }

    function fieldInputHandler(event) {
        const isEmpty = event.currentTarget.value === "";

        if (isMobile) setFieldVisible(!isEmpty);

        setClearButtonVisible(!isEmpty);
    }

    function clearField() {
        fieldRef.current.value = "";

        if (isMobile) setFieldVisible(false);

        setClearButtonVisible(false);
        fieldRef.current.focus();
    }

    function searchButtonLabel() {
        if (isMobile || isClearButtonVisible) return "Search";

        if (isFieldVisible) {
            return "Close search field";
        } else {
            return "Open search field";
        }
    }

    return (
        <header
            className="header"
            onClick={isMobile ? headerHandler : undefined}
        >
            <div className="header__inner">
                <div className="header__container container">
                    <HomeLink
                        onClick={isMobile && isMenuOpen ? closeMenu : undefined}
                    />

                    {isMobile && (
                        <button
                            className="header__menu-button"
                            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                            aria-controls="page-menu"
                            aria-expanded={isMenuOpen ? "true" : "false"}
                            onClick={() => dispatch(setMenuOpen(!isMenuOpen))}
                        >
                            <svg
                                className="header__menu-icon"
                                width="34"
                                height="34"
                                fill="none"
                                viewBox="0 0 34 34"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                            >
                                <path
                                    d="m9 11h16"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="m9 17h16"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="m9 23h16"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                />
                                <circle
                                    cx="17"
                                    cy="17"
                                    r="15.75"
                                    fill="none"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </button>
                    )}

                    <nav
                        className={`header__nav ${isMenuOpen ? "header__nav_open" : ""}`.trim()}
                        id="page-menu"
                        aria-label="Main menu"
                    >
                        <div className="header__nav-inner">
                            <ul className="header__list">
                                {headerLinks.map((link) => {
                                    const { url, name } = link;

                                    return (
                                        <li
                                            className="header__list-item"
                                            key={url}
                                        >
                                            <Link
                                                className="header__link"
                                                to={url}
                                                aria-current={
                                                    url === pathname
                                                        ? "page"
                                                        : undefined
                                                }
                                                onClick={
                                                    isMobile
                                                        ? closeMenu
                                                        : undefined
                                                }
                                            >
                                                {name}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>

                            <form
                                className="header__search-form"
                                role="search"
                                onSubmit={searchByKeys}
                            >
                                <div
                                    className="header__field-wrapper"
                                    onTransitionEnd={
                                        !isMobile
                                            ? (event) => {
                                                  setFocus(
                                                      isFieldVisible,
                                                      event,
                                                      fieldRef
                                                  );
                                              }
                                            : undefined
                                    }
                                >
                                    <input
                                        className="header__field"
                                        id="search"
                                        type="search"
                                        name="search"
                                        placeholder="Search"
                                        aria-label="Search"
                                        ref={fieldRef}
                                        onInput={fieldInputHandler}
                                    />

                                    {isClearButtonVisible && (
                                        <button
                                            className="header__clear-button"
                                            type="button"
                                            aria-label="Clear search field"
                                            onClick={clearField}
                                        ></button>
                                    )}
                                </div>
                                <button
                                    className={`header__search-button ${isFieldVisible ? "header__search-button_active" : ""}`.trim()}
                                    type={
                                        isMobile || isClearButtonVisible
                                            ? "submit"
                                            : "button"
                                    }
                                    aria-label={searchButtonLabel()}
                                    onClick={
                                        isMobile || isClearButtonVisible
                                            ? undefined
                                            : () =>
                                                  setFieldVisible(
                                                      !isFieldVisible
                                                  )
                                    }
                                ></button>
                            </form>

                            <Link
                                className="header__contact-link button"
                                to="/contact"
                                aria-current={
                                    pathname === "/contact" ? "page" : undefined
                                }
                                onClick={isMobile ? closeMenu : undefined}
                            >
                                Contact us
                            </Link>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;

import React from "react";
import {useSelector} from "react-redux";
import { Link } from "react-router-dom";
import { content } from "./LandingNav.config";

import './LandingNav.scss';

function LandingNav() {
    const theme = useSelector((store) => store.theme.theme);
    const language = useSelector((store) => store.language.language);

    const {SiteHeader,
    SiteFooter,
    Roadmap,
    MediaAboutUs,
    AboutUs,
    FAQs,
    OurPartners,} = content[language]

    return(
        <div className="admin-landing__header">
                <Link to="/admin/landing/header">
                    <button className={theme === "dark" ? "header__button header__button-dark" : "header__button header__button-light"}>
                        {SiteHeader}
                    </button>
                </Link>
                <Link to="/admin/landing/footer">
                    <button className={theme === "dark" ? "header__button header__button-dark" : "header__button header__button-light"}>
                        {SiteFooter}
                    </button>
                </Link>
                <Link to="/admin/landing/roadmap">
                    <button className={theme === "dark" ? "header__button header__button-dark" : "header__button header__button-light"}>
                        {Roadmap}
                    </button>
                </Link>
                <Link to="/admin/landing/media">
                    <button className={theme === "dark" ? "header__button header__button-dark" : "header__button header__button-light"}>
                        {MediaAboutUs}
                    </button>
                </Link>
                <Link to="/admin/landing/about">
                    <button className={theme === "dark" ? "header__button header__button-dark" : "header__button header__button-light"}>
                        {AboutUs}
                    </button>
                </Link>
                <Link to="/admin/landing/faqs">
                    <button className={theme === "dark" ? "header__button header__button-dark" : "header__button header__button-light"}>
                        {FAQs}
                    </button>
                </Link>
                <Link to="/admin/landing/partners">
                    <button className={theme === "dark" ? "header__button header__button-dark" : "header__button header__button-light"}>
                        {OurPartners}
                    </button>
                </Link>
        </div>
    )
}

export default LandingNav;
import React from "react";
import {useSelector} from "react-redux";
import {Link, useLocation} from "react-router-dom";
import {content} from './Footer.config';

import './Footer.scss';

function Footer() {
    const theme = useSelector((store) => store.theme.theme);
    const language = useSelector((store) => store.language.language);

    const {pathname} = useLocation();

    const scrollTop = () => {
        window.scrollTo(0, 0);
    }
    const {
        AboutUs,
        Roadmap,
        NewsAboutUs,
        FAQs,
        DownloadTheApp,
        ConnectWithUs,
        PrivacyPolicy,
        TermsOfUse,
        SiteAnalytics
    } = content[language]

    return(
        <footer className={theme === "dark" ? "footer footer-dark" : "footer footer-light"}>
            <div className="footer-wrapper">
            <nav className="footer__nav">
                <Link to="/about" onClick={scrollTop}>
                    <p 
                        className={ theme === "dark" ? "nav__item-dark" : "nav__item-light"}
                        style={pathname === "/about" ? {color: "#2E9C3E"} : {}}
                    >
                        {AboutUs}
                    </p>
                </Link>
                <Link to="/Roadmap" onClick={scrollTop}>
                    <p 
                        className={ theme === "dark" ? "nav__item-dark" : "nav__item-light"}
                        style={pathname === "/Roadmap" ? {color: "#2E9C3E"} : {}}
                    >
                        {Roadmap}
                    </p>
                </Link>
                <Link to="/faqs" onClick={scrollTop}>
                    <p 
                        className={ theme === "dark" ? "nav__item-dark" : "nav__item-light"}
                        style={pathname === "/faqs" ? {color: "#2E9C3E"} : {}}
                    >
                        {FAQs}
                    </p>
                </Link>
                <Link to="/media" onClick={scrollTop}>
                    <p 
                        className={ theme === "dark" ? "nav__item-dark" : "nav__item-light"}
                        style={pathname === "/media" ? {color: "#2E9C3E"} : {}}
                    >
                        {NewsAboutUs}
                    </p>
                </Link>
            </nav>
            <div className={theme === "dark" ? "footer__download footer-dark" : "footer__download footer-light"}>
                <h4 className="download__title">
                    {DownloadTheApp}
                </h4>
                <div className="block__download">
                    <img className="download__button" src={require(`./image/android.svg`).default} alt="" />
                    <img className="download__button" src={require(`./image/google-play.svg`).default} alt="" />
                </div>
            </div>
            <div className={theme === "dark" ? "block__social footer-dark" : "block__social footer-light"}>
                <h4 className="download__title">
                    {ConnectWithUs}
                </h4>
                <div className="social__button-wrapper">
                    <a className="social__button">
                        <div className={theme === "dark" ? "social__button-image social__button-email-dark" : "social__button-image social__button-email-light"}></div>
                    </a>
                    <a href="https://t.me/cefion" target="_blank" className="social__button">
                        <div className={theme === "dark" ? "social__button-image social__button-telegram-dark" : "social__button-image social__button-telegram-light"}></div>
                    </a>
                </div>
            </div>
            <div className="footer__other">
                <p className={theme === "dark" ? "other__text-dark" : "other__text-light"}>
                    {PrivacyPolicy}
                </p>
                <p className={theme === "dark" ? "other__text-dark" : "other__text-light"}>
                    {TermsOfUse}
                </p>
                <p className={theme === "dark" ? "other__text-dark" : "other__text-light"}>
                    {SiteAnalytics}
                </p>
            </div>
            </div>
        </footer>
    )
}

export default Footer;
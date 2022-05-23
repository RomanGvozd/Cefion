import React from "react";
import {useSelector} from "react-redux";
import {Link, useLocation} from "react-router-dom";
import routs from "../../common/routs.config";

import './Footer.scss';
import './FooterAdaptive.scss';


function Footer() {
    const theme = useSelector((store) => store.theme.theme);
    const language = useSelector((store) => store.language.language);

    const {pathname} = useLocation();

    const scrollTop = () => {
        window.scrollTo(0, 0);
    }

    return(
        <footer className={theme === "dark" ? "footer footer-dark" : "footer footer-light"}>
            <nav className="footer__nav">
                <Link to="/about" onClick={scrollTop}>
                    <p 
                        className={ theme === "dark" ? "nav__item-dark" : "nav__item-light"}
                        style={pathname === "/about" ? {color: "#2E9C3E"} : {}}
                    >
                        {language === "RU"
                        ? "О нас"
                        : "About Us"
                        }
                    </p>
                </Link>
                <Link to="/Roadmap" onClick={scrollTop}>
                    <p 
                        className={ theme === "dark" ? "nav__item-dark" : "nav__item-light"}
                        style={pathname === "/Roadmap" ? {color: "#2E9C3E"} : {}}
                    >
                        {language === "RU"
                        ? "Дорожная карта"
                        : "Roadmap"
                        }
                    </p>
                </Link>
                <Link to="/faqs" onClick={scrollTop}>
                    <p 
                        className={ theme === "dark" ? "nav__item-dark" : "nav__item-light"}
                        style={pathname === "/faqs" ? {color: "#2E9C3E"} : {}}
                    >
                        {language === "RU"
                        ? "FAQs"
                        : "FAQs"
                        }
                    </p>
                </Link>
                <Link to="/media" onClick={scrollTop}>
                    <p 
                        className={ theme === "dark" ? "nav__item-dark" : "nav__item-light"}
                        style={pathname === "/media" ? {color: "#2E9C3E"} : {}}
                    >
                        {language === "RU"
                        ? "СМИ о нас"
                        : "Mass Media about us"
                        }
                    </p>
                </Link>
            </nav>
            <div className="footer__download">
                <h4 className="download__title">
                    {language === "RU"
                    ? "Скачать приложение"
                    : "Download the app"
                    }
                </h4>
                <div className="block__download">
                    <button className="download__button download__app-store"></button>
                    <button className="download__button download__google-play"></button>
                    <button className="download__button download__android"></button>
                </div>
            </div>
            <div className="footer__social">
                <h4 className="social__title">
                    {language === "RU"
                    ? "Связаться с нами"
                    : "Contact us"
                    }
                </h4>
                <div className="block__social">
                    <button className="social__button">
                        <div className={theme === "dark" ? "social__button-image social__button-faceboock-dark" : "social__button-image social__button-faceboock-light"}></div>
                    </button>
                    <button className="social__button">
                        <div className={theme === "dark" ? "social__button-image social__button-twitter-dark" : "social__button-image social__button-twitter-light"}></div>
                    </button>
                    <button className="social__button">
                        <div className={theme === "dark" ? "social__button-image social__button-instagram-dark" : "social__button-image social__button-instagram-light"}></div>
                    </button>
                    <button className="social__button">
                        <div className={theme === "dark" ? "social__button-image social__button-youtube-dark" : "social__button-image social__button-youtube-light"}></div>
                    </button>
                    <button className="social__button">
                        <div className={theme === "dark" ? "social__button-image social__button-telegram-dark" : "social__button-image social__button-telegram-light"}></div>
                    </button>
                    <button className="social__button">
                        <div className={theme === "dark" ? "social__button-image social__button-discord-dark" : "social__button-image social__button-discord-light"}></div>
                    </button>                         
                </div>
            </div>
            <div className="footer__other">
                <p className={theme === "dark" ? "other__text-dark" : "other__text-light"}>
                    {language === "RU"
                    ? "Политика конфиденциальности"
                    : "Privacy Policy"
                    }
                </p>
                <p className={theme === "dark" ? "other__text-dark" : "other__text-light"}>
                    {language === "RU"
                    ? "Условия использования"
                    : "Terms of Use"
                    }
                </p>
                <p className={theme === "dark" ? "other__text-dark" : "other__text-light"}>
                    {language === "RU"
                    ? "Аналитика сайта"
                    : "Site Analytics"
                    }
                </p>
            </div>
        </footer>
    )
}

export default Footer;
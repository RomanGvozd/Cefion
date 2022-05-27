import React from "react";
import {useSelector} from "react-redux";
import { Link } from "react-router-dom";

import './LandingNav.scss';

function LandingNav() {
    const theme = useSelector((store) => store.theme.theme);
    const language = useSelector((store) => store.language.language);

    return(
        <div className="admin-landing__header">
                <Link to="/admin/landing/header">
                    <button className={theme === "dark" ? "header__button header__button-dark" : "header__button header__button-light"}>
                        {language === "RU"
                        ? "Header сайта"
                        : "Site header"
                        }
                    </button>
                </Link>
                <Link to="/admin/landing/footer">
                    <button className={theme === "dark" ? "header__button header__button-dark" : "header__button header__button-light"}>
                        {language === "RU"
                        ? "Footer сайта"
                        : "Site footer"
                        }
                    </button>
                </Link>
                <Link to="/admin/landing/roadmap">
                    <button className={theme === "dark" ? "header__button header__button-dark" : "header__button header__button-light"}>
                        {language === "RU"
                        ? "Дорожная карта"
                        : "Road map"
                        }
                    </button>
                </Link>
                <Link to="/admin/landing/media">
                    <button className={theme === "dark" ? "header__button header__button-dark" : "header__button header__button-light"}>
                        {language === "RU"
                        ? "СМИ о нас"
                        : "Media about us"
                        }
                    </button>
                </Link>
                <Link to="/admin/landing/about">
                    <button className={theme === "dark" ? "header__button header__button-dark" : "header__button header__button-light"}>
                        {language === "RU"
                        ? "О нас"
                        : "About us"
                        }
                    </button>
                </Link>
                <Link to="/admin/landing/faqs">
                    <button className={theme === "dark" ? "header__button header__button-dark" : "header__button header__button-light"}>
                        FAQs
                    </button>
                </Link>
        </div>
    )
}

export default LandingNav;
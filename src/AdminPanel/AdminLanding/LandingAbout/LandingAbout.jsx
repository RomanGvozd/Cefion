import React from "react";
import { useSelector } from "react-redux";

import './LandingAbout.scss';

function LandingAbout() {
    const theme = useSelector((store) => store.theme.theme);
    const language = useSelector((store) => store.language.language);

    return(
        <section className="landing-about">
            <div className="landing-about__header">
                <div className={theme === "dark" ? "header__about background-dark" : "header__about background-light"}>
                    {language === "RU"
                    ? "О нас"
                    : "About"
                    }
                </div>
                <div className={theme === "dark" ? "header__team background-dark" : "header__team background-light"}>
                    {language === "RU"
                    ? "Команда"
                    : "Team"
                    }
                </div>
            </div>
        </section>
    )
}

export default LandingAbout;
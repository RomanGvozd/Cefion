import React from "react";
import { useSelector } from "react-redux";

import './LandingFAQs.scss';

function LandingFAQs() {
    const theme = useSelector((store) => store.theme.theme);
    const language = useSelector((store) => store.language.language);

    return(
        <section className="landing-faqs">
            <div className="landing-faqs__header">
                <button className={theme === "dark" ? "header__button header__button-dark" : "header__button header__button-light"}>
                    {language === "RU"
                    ? "Новый раздел +"
                    : "New section +"
                    }
                </button>
                <button className={theme === "dark" ? "header__button header__button-dark" : "header__button header__button-light"}>
                    {language === "RU"
                    ? "Добавить новый вопрос"
                    : "Add a new question"
                    }
                </button>
            </div>
        </section>
    )
}

export default LandingFAQs;
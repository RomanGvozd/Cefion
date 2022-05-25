import React from "react";
import {useSelector} from "react-redux";

import './LandingRoadmap.scss';

function LandingRoadmap() {
    const theme = useSelector((store) => store.theme.theme);
    const language = useSelector((store) => store.language.language);

    return(
        <section className="landing-roadmap">
            <div className="landing-roadmap__block-left">
                <input 
                    className={theme === "dark" ? "block-left__input background-dark" : "block-left__input background-light"} 
                    type="text" 
                />
                <textarea className={theme === "dark" ? "block-left__texarea background-dark" : "block-left__texarea background-light"} >
                </textarea>
            </div>
            <div className="landing-roadmap__block-right">
                <button
                className={theme === "dark" ? "block-right__button background-dark" : "block-right__button background-light"} 
                >
                    {language === "RU"
                    ? "Новый раздел +"
                    : "New section +"
                    }
                </button>
            </div>
        </section>
    )
}

export default LandingRoadmap;
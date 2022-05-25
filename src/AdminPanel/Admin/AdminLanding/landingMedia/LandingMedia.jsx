import React, {useState} from "react";
import { useSelector } from "react-redux";

import './LandingMedia.scss';

function LandingMedia() {
    const theme = useSelector((store) => store.theme.theme);
    const language = useSelector((store) => store.language.language);

    return(
        <section className="landing-media">
            <label className={theme === "dark" ? "landing-media__wrapper-file background-dark" : "landing-media__wrapper-file background-light"}>
                <input className={theme === "dark" ? "landing-media__input-file background-dark" : "landing-media__input-file background-light"} type="file" />
                <p>
                    {language === "RU"
                    ? "Заменить фото"
                    : "Replace photo"
                    } 
                </p>
            </label>
            <div className="landing-media-wrapper">
                <input className={theme === "dark" ? "landing-media__input background-dark" : "landing-media__input background-light"} type="text" />
                <textarea className={theme === "dark" ? "landing-media__texarea background-dark" : "landing-media__texarea background-light "}>
                </textarea>
            </div>
        </section>
    )
}

export default LandingMedia;
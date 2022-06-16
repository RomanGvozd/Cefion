import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import scrollToElement from 'scroll-to-element';
import { content } from "./Description.config";

import './Description.scss';

function Description({pageID}) {

    useEffect(()=>{
        const elem = document.querySelector(`#${pageID}`)
        scrollToElement(elem, {
            offset: 0,
            ease: 'out-bounce',
            duration: 1500
        });
    }, [])

    const theme = useSelector((store) => store.theme.theme);
    const language = useSelector((store) => store.language.language);

    const {title, description1, description2, description3} = content[language];

    return(
        <section
            initial="hidden"
            whileInView="visible"
            className={theme === "dark" ? "description description-dark" : "description description-light"}
        >
            <div className="description__block">
                <div className="block__information">
                    <h2 className="description__title description__h2">
                        {title}
                    </h2>
                    <p className={theme === "dark" ? "description__text-dark description__p" : "description__text-light description__p"}>
                        {description1}
                    </p>
                    <p className={theme === "dark" ? "description__text-dark description__p" : "description__text-light description__p"}>
                        {description2}
                    </p>
                    <p className={theme === "dark" ? "description__text-dark description__p" : "description__text-light description__p"}>
                        {description3}
                    </p>
                    <div className="block__download">
                        <img className="download__button" src={require(`./image/android.svg`).default} alt="" />
                        <img className="download__button" src={require(`./image/google-play.svg`).default} alt="" />
                    </div>
                </div>
                {theme === "dark" 
                ? <img className="block__image" src={require('./image/descriptionDark.png')} alt="" />
                : <img className="block__image" src={require('./image/descriptionLight.png')} alt="" />
                }
            </div>
        </section>
    );
}

export default Description;
import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import { motion } from "framer-motion";
import scrollToElement from 'scroll-to-element';
import { useLocation } from "react-router-dom";
import { content } from "./PersonalAccount.config";

import './PersonalAccount.scss';

function PersonalAccount() {
    const {hash} = useLocation();

    useEffect(()=>{
        if (hash) {
            scrollToElement(`${hash}`);
        }
    }, [])

    const theme = useSelector((store) => store.theme.theme);
    const language = useSelector((store) => store.language.language);
    
    const imgAnimation = {
        hidden : {
            opacity: 0,
            scale: 0,
            transition: { duration: 0.7 },
        },
        visible : custom => ({
            opacity: 1,
            scale: 1,
            transition: { duration: 0.7, delay: custom * 0.3},
        })
    }

    const {title, description1, description2, description3, description4, button} = content[language]

    return(
        <>
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{amount: 0.2}}
                id="personalAccount" 
                className="personal-account"
            >
                {theme === "dark" 
                ?  <div className="personal-account__block-image">
                    <motion.img custom={1} variants={imgAnimation} className="block-image__image" src={require('./image/block-1Dark.png')} alt="" />
                    <div className="block-image__small">
                        <motion.img custom={2} variants={imgAnimation} className="block-image__small-1" src={require('./image/block-2Dark.png')} alt="" />
                        <motion.img custom={3} variants={imgAnimation} className="block-image__small-2" src={require('./image/block-3Dark.png')} alt="" />
                    </div>
                </div>
                : <div className="personal-account__block-image">
                    <motion.img custom={1} variants={imgAnimation} className="block-image__image" src={require('./image/block-1Light.png')} alt="" />
                    <div className="block-image__small">
                        <motion.img custom={2} variants={imgAnimation} className="block-image__small-1" src={require('./image/block-2Light.png')} alt="" />
                        <motion.img custom={3} variants={imgAnimation} className="block-image__small-2" src={require('./image/block-3Light.png')} alt="" />
                    </div>
                </div>
                }
                <div className="personal-account__description">
                    <h2 className="description__title">
                        {title}
                    </h2>
                    <p className={theme === "dark" ? "description__text-dark" : "description__text-light"}>
                        {description1}
                    </p>
                    <p className={theme === "dark" ? "description__text-dark" : "description__text-light"}>
                        {description2}
                    </p>
                    <p className={theme === "dark" ? "description__text-dark" : "description__text-light"}>
                        {description3}
                    </p>
                    <p className={theme === "dark" ? "description__text-dark" : "description__text-light"}>
                        {description4}
                    </p>
                    <button className="description__button">
                        {button}
                    </button>
                </div>
            </motion.section>
            <div className={theme === "dark" ? "line-dark" : "line-light"}></div>
        </>
    );
}

export default PersonalAccount;
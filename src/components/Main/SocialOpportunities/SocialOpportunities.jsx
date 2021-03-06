import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import { motion } from "framer-motion";
import scrollToElement from 'scroll-to-element';
import { useLocation } from "react-router-dom";

import './SocialOpportunities.scss';

function SocialOpportunities() {
    const {hash} = useLocation();

    useEffect(()=>{
        if (hash) {
            scrollToElement(`${hash}`);
        }
    }, [])

    const theme = useSelector((store) => store.theme.theme);
    const language = useSelector((store) => store.language.language);

    const [imageMargin, setImageMargin] = useState(180)

    useEffect(()=>{
        const width = window.innerWidth;
        if (width <= 1200 && width > 700) {
            setImageMargin(150)
        }else if (width <= 700 && width > 550) {
            setImageMargin(120)
        }else if (width <= 550) {
            setImageMargin(50)
        }
    },[])

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
            x: custom * `${imageMargin}`,
        })
    }

    return(
        <>
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{amount: 0.2}}
                id="socialOpportunities" 
                className="social-opportunities"
            >
                <div className="social-opportunities__description">
                    <h2 className="description__title">
                        {language === "RU"
                        ? "Социальные возможности"
                        : "Social Opportunities"
                        }
                    </h2>
                    <p className={theme === "dark" ? "description__text-dark" : "description__text-light"}>
                        {language === "RU"
                        ? "Создайте учётную запись на платформе, где уважают личные границы. Подпишитесь на перспективных партнёров, друзей, новых знакомых."
                        : "Create an account on a platform that respects personal boundaries. Subscribe to promising partners, friends, and new acquaintances."
                        }
                    </p>
                    <h4 className="description__subtitle">
                        {language === "RU"
                        ? "Сообщения"
                        : "Messages"
                        }
                    </h4>
                    <p className={theme === "dark" ? "description__text-dark" : "description__text-light"}>
                        {language === "RU"
                        ? "Шифрование чатов в блокчейне, круглосуточные разговоры один на один с друзьями-трейдерами"
                        : "Encryption of chats in the blockchain and round-the-clock conversations with fellow traders"
                        }
                    </p>
                    <h4 className="description__subtitle">
                        {language === "RU"
                        ? "Подписка на группы"
                        : "Subscribe to groups"
                        }
                    </h4>
                    <p className={theme === "dark" ? "description__text-dark" : "description__text-light"}>
                        {language === "RU"
                        ? "Советы опытных инвесторов, участие в цифровизированном сообществе и множество новых знакомств"
                        : "Tips from experienced investors, digital community engagement, and a lot of new connections"
                        }
                    </p>
                    <h4 className="description__subtitle">
                        {language === "RU"
                        ? "Групповой чат"
                        : "Group chat"
                        }
                    </h4>
                    <p className={theme === "dark" ? "description__text-dark" : "description__text-light"}>
                        {language === "RU"
                        ? "Обсуждение последних котировок токенов, оригинальных NFT и других тем из криптомира"
                        : "Discussion of the latest token quotes, original NFTs, and other topics from the cryptoworld"
                        }
                    </p>
                </div>
                {theme === "dark" 
                ? <div className="social-opportunities__block-image">
                    <motion.img custom={2} variants={imgAnimation} className="social-opportunities__image opportunities__image-1" src={require('./image/block-1Dark.png')} alt="" />
                    <motion.img custom={1} variants={imgAnimation} className="social-opportunities__image opportunities__image-2" src={require('./image/block-2Dark.png')} alt="" />
                    <motion.img custom={0} variants={imgAnimation} className="social-opportunities__image opportunities__image-3" src={require('./image/block-3Dark.png')} alt="" />
                </div>
                : <div className="social-opportunities__block-image">
                    <motion.img custom={2} variants={imgAnimation} className="social-opportunities__image opportunities__image-1" src={require('./image/block-1Light.png')} alt="" />
                    <motion.img custom={1} variants={imgAnimation} className="social-opportunities__image opportunities__image-2" src={require('./image/block-2Light.png')} alt="" />
                    <motion.img custom={0} variants={imgAnimation} className="social-opportunities__image opportunities__image-3" src={require('./image/block-3Light.png')} alt="" />
                </div>
                }
            </motion.section>
            <div className={theme === "dark" ? "line-dark" : "line-light"}></div>
        </>
    );
}

export default SocialOpportunities;
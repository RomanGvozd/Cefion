import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import { motion } from "framer-motion";
import scrollToElement from 'scroll-to-element';
import { useLocation } from "react-router-dom";

import './Timeline.scss';

function Timeline() {
    const {hash} = useLocation();

    useEffect(()=>{
        scrollToElement(`${hash}`);
    }, [])

    const theme = useSelector((store) => store.theme.theme);
    const language = useSelector((store) => store.language.language);

    const scrollTop = () => {
        window.scrollTo(0, 0);
    }

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
    
    return(
        <>
            <motion.section 
                initial="hidden"
                whileInView="visible"
                viewport={{amount: 0.2}}
                id="timeline" 
                className="timeline"
            >
                <div className="timeline__description">
                    <h2 className="description__title">
                        {language === "RU"
                        ? "Лента новостей"
                        : "News Feed"
                        }
                    </h2>
                    <p className={theme === "dark" ? "description__text-dark" : "description__text-light"}>
                        {language === "RU"
                        ? "Одна из задач Cefion — рассказать инвесторам о главных тенденциях на рынке криптовалют."
                        : "One of the tasks of Cefion is to tell investors about the global trends in the cryptocurrency market."
                        }
                    </p>
                    <p className={theme === "dark" ? "description__text-dark" : "description__text-light"}>
                        {language === "RU"
                        ? "Приложение хранит последние, популярные и 1–2 недельные новости, чтобы вы могли ознакомиться с актуальными событиями."
                        : "The app stores the latest, popular, and 1–2 week news so that you can find out more about current events."
                        }
                    </p>
                    <p className={theme === "dark" ? "description__text-dark" : "description__text-light"}>
                        {language === "RU"
                        ? "Платформа предлагает светлый и тёмный режим чтения, подстраиваясь под каждого пользователя."
                        : "The platform offers light and dark reading modes, adaptable to each user."
                        }
                    </p>
                    <p className={theme === "dark" ? "description__text-dark" : "description__text-light"}>
                        {language === "RU"
                        ? "Изучайте вдохновляющие статьи и инвестируйте правильно!"
                        : "Study inspirational articles and invest wisely!"
                        }
                    </p>
                    <Link to="/news" onClick={scrollTop}>
                        <button className="description__button">
                            {language === "RU"
                            ? "Читать новости"
                            : "Read news"
                            }
                        </button>
                    </Link>
                </div>
                {theme === "dark" 
                ? <div className="timeline__block-image">
                    <motion.img custom={1} variants={imgAnimation} className="timeline__image1" src={require('./image/block-1Dark.png')} alt="" />
                    <div className="timeline__block-right">
                        <motion.img custom={2} variants={imgAnimation} className="timeline__image2" src={require('./image/block-2Dark.png')} alt="" />
                        <motion.img custom={3} variants={imgAnimation} className="timeline__image3" src={require('./image/block-3Dark.png')} alt="" />
                    </div>
                </div>
                : <div className="timeline__block-image">
                    <motion.img custom={1} variants={imgAnimation} className="timeline__image1" src={require('./image/block-1Light.png')} alt="" />
                    <div className="timeline__block-right">
                        <motion.img custom={2} variants={imgAnimation} className="timeline__image2" src={require('./image/block-2Light.png')} alt="" />
                        <motion.img custom={3} variants={imgAnimation} className="timeline__image3" src={require('./image/block-3Light.png')} alt="" />
                    </div>
                </div>
                }
            </motion.section>
            <div className={theme === "dark" ? "line-dark" : "line-light"}></div>
        </>
    )
}

export default Timeline;
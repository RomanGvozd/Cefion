import React from "react";
import {useSelector} from "react-redux";
import { motion } from "framer-motion";

import './Briefly.scss';

function Briefly() {
    const theme = useSelector((store) => store.theme.theme);
    const language = useSelector((store) => store.language.language);

    const imgAnimation = {
        hidden : {
            opacity: 0,
            scale: 0,
            transition: { duration: 0.7 },
        },
        visible : {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.7 },
        }
    }

    return(
        <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{amount: 0.2}}
        className={theme === "dark" ? "briefly briefly-dark" : "briefly briefly-light"}
        >
            {theme === "dark" 
            ? <motion.img variants={imgAnimation} className="briefly__image" src={require('./image/brieflyDark.png')} alt="" />
            : <motion.img variants={imgAnimation} className="briefly__image" src={require('./image/brieflyLight.png')} alt="" />
            }
            <div className="briefly__description">
                <h2 className="description__title">
                    {language === "RU"
                    ? "Конфиденциально. Легко. Социально"
                    : "Confidential. Easy. Social"
                    }
                </h2>
                <p className={theme === "dark" ? "description__text-dark" : "description__text-light"}>
                    {language === "RU"
                    ? "Прокачайте навыки инвестирования и вступайте в финансовую игру с другими пользователями! Превратите смартфон в эффективное и безопасное рабочее место, скачав приложение Cefion!"
                    : "Upgrade your investing skills and play the financial game with other users! Turn your smartphone into an efficient and safe workplace by downloading the Cefion app!"
                    }
                </p>
                <div className="wrapper-line">
                    <div className="line-progress"></div>
                    <div className="line"></div>
                </div>
                <p className="line-text">
                    {language === "RU"
                    ? "72% завершенно"
                    : "72% completed"
                    }
                </p>
            </div>
        </motion.section>
    );
}

export default Briefly;
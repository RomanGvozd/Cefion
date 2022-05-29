import React from "react";
import {useSelector} from "react-redux";
import { motion } from "framer-motion";

import './PersonalAccount.scss';


function PersonalAccount() {
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

    return(
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{amount: 0.2}}
            id="personalAccount" 
            className={theme === "dark" ? "personal-account personal-account-dark" : "personal-account personal-account-light"}
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
                    {language === "RU"
                    ? "Личный аккаунт"
                    : "Personal account"
                    }
                </h2>
                <p className={theme === "dark" ? "description__text-dark" : "description__text-light"}>
                    {language === "RU"
                    ? "Создайте учётную запись на платформе, где уважают личные границы. Подпишитесь на перспективных партнёров, друзей, новых знакомых."
                    : "Create an account on a platform that respects personal boundaries. Subscribe to promising partners, friends, and new acquaintances."
                    }
                </p>
                <p className={theme === "dark" ? "description__text-dark" : "description__text-light"}>
                    {language === "RU"
                    ? "В Cefion есть расширенные возможности по настройке безопасности и конфиденциальности аккаунта. Включите 2FA и экран безопасности, придумайте проверочную фразу для входа."
                    : "Cefion has advanced options for configuring account security and privacy. Turn on 2FA and the security screen and create a passphrase to enter."
                    }
                </p>
                <p className={theme === "dark" ? "description__text-dark" : "description__text-light"}>
                    {language === "RU"
                    ? "Спрячьте от других пользователей кошелёк, подписчиков и статистику. На платформе создана атмосфера анонимности и уважения к личной информации."
                    : "Hide your wallet, subscribers, and statistics from other users. The platform has an atmosphere of anonymity and respect for personal information."
                    }
                </p>
                <p className={theme === "dark" ? "description__text-dark" : "description__text-light"}>
                    {language === "RU"
                    ? "Управляйте своим инвестиционным портфелем и делитесь достижениями в приложении!"
                    : "Manage your investment portfolio and share your achievements in the app!"
                    }
                </p>
                <button className="description__button">
                    {language === "RU"
                    ? "Давайте начнем"
                    : "Let's start"
                    }
                </button>
            </div>
        </motion.section>
    );
}

export default PersonalAccount;
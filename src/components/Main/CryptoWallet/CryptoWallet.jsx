import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import { motion } from "framer-motion";
import scrollToElement from 'scroll-to-element';
import { useLocation } from "react-router-dom";

import './CryptoWallet.scss';

function CryptoWallet() {
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

    return(
        <>
            <motion.section 
                initial="hidden"
                whileInView="visible"
                viewport={{amount: 0.2}}
                id="cryptoWallet" 
                className="crypto-wallet"
            >
                {theme === "dark" 
                ? <div className="crypto-wallet__block-image">
                    <motion.img custom={1} variants={imgAnimation} className="crypto-wallet__image" src={require('./image/block-1Dark.png')} alt="" />
                    <motion.img custom={2} variants={imgAnimation} className="crypto-wallet__image" src={require('./image/block-2Dark.png')} alt="" />
                </div>
                : <div className="crypto-wallet__block-image">
                    <motion.img custom={1} variants={imgAnimation} className="crypto-wallet__image" src={require('./image/block-1Light.png')} alt="" />
                    <motion.img custom={2} variants={imgAnimation} className="crypto-wallet__image" src={require('./image/block-2Light.png')} alt="" />
                </div>
                }
                <div className="crypto-wallet__description">
                <h2 className="description__title">
                        {language === "RU"
                        ? "Безопасный крипто-кошелек в смартфоне"
                        : "Secure crypto wallet in your smartphone"
                        }
                    </h2>
                    <p className={theme === "dark" ? "description__text-dark" : "description__text-light"}>
                        {language === "RU"
                        ? "В Cefion можно совершать несколько операций с цифровыми активами: отправлять, получать и покупать токены. Просматривайте свои действия, добавляйте новые кошельки. Проверяйте текущий баланс Bitcoin, Ethereum, Litecoin, Everscale и других криптовалют. Инвестируйте, отслеживая выгодные ставки пользователей."
                        : "In Cefion, you can perform any operations with digital assets. Send, receive, or buy tokens in real-time. View your actions and add new wallets. Check the current balance of Bitcoin, Ethereum, Litecoin, Everscale, and other cryptocurrencies. Invest by tracking profitable user rates."
                        }
                    </p>
                </div>
            </motion.section>
            <div className={theme === "dark" ? "line-dark" : "line-light"}></div>
        </>
    )
}

export default CryptoWallet;
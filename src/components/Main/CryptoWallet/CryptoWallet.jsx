import React from "react";
import {useSelector} from "react-redux";
import { motion } from "framer-motion";

import './CryptoWallet.scss';
import './CryptoWalletAdaptive.scss';

function CryptoWallet() {
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
        id="cryptoWallet" 
        className={theme === "dark" ? "crypto-wallet crypto-wallet-dark" : "crypto-wallet crypto-wallet-light"}
        >
            {theme === "dark" 
            ? <motion.img variants={imgAnimation} className="crypto-wallet__image" src={require('./image/ctyptoWalletDark.png')} alt="" />
            : <motion.img variants={imgAnimation} className="crypto-wallet__image" src={require('./image/cryptoWalletLight.png')} alt="" />
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
    )
}

export default CryptoWallet;
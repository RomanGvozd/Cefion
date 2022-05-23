import React from "react";
import {useSelector} from "react-redux";

import './SocialOpportunities.scss';
import './SocialOpportunitiesAdaptive.scss';

function SocialOpportunities() {
    const theme = useSelector((store) => store.theme.theme);
    const language = useSelector((store) => store.language.language);

    return(
        <section className={theme === "dark" ? "social-opportunities social-opportunities-dark" : "social-opportunities social-opportunities-light "}>
            <div className="social-opportunities__description">
                <h2 className="description__title">
                    {language === "RU"
                    ? "Социальные возможности"
                    : "Personal account"
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
            ? <img className="social-opportunities__image" src={require('./image/SocialOpportunitiesDark.png')} alt="" />
            : <img className="social-opportunities__image" src={require('./image/SocialOpportunitiesLight.png')} alt="" />
            }
        </section>
    );
}

export default SocialOpportunities;
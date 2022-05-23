import React from 'react';
import {useSelector} from "react-redux";

function Q12022() {
    const language = useSelector((store) => store.language.language);

    return (
        <div className='roadmap-description__goal'>
            <h5 className='goal__title'>
                Q1 2022
            </h5>
            <ul className='goal__list'>
                <li className='goal__list-item'>
                    {language === "RU"
                    ? "— Запуск приложение. Доступный функционал: социальная сеть во всех его пониманиях, мессенджер, кошелёк с монетой евер, новостной блок, блок обучения, блок календаря с рабочей областью и группы"
                    : "— Application launch. Available functionality: a social network in all its senses, a messenger, a wallet with an ever coin, a news block, a learning block, a calendar block with a workspace and groups"
                    }
                </li>
                <li className='goal__list-item'>
                    {language === "RU"
                    ? "— Разработка новых блоков (заработок)"
                    : "— Development of new blocks (earnings)"
                    }
                </li>
                <li className='goal__list-item'>
                    {language === "RU"
                    ? "— Разработка р2 ₽ обменника и добавление других монет в кошелёк (BTC, Etherium и USDT-trc20)"
                    : "— Development of p2 ₽ exchanger and adding other coins to the wallet (BTC, Etherium and USDT-trc20)"
                    }
                </li>
                <li className='goal__list-item'>
                    {language === "RU"
                    ? "— Выпуск Web версии приложения"
                    : "— Release of the Web version of the application"
                    }
                </li>
            </ul>
        </div>
    );
}

export default Q12022;
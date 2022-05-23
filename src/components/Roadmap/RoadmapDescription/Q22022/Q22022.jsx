import React from 'react';
import {useSelector} from "react-redux";

function Q22022() {
    const language = useSelector((store) => store.language.language);

    return (
        <div className='roadmap-description__goal'>
            <h5 className='goal__title'>
                Q2 2022
            </h5>
            <ul className='goal__list'>
                <li className='goal__list-item'>
                    {language === "RU"
                    ? "— Разработка и внедрение блоков: Заработок (разработка и внесение блока аналог Seosprint.net со схожим функционалом, что увеличит объём транзакций токеном евер)"
                    : "— Development and implementation of blocks: Earnings (development and introduction of a block similar to Seosprint.net with similar functionality, which will increase the volume of transactions with the token ever)"
                    }
                </li>
                <li className='goal__list-item'>
                    {language === "RU"
                    ? "— Разработка гемблинг (ставки на киберспорт, игры в покер, рулетка и т.д.) в блоке (гейм)"
                    : "— Gambling development (e-sports bets, poker games, roulette, etc.) in a block (game)"
                    }
                </li>
                <li className='goal__list-item'>
                    {language === "RU"
                    ? "— Разработка Metaverse Game v 1.0"
                    : "— Development Metaverse Game v 1.0"
                    }
                </li>
                <li className='goal__list-item'>
                    {language === "RU"
                    ? "— Частичное изменение и добавление дизайна"
                    : "— Partial change and addition of design"
                    }
                </li>
            </ul>
        </div>
    );
}

export default Q22022;
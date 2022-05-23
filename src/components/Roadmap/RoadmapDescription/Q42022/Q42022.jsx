import React from 'react';
import {useSelector} from "react-redux";

function Q42022() {
    const language = useSelector((store) => store.language.language);

    return (
        <div className='roadmap-description__goal'>
            <h5 className='goal__title'>
                Q4 2022
            </h5>
            <ul className='goal__list'>
                <li className='goal__list-item'>
                    {language === "RU"
                    ? "— Внедрение гемблинг в блок GAME (Gambling)"
                    : "— Introduction of gambling into the GAME block (Gambling)"
                    }
                </li>
                <li className='goal__list-item'>
                    {language === "RU"
                    ? "— Разработка гемблинг (ставки на киберспорт, игры в покер, рулетка и т.д.)"
                    : "— Gambling development (e-sports bets, poker games, roulette, etc.)"
                    }
                </li>
                <li className='goal__list-item'>
                    {language === "RU"
                    ? "— Разработка и внедрение Metaverse Game v 1.0 (unity 3d)"
                    : "— Development and implementation of Metaverse Game v 1.0 (unity 3d)"
                    }
                </li>
                <li className='goal__list-item'>
                    {language === "RU"
                    ? "— Внедрение маркетплейса и внедрение нфт в блок кошелька"
                    : "— Implementation of the marketplace and the introduction of NFT into the wallet block"
                    }
                </li>
                <li className='goal__list-item'>
                    {language === "RU"
                    ? "— Проведение голосования по разработке и внедрению новых блоков от пользователей сети"
                    : "— Voting on the development and implementation of new blocks from network users"
                    }
                </li>
            </ul>
        </div>
    );
}

export default Q42022;
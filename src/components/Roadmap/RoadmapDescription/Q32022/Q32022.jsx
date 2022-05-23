import React from 'react';
import {useSelector} from "react-redux";

function Q32022() {
    const language = useSelector((store) => store.language.language);

    return (
        <div className='roadmap-description__goal'>
            <h5 className='goal__title'>
                Q3 2022
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
                    ? "— Разработка Metaverse Game v 1.0"
                    : "— Development Metaverse Game v 1.0"
                    }
                </li>
                <li className='goal__list-item'>
                    {language === "RU"
                    ? "— Разработка маркетплейса и нфт в блок кошелька (чтобы можно было визуализировать все nft активы в сети евер)"
                    : "— Development of a marketplace and nft in a wallet block (so that you can visualize all nft assets in the ever network)"
                    }
                </li>
            </ul>
        </div>
    );
}

export default Q32022;
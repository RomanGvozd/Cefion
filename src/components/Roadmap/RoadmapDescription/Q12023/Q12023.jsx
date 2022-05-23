import React from 'react';
import {useSelector} from "react-redux";

function Q12023() {
    const language = useSelector((store) => store.language.language);

    return (
        <div className='roadmap-description__goal'>
            <h5 className='goal__title'>
                Q1 2023
            </h5>
            <ul className='goal__list'>
                <li className='goal__list-item'>
                    {language === "RU"
                    ? "— Будет зависеть от пользователей сети и необходимостей для этих пользователей"
                    : "— Will depend on network users and needs for those users"
                    }
                </li>
            </ul>
        </div>
    );
}

export default Q12023;
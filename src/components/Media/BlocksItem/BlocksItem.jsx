import React from 'react';
import {useSelector} from "react-redux";
import { content } from "./BlocksItem.config";

import './BlocksItem.scss'

function BlocksItem({block}) {
    const theme = useSelector((store) => store.theme.theme);
    const language = useSelector((store) => store.language.language);

    const { title, description, text } = content[language];

    return (
        <div className='media__block'>
            {theme === "dark"
            ? <img className='block__image' src={require('./image/SocPullDark.png')} alt="" />
            : <img className='block__image' src={require('./image/SocPullLight.png')} alt="" />
            }
            <div className='block__content'>
                <h4 className='content__title'>
                    {title}
                    </h4>
                <p className={theme === "dark" ? "description__text-dark" : "description__text-light"}>
                    {description}
                </p>
                <p className={theme === "dark" ? "description__text-dark" : "description__text-light"}>
                    {text}
                </p>
            </div>
        </div>
    );
}

export default BlocksItem;
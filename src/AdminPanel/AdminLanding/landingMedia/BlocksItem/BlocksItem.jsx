import React from 'react';
import {useSelector} from "react-redux";
import { content } from "./BlocksItem.config";

import './BlocksItem.scss'

function BlocksItem({block, onDelete}) {
    const theme = useSelector((store) => store.theme.theme);
    const language = useSelector((store) => store.language.language);

    const { text } = content[language];

    const handleDelete = (id) => {
        onDelete(id)
    }

    return (
        <div className='media__block'>
            <div className='button-delete' onClick={()=>handleDelete(block.id)}>
            </div>
            {theme === "dark"
            ? <img className='block__image' src={require('./image/SocPullDark.png')} alt="" />
            : <img className='block__image' src={require('./image/SocPullLight.png')} alt="" />
            }
            <div className='block__content'>
                {language === "RU" 
                ? <h4 className='content__title'>{block.titleRU}</h4>
                : <h4 className='content__title'>{block.titleEN}</h4>
                }
                {language === "RU" 
                ? <p className={theme === "dark" ? "description__text-dark" : "description__text-light"}>{block.descriptionRU}</p>
                : <p className={theme === "dark" ? "description__text-dark" : "description__text-light"}>{block.descriptionEN}</p>
                }
                <p className={theme === "dark" ? "description__text-dark" : "description__text-light"}>
                    {text}
                </p>
            </div>
        </div>
    );
}

export default BlocksItem;
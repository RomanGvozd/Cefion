import React from 'react';
import {useSelector} from "react-redux";

import './BlocksItem.scss'

function BlocksItem({block}) {
    const language = useSelector((store) => store.language.language);

    return (
        <div className='roadmap-description__goal'>
            <h5 className='goal__title'>
                {block.title}
            </h5>
            {language === "RU"
            ? <p className='goal__list-text'>{block.descriptionRU}</p>
            : <p className='goal__list-text'>{block.descriptionEN}</p>
            }
        </div>
    );
}

export default BlocksItem;
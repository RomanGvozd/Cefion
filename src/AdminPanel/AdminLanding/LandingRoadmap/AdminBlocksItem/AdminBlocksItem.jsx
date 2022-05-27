import React from 'react';
import {useSelector} from "react-redux";

import './AdminBlocksItem.scss'

function AdminBlocksItem({block, onDelete}) {
    const language = useSelector((store) => store.language.language);

    const handleDelete = (id) => {
        onDelete(id)
    }

    return (
        <div className='roadmap-description__goal'>
            <div 
                className='goal__button-delete'
                onClick={()=>handleDelete(block.id)}
            >
            </div>
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

export default AdminBlocksItem;
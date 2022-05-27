import React from 'react';
import {useSelector} from "react-redux";
import {content} from './Media.config';

import BlocksItem from './BlocksItem/BlocksItem';

import './Media.scss';

function Media() {
    const theme = useSelector((store) => store.theme.theme);
    const media = useSelector((store) => store.media);
    const language = useSelector((store) => store.language.language);

    const {title}  =content[language]

    return (
        <section className={theme === 'dark' ? 'media media-dark' : 'media media-light'}>
            <h2 className='media-description__title'>
                {title}
            </h2>
            <div>
                {media.map((block)=>(
                    <BlocksItem key={block.id} block={block}/>
                ))} 
            </div>
        </section>
    );
}

export default Media;
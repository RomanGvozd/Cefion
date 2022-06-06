import React, {useState} from 'react';
import {useSelector} from "react-redux";
import {content} from "./RoadmapDescription.config";

import BlocksItem from './BlocksItem/BlocksItem';

import './RoadmapDescription.scss';

function RoadmapDescription() {
    const theme = useSelector((store) => store.theme.theme);
    const roadmap = useSelector((store) => store.roadmap);
    const language = useSelector((store) => store.language.language);

    const {title, description} = content[language];

    return (
        <>
            <section className={theme ==="dark" ? "roadmap-description roadmap-description-dark" : "roadmap-description roadmap-description-light"}>
                <h2 className='roadmap-description__title'>
                    {title}
                </h2>
                <div className='roadmap-description__text'>
                    <p className={theme === "dark" ? "description__text-dark" : "description__text-light"}>
                        {description}
                    </p>
                </div>
                <div>
                    {roadmap.map((block)=>(
                        <BlocksItem key={block.id} block={block}/>
                    ))}
                </div>
            </section>
            <div className={theme === "dark" ? "line-dark" : "line-light"}></div>
        </>
    );
}

export default RoadmapDescription;
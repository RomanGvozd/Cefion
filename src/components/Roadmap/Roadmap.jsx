import React from 'react';
import {useSelector} from "react-redux";

import RoadmapDescription from './RoadmapDescription/RoadmapDescription';
import Numbers from '../Main/Numbers/Numbers';

import './Roadmap.scss'

function Roadmap() {
    const theme = useSelector((store) => store.theme.theme);

    return (
        <main className={theme === 'dark' ? 'roadmap-main roadmap-main-dark' : 'roadmap-main roadmap-main-light'}>
            <RoadmapDescription/>
            <Numbers/>
        </main>
    );
}

export default Roadmap;
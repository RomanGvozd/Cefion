import React from 'react';
import {useSelector} from "react-redux";

import AboutDescription from './AboutDescription/AboutDescription';
import AboutCommand from './AboutCommand/AboutCommand';

import "./About.scss"

function About() {
    const theme = useSelector((store) => store.theme.theme);

    return (
        <main className={theme === 'dark' ? 'about-main about-main-dark' : 'about-main about-main-light'}>
            <AboutDescription/>
            <AboutCommand/>
        </main>
    );
}

export default About;
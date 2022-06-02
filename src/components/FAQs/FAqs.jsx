import React from 'react';
import {useSelector} from "react-redux";

import FindQuestion from './FindQuestion/FindQuestion';
import AskQuestion from './AskQuestion/AskQuestion';

import './FAQs.scss'

function FAQs() {
    const theme = useSelector((store) => store.theme.theme);

    return (
        <main className={theme === 'dark' ? 'faqs-main faqs-main-dark' : 'faqs-main faqs-main-light'}>
            <FindQuestion/>
            <AskQuestion/>
        </main>
    );
}

export default FAQs;
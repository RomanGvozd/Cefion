import React from 'react';
import {useSelector} from "react-redux";
import {content} from './AskQuesion.config';

import './AskQuestion.scss';

function AskQuestion() {
    const theme = useSelector((store) => store.theme.theme);
    const language = useSelector((store) => store.language.language);

    const {title, button, textarea,} = content[language]

    return (
        <>
            <section className={theme === "dark" ? 'ask-question ask-question-dark' : 'ask-question ask-question-light'}>
                <h2 className='ask-question-description__title'>
                    {title}
                </h2>
                <textarea 
                    className='ask-question__messege' 
                    placeholder={textarea}>
                </textarea>
                <div className='ask-question__block'>
                    <input className='block__input' type="text" placeholder='E-mail'/>
                    <button className='block__button'>
                        {button}
                    </button>
                </div>
            </section>
            <div className={theme === "dark" ? "line-dark" : "line-light"}></div>
        </>
    );
}

export default AskQuestion;
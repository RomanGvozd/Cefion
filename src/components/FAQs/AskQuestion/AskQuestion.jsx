import React from 'react';
import {useSelector} from "react-redux";

import './AskQuestion.scss';

function AskQuestion() {
    const theme = useSelector((store) => store.theme.theme);
    const language = useSelector((store) => store.language.language);

    return (
        <>
            <section className={theme === "dark" ? 'ask-question ask-question-dark' : 'ask-question ask-question-light'}>
                <h2 className='ask-question-description__title'>
                    {language === "RU"
                    ? 'Задать вопрос'
                    : 'Ask a Question'
                    }
                </h2>
                <textarea className='ask-question__messege' placeholder={language === "RU" ? "Опишите полностью ваш вопрос" : "Please describe your question in full."}>
                </textarea>
                <div className='ask-question__block'>
                    <input className='block__input' type="text" placeholder='E-mail'/>
                    <button className='block__button'>
                        {language === "RU"
                        ? 'Отправить'
                        : 'Send'
                        }
                    </button>
                </div>
            </section>
            <div className={theme === "dark" ? "line-dark" : "line-light"}></div>
        </>
    );
}

export default AskQuestion;
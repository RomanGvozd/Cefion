import React, {useState} from 'react';
import {useSelector} from "react-redux";

import arr from './questions';

import './FindQuestion.scss';

function FindQuestion() {
    const theme = useSelector((store) => store.theme.theme);
    const language = useSelector((store) => store.language.language);

    const [questions, setQuestions] = useState(arr)

    const handleOpen = (id) => {
        setQuestions(questions.map( question=> {
            if (question.id === id) {
                question.isShow = !question.isShow
            }
            return question
        }))
    }

    return (
        <>
            <section className={theme === "dark" ? 'find-question find-question-dark' : 'find-question find-question-light'}>
                <h2 className='find-question-description__title'>
                    FAQs
                </h2>
                <input className='find-question__input' type="text" placeholder={language === 'RU' ? 'Найдите ответы на вопросы' : 'Find answers to questions'} />
                {questions.map((question)=>(
                    <div className={question.isShow ? 'find-question__block find-question__block-active' : 'find-question__block'} key={question.id} onClick={()=>handleOpen(question.id)}>
                        <div className='block__header'>
                            {language === "RU"
                            ? <h5 className={question.isShow ? 'block__title block__title-active' : 'block__title'}>{question.titleRU}</h5>
                            : <h5 className={question.isShow ? 'block__title block__title-active' : 'block__title'}>{question.titleEN}</h5>
                            }
                            {theme === "dark" 
                            ? <div className={question.isShow ? 'block__vector-dark block__vector-active' : 'block__vector-dark'}></div>
                            : <div className={question.isShow ? 'block__vector-light block__vector-active' : 'block__vector-light'}></div>
                            }
                            
                        </div>
                        {question.isShow === true && language === "RU" 
                        ? <p className='block__text'>{question.descriptionRU}</p>
                        : <></>
                        }
                        {question.isShow === true && language === "EN" 
                        ? <p className='block__text'>{question.descriptionEN}</p>
                        : <></>
                        }
                    </div>
                ))}
            </section>
            <div className={theme === "dark" ? "line-dark" : "line-light"}></div>
        </>
    );
}

export default FindQuestion;
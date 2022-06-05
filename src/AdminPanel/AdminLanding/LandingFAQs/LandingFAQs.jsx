import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import { content } from "./LandingFAQs.config";

import {showItem} from '../../../common/store/faqs/actions';
import {addItem} from '../../../common/store/faqs/actions';
import {deleteItem} from '../../../common/store/faqs/actions';

import './LandingFAQs.scss';

function LandingFAQs() {
    const faqs = useSelector((store) => store.faqs);
    const theme = useSelector((store) => store.theme.theme);
    const language = useSelector((store) => store.language.language);

    const [inputValueRU, setInputValueRU] = useState('')
    const [textareaValueRU, setTextareatValueRU] = useState('')
    const [inputValueEN, setInputValueEN] = useState('')
    const [textareaValueEN, setTextareaValueEN] = useState('')

    const { button, inputRU, inputEN, textareaRU, textareaEN } = content[language];

    const dispatch = useDispatch();

    const handleOpen = (id) => {
        dispatch(showItem(id))

    }

    const handleAdd = () => {
        dispatch(addItem(inputValueRU, inputValueEN, textareaValueRU, textareaValueEN))
    }

    const handleDelete = (id) => {
        dispatch(deleteItem(id))
    }

    return(
        <section className="landing-faqs">
            <div className="landing-faqs__aside">
                <input 
                    className={theme === "dark" ? "aside__input background-dark" : "aside__input background-light"}
                    type="text"
                    placeholder={inputRU}
                    value={inputValueRU}
                    onChange={(e)=>setInputValueRU(e.target.value)}
                />
                <textarea
                    className={theme === "dark" ? "aside__textarea background-dark" : "aside__textarea background-light"}
                    placeholder={textareaRU}
                    value={textareaValueRU}
                    onChange={(e)=>setTextareatValueRU(e.target.value)}
                >
                </textarea>
                <input 
                    className={theme === "dark" ? "aside__input background-dark" : "aside__input background-light"}
                    type="text"
                    placeholder={inputEN}
                    value={inputValueEN}
                    onChange={(e)=>setInputValueEN(e.target.value)}
                />
                <textarea
                    className={theme === "dark" ? "aside__textarea background-dark" : "aside__textarea background-light"}
                    placeholder={textareaEN}
                    value={textareaValueEN}
                    onChange={(e)=>setTextareaValueEN(e.target.value)}
                >
                </textarea>
                <button 
                    className={theme === "dark" ? "aside__button background-dark" : "aside__button background-light"}
                    onClick={handleAdd}
                >
                    {button}
                </button>
            </div>
            <div className="landing-faqs__aside-faqs">
                {faqs.map((question)=>(
                    <div 
                        className={question.isShow ? 'find-question__block find-question__block-active' : 'find-question__block'} 
                        key={question.id} 
                        onClick={()=>handleOpen(question.id)}
                    >
                        <div className='button-delete' onClick={()=>handleDelete(question.id)}>
                        </div>
                        <div className='block__header'>
                            {language === "RU"
                            ? <h5 className={question.isShow ? 'block__title block__title-active' : 'block__title'}>{question.titleRU}</h5>
                            : <h5 className={question.isShow ? 'block__title block__title-active' : 'block__title'}>{question.titleEN}</h5>
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
            </div>
        </section>
    )
}

export default LandingFAQs;
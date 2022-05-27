import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import AdminBlocksItem from "./AdminBlocksItem/AdminBlocksItem";

import {addItem} from '../../../common/store/roadmap/actions';
import {deleteItem} from '../../../common/store/roadmap/actions';

import './LandingRoadmap.scss';

function LandingRoadmap() {
    const dispatch = useDispatch();
    
    const theme = useSelector((store) => store.theme.theme);
    const roadmap = useSelector((store) => store.roadmap);
    const language = useSelector((store) => store.language.language);

    const [inputValue, setInputValue] = useState('');
    const [textareaValueRU, setTextareaValueRU] = useState('');
    const [textareaValueEN, setTextareaValueEN] = useState('');

    const handleAdd = () => {
        dispatch(addItem(inputValue, textareaValueRU, textareaValueEN))
    }

    const handleDelete = (id) => {
        dispatch(deleteItem(id))
    }

    return(
        <section className="landing-roadmap">
            <div className="landing-roadmap__block-left">
                <input 
                    className={theme === "dark" ? "block-left__input background-dark" : "block-left__input background-light"} 
                    type="text" 
                    placeholder={language === "RU" ? "Введите заголовок" : "Enter title"}
                    onChange={(e)=>setInputValue(e.target.value)}
                    value={inputValue}
                />
                <textarea 
                    className={theme === "dark" ? "block-left__texarea background-dark" : "block-left__texarea background-light"} 
                    placeholder={language === "RU" ? "Введите описание на русском" : "Enter a description in Russian"}
                    onChange={(e)=>setTextareaValueRU(e.target.value)}
                    value={textareaValueRU}
                >
                </textarea>
                <textarea 
                    className={theme === "dark" ? "block-left__texarea background-dark" : "block-left__texarea background-light"} 
                    placeholder={language === "RU" ? "Введите описание на английском" : "Enter a description in English"}
                    onChange={(e)=>setTextareaValueEN(e.target.value)}
                    value={textareaValueEN}
                >
                </textarea>
            </div>
            <div className="landing-roadmap__block-right">
                <button
                    className={theme === "dark" ? "block-right__button background-dark" : "block-right__button background-light"}
                    onClick={handleAdd}
                >
                    {language === "RU"
                    ? "Новый раздел +"
                    : "New section +"
                    }
                </button>
                <div className="landing-roadmap__block-roadmap">
                    {roadmap.map((block)=>(
                        <AdminBlocksItem key={block.id} block={block} onDelete={handleDelete}/>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default LandingRoadmap;
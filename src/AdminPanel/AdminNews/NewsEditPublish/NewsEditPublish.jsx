import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, Routes, Route, useLocation } from "react-router-dom";
import { content } from "./NewsEditPublish.config";

import {editItemPublish} from '../../../common/store/newsPublish/actions';
import {deleteItem} from '../../../common/store/newsPublish/actions';
import {addItemDrafts} from '../../../common/store/newsDrafts/actions';

import './NewsEditPublish.scss';

function NewsEditPublish({newsID}) {
    const newsPage = useSelector((store) => store.newsPublish);
    const theme = useSelector((store) => store.theme.theme);
    const language = useSelector((store) => store.language.language);
    const dispatch = useDispatch();

    const { DownloadCover, Input, Draft, Save, textarea} = content[language];

    let page = newsPage.filter((item)=> item.id === newsID)
    page = page[0]

    const [inputValue, setInputValue] = useState(page.titleRU);
    const [textareaValue, setTextareaValue] = useState(page.descriptionRU);

    const handleDraft = () => {
        dispatch(addItemDrafts(inputValue, inputValue, textareaValue, textareaValue))
        dispatch(deleteItem(newsID))
    }

    const handleEdit = () => {
        dispatch(editItemPublish(newsID, inputValue, inputValue, textareaValue, textareaValue))
    }
    
    return(
        <section className="news-edit">
             <div 
                className="news-edit__form"
            >
                <label 
                    className={theme === "dark" ? "form__input-file background-dark" : "form__input-file background-light"} 
                >
                    <p>{DownloadCover}</p>
                    <input style={{visibility: `hidden`}} type="file" />
                </label>
                <input 
                    className={theme === "dark" ? "form__input background-dark" : "form__input background-light"} 
                    type="text" 
                    placeholder={Input}
                    value={inputValue}
                    onChange={(e)=>setInputValue(e.target.value)}
                />               
                <div className="form__wrapper-button">
                    <Link 
                        to={`/admin/news/published`} 
                        className={theme === "dark" ? "wrapper-button__button background-dark" : "wrapper-button__button background-light"}
                        onClick={handleDraft}
                    >
                        {Draft}
                    </Link>
                    <Link 
                        to={`/admin/news/published`} 
                        className={theme === "dark" ? "wrapper-button__button background-dark" : "wrapper-button__button background-light"} 
                        onClick={handleEdit}
                    >
                        {Save}
                    </Link>
                </div> 
            </div>
            <textarea 
                className={theme === "dark" ? "news-edit__textarea background-dark" : "news-edit__textarea background-light"}
                placeholder={textarea}
                value={textareaValue}
                onChange={(e)=>setTextareaValue(e.target.value)}
            >
            </textarea>
        </section>
    )
}

export default NewsEditPublish;
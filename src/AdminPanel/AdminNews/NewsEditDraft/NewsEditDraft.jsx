import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import { Link, Routes, Route, useLocation } from "react-router-dom";
import { content } from "./NewsEditDraft.config";

import { addItemReview } from '../../../common/store/newsReview/actions';
import { deleteItem } from "../../../common/store/newsDrafts/actions";
import { editItemDrafts } from "../../../common/store/newsDrafts/actions";

import './NewsEditDraft.scss';

function NewsEditDraft({newsID}) {
    const newsPage = useSelector((store) => store.newsDrafts);
    const newsPageReview = useSelector((store) => store.newsReview);
    const theme = useSelector((store) => store.theme.theme);
    const language = useSelector((store) => store.language.language);
    const dispatch = useDispatch();

    const { DownloadCover, Input, Button, Clear, Save, textarea} = content[language];

    let page = newsPage.filter((item)=> item.id === newsID)
    page = page[0]

    const [inputValue, setInputValue] = useState(page.titleRU);
    const [textareaValue, setTextareaValue] = useState(page.descriptionRU);

    const newDate = () => {
        let today = new Date()

        let year = today.getFullYear()
        let month = String(today.getMonth() + 1).padStart(2, '0'); 
        let day = String(today.getDate()).padStart(2, '0');
        let hour = today.getHours()
        let minutes = today.getMinutes()

        return (`${year}-${month}-${day} ${hour}:${minutes}`);
    }

    const handleAddReview = () => {
        let date = newDate()
        dispatch(addItemReview(inputValue, inputValue, textareaValue, textareaValue, date))
        dispatch(deleteItem(newsID))
    }

    const handleCancel = () => {
        setInputValue('')
        setTextareaValue('')
    }

    const handleEdit = () => {
        dispatch(editItemDrafts(newsID, inputValue, inputValue, textareaValue, textareaValue))
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
                <Link to={`/admin/news/drafts`} >
                    <button 
                        className="form__button"
                        onClick={handleAddReview}
                    >
                        {Button}
                    </button>
                </Link>
                <div className="form__wrapper-button">
                    <button 
                        className={theme === "dark" ? "wrapper-button__button background-dark" : "wrapper-button__button background-light"}
                        onClick={handleCancel}
                    >
                        {Clear}
                    </button>
                    <Link to={`/admin/news/drafts`} className={theme === "dark" ? "wrapper-button__button background-dark" : "wrapper-button__button background-light"} onClick={handleEdit}>
                        {Save}
                        {/* <button 
                            className={theme === "dark" ? "wrapper-button__button background-dark" : "wrapper-button__button background-light"}
                            onClick={handleEdit}
                        >
                            {Save}
                        </button> */}
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

export default NewsEditDraft;
import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import { content } from "./NewsCreate.config";

import { addItemDrafts } from "../../../common/store/newsDrafts/actions";
import { addItemReview } from "../../../common/store/newsReview/actions";

import './NewsCreate.scss';

function NewsCreate() {
    const theme = useSelector((store) => store.theme.theme);
    const language = useSelector((store) => store.language.language);
    const dispatch = useDispatch();

    const { DownloadCover, Input, Button, Cancle, Draft, textarea} = content[language];

    const [ titleValue, setTitleValue ] = useState('');
    const [ descriptionValue, setDescriptionValue ] = useState('');

    const handleCancel = () => {
        setTitleValue('')
        setDescriptionValue('')
    }

    const newDate = () => {
        let today = new Date()

        let year = today.getFullYear()
        let month = String(today.getMonth() + 1).padStart(2, '0'); 
        let day = String(today.getDate()).padStart(2, '0');
        let hour = today.getHours()
        let minutes = today.getMinutes()

        return (`${year}-${month}-${day} ${hour}:${minutes}`);
    }

    const handleAddDraft = () => {
        let date = newDate()
        dispatch(addItemDrafts(titleValue, titleValue, descriptionValue, descriptionValue, date))
    }
    
    const handleAddReview = () => {
        let date = newDate()
        dispatch(addItemReview(titleValue, titleValue, descriptionValue, descriptionValue, date))
    }

    return(
        <section className="news-create">
            <div 
                className="news-create__form"
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
                    value={titleValue}
                    onChange={(e)=>setTitleValue(e.target.value)}
                />
                <button 
                    className="form__button"
                    onClick={handleAddReview}
                >
                    {Button}
                </button>
                <div className="form__wrapper-button">
                    <button 
                        className={theme === "dark" ? "wrapper-button__button background-dark" : "wrapper-button__button background-light"}
                        onClick={handleCancel}
                    >
                        {Cancle}
                    </button>
                    <button 
                        className={theme === "dark" ? "wrapper-button__button background-dark" : "wrapper-button__button background-light"}
                        onClick={handleAddDraft}
                    >
                        {Draft}
                    </button>
                </div> 
            </div>
            <textarea 
                className={theme === "dark" ? "news-create__textarea background-dark" : "news-create__textarea background-light"}
                placeholder={textarea}
                value={descriptionValue}
                onChange={(e)=>setDescriptionValue(e.target.value)}
            >
            </textarea>
        </section>
    )
}

export default NewsCreate;
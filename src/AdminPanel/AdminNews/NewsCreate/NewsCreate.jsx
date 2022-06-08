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

    const handleAddDraft = () => {
        dispatch(addItemDrafts(titleValue, titleValue, descriptionValue, descriptionValue))
    }

    
    const handleAddReview = () => {
        dispatch(addItemReview(titleValue, titleValue, descriptionValue, descriptionValue))
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
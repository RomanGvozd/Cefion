import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { content } from "./NewsEditPublish.config";

import { editItemPublish } from '../../../common/store/newsPublish/actions';
import { deleteItem } from '../../../common/store/newsPublish/actions';
import { addItemDrafts } from '../../../common/store/newsDrafts/actions';
import { addItemReview } from "../../../common/store/newsReview/actions";

import './NewsEditPublish.scss';

function NewsEditPublish({newsID}) {
    const newsPage = useSelector((store) => store.newsPublish);
    const theme = useSelector((store) => store.theme.theme);
    const language = useSelector((store) => store.language.language);
    const dispatch = useDispatch();

    const { DownloadCover, InputRU, InputEN, Review, Draft, Save, textareaRU, textareaEN} = content[language];

    let page = newsPage.filter((item)=> item.id === newsID)
    page = page[0]

    const [ titleValueRU, setTitleValueRU ] = useState(page.titleRU);
    const [ titleValueEN, setTitleValueEN ] = useState(page.titleEN);
    const [ descriptionValueRU, setDescriptionValueRU ] = useState(page.descriptionRU);
    const [ descriptionValueEN, setDescriptionValueEN ] = useState(page.descriptionEN);

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
        dispatch(addItemDrafts(titleValueRU, titleValueEN, descriptionValueRU, descriptionValueEN, date))
        dispatch(deleteItem(newsID))
    }

    const handleAddReview = () => {
        let date = newDate()
        dispatch(addItemReview(titleValueRU, titleValueEN, descriptionValueRU, descriptionValueEN, date))
        dispatch(deleteItem(newsID))
    }

    const handleEdit = () => {
        dispatch(editItemPublish(newsID, titleValueRU, titleValueEN, descriptionValueRU, descriptionValueEN))
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
                    placeholder={InputRU}
                    value={titleValueRU}
                    onChange={(e)=>setTitleValueRU(e.target.value)}
                />
                <input 
                    className={theme === "dark" ? "form__input background-dark" : "form__input background-light"} 
                    type="text" 
                    placeholder={InputEN}
                    value={titleValueEN}
                    onChange={(e)=>setTitleValueEN(e.target.value)}
                />
                <Link to={`/admin/news/published`} >
                    <button 
                        className="form__button"
                        onClick={handleAddReview}
                    >
                        {Review}
                    </button>
                </Link>           
                <div className="form__wrapper-button">
                    <Link 
                        to={`/admin/news/published`} 
                        className={theme === "dark" ? "wrapper-button__button background-dark" : "wrapper-button__button background-light"}
                        onClick={handleAddDraft}
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
            <div className="news-create__textarea-wrapper">
                <textarea 
                    className={theme === "dark" ? "news-create__textarea background-dark" : "news-create__textarea background-light"}
                    placeholder={textareaRU}
                    value={descriptionValueRU}
                    onChange={(e)=>setDescriptionValueRU(e.target.value)}
                >
                </textarea>
                <textarea 
                    className={theme === "dark" ? "news-create__textarea background-dark" : "news-create__textarea background-light"}
                    placeholder={textareaEN}
                    value={descriptionValueEN}
                    onChange={(e)=>setDescriptionValueEN(e.target.value)}
                >
                </textarea>
            </div>
        </section>
    )
}

export default NewsEditPublish;
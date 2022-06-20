import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link} from "react-router-dom";
import { content } from "./NewsEditReview.config";

import TextEditor from "../../TextEditor/TextEditor";

import { deleteItem } from "../../../common/store/newsReview/actions";
import { editItemReview } from "../../../common/store/newsReview/actions";
import { addItemPublish } from "../../../common/store/newsPublish/actions";
import { addItemDrafts } from '../../../common/store/newsDrafts/actions';

import SelectNewsGroup from "../SelectNewsGroup/SelectNewsGroup";

import './NewsEditReview.scss';

function NewsEditReview({newsID}) {
    const currentUser = useSelector((store) => store.currentUser);
    let filteredRoles = currentUser.roles.includes("super_admin") || currentUser.roles.includes("redactor")

    const newsPage = useSelector((store) => store.newsReview);
    const theme = useSelector((store) => store.theme.theme);
    const language = useSelector((store) => store.language.language);
    const dispatch = useDispatch();

    const { DownloadCover, InputRU, InputEN, Publish, Draft, Save, AddHashtag, textareaRU, textareaEN} = content[language];

    let page = newsPage.filter((item)=> item.id === newsID)
    page = page[0]

    const [ titleValueRU, setTitleValueRU ] = useState(page.titleRU);
    const [ titleValueEN, setTitleValueEN ] = useState(page.titleEN);
    const [ descriptionValueRU, setDescriptionValueRU ] = useState(page.descriptionRU);
    const [ descriptionValueEN, setDescriptionValueEN ] = useState(page.descriptionEN);

    const [selected, setSelected] = useState(page.type);
    const options = ["Blockchain", "NFT", "DeFI", "Business", "GameFi"];

    const [inputTagsValue, setInputTagsValue] = useState('')
    const [tags, setTags] = useState(page.hashtags)

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
        dispatch(addItemPublish(titleValueRU, titleValueEN, descriptionValueRU, descriptionValueEN, currentUser.username, date, selected, tags))
        dispatch(deleteItem(newsID))
    }

    const handleDraft = () => {
        let date = newDate()
        dispatch(addItemDrafts(titleValueRU, titleValueEN, descriptionValueRU, descriptionValueEN, currentUser.username, date, selected, tags))
        dispatch(deleteItem(newsID))
    }

    const handleEdit = () => {
        dispatch(editItemReview(newsID, titleValueRU, titleValueEN, descriptionValueRU, descriptionValueEN, selected, tags))
    }

    const handleAddTag = () => {
        setTags([...tags, `#${inputTagsValue}`])
    }

    const handleDeleteTag = (id) => {
        setTags(tags.filter(tag => tag !== id ))
    }
    
    return(
        <>
            <Link to="/admin/news/review">
                <button 
                    className={theme === "dark" ? "button-back background-dark" : "button-back background-light"}
                >
                    <div className={theme === "dark" ? "button__image-dark" : "button__image-light"}></div>
                    {language === "RU"
                    ? "Назад"
                    : "Back"
                    }
                </button>
            </Link>
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
                    <div className="news-create__tags-wrapper">
                        <div className="tags-wrapper__input-wrapper">
                            <input 
                                className={theme === "dark" ? "tags-wrapper__input background-dark" : "tags-wrapper__input background-light"}
                                type="text"
                                placeholder={AddHashtag}
                                value={inputTagsValue}
                                onChange={(e)=>setInputTagsValue(e.target.value)}
                            >

                            </input>
                            <button 
                                className={theme === "dark" ? "input__button background-dark" : "input__button background-light"}
                                onClick={handleAddTag}
                            >
                                +
                            </button>
                        </div>
                        <div className="tags-wrapper">
                            {tags.map((tag)=>(
                                <div 
                                    key={tag} 
                                    className={theme === "dark" ? "tags background-dark" : "tags background-light"}
                                    onClick={()=>handleDeleteTag(tag)}
                                >
                                    {tag}
                                </div>
                            ))}
                        </div>
                        <SelectNewsGroup 
                            selected={selected} 
                            setSelected={setSelected}
                            options={options}
                            theme={theme}
                            language={language}
                        />
                    </div>
                    {filteredRoles && <Link to={`/admin/news/review`} >
                        <button 
                            className="form__button"
                            onClick={handleAddReview}
                        >
                            {Publish}
                        </button>
                    </Link>}
                    <div className="form__wrapper-button">
                        <Link 
                            to={`/admin/news/review`} 
                            className={theme === "dark" ? "wrapper-button__button background-dark" : "wrapper-button__button background-light"}
                            onClick={handleDraft}
                        >
                            {Draft}
                        </Link>
                        <Link to={`/admin/news/review`} className={theme === "dark" ? "wrapper-button__button background-dark" : "wrapper-button__button background-light"} onClick={handleEdit}>
                            {Save}
                        </Link>
                    </div> 
                </div>
                <div className="news-create__textarea-wrapper">
                <h4 className="textarea-wrapper__title">{textareaRU}</h4>
                    <TextEditor 
                        value={descriptionValueRU}
                        setValue={setDescriptionValueRU}
                    />
                    <h4 className="textarea-wrapper__title">{textareaEN}</h4>
                    <TextEditor 
                        value={descriptionValueEN}
                        setValue={setDescriptionValueEN}
                    />
                </div>
            </section>
        </>
    )
}

export default NewsEditReview;
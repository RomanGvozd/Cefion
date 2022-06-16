import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import { content } from "./NewsCreate.config";
import TextEditor from "../../TextEditor/TextEditor";

import SelectNewsGroup from "../SelectNewsGroup/SelectNewsGroup";

import { addItemDrafts } from "../../../common/store/newsDrafts/actions";
import { addItemReview } from "../../../common/store/newsReview/actions";

import './NewsCreate.scss';

function NewsCreate() {
    const theme = useSelector((store) => store.theme.theme);
    const language = useSelector((store) => store.language.language);
    const dispatch = useDispatch();

    const { DownloadCover, InputRU, InputEN, Button, Cancle, Draft, textareaRU, textareaEN, AddHashtag} = content[language];

    const [ titleValueRU, setTitleValueRU ] = useState('');
    const [ titleValueEN, setTitleValueEN ] = useState('');
    const [ descriptionValueRU, setDescriptionValueRU ] = useState('');
    const [ descriptionValueEN, setDescriptionValueEN ] = useState('');

    const [selected, setSelected] = useState("Blockchain");
    const options = ["Blockchain", "NFT", "DeFI", "Business", "GameFi"];

    const [inputTagsValue, setInputTagsValue] = useState('')
    const [tags, setTags] = useState([])

    const handleCancel = () => {
        setTitleValueRU('')
        setTitleValueEN('')
        setDescriptionValueRU('')
        setDescriptionValueEN('')
    }

    const newDate = () => {
        let today = new Date()

        let year = today.getFullYear()
        let month = String(today.getMonth() + 1).padStart(2, '0'); 
        let day = String(today.getDate()).padStart(2, '0');
        let hour = today.getHours()
        let minutes = today.getMinutes()

        return (`${year}-${month}-${day} ${hour}:${minutes}`);
        // return Date.now()
    }

    const handleAddDraft = () => {
        let date = newDate()
        dispatch(addItemDrafts(titleValueRU, titleValueEN, descriptionValueRU, descriptionValueEN, date, selected, tags))
    }
    
    const handleAddReview = () => {
        let date = newDate()
        dispatch(addItemReview(titleValueRU, titleValueEN, descriptionValueRU, descriptionValueEN, date, selected, tags))
    }

    const handleAddTag = () => {
        setTags([...tags, `#${inputTagsValue}`])
    }

    const handleDeleteTag = (id) => {
        setTags(tags.filter(tag => tag !== id ))
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
            <div className="news-create__textarea-wrapper">
                <h4 className="textarea-wrapper__title">{textareaRU}</h4>
                <TextEditor 
                    value={descriptionValueRU}
                    setValue={setDescriptionValueRU}
                />
                {/* <textarea 
                    className={theme === "dark" ? "news-create__textarea background-dark" : "news-create__textarea background-light"}
                    placeholder={textareaRU}
                    value={descriptionValueRU}
                    onChange={(e)=>setDescriptionValueRU(e.target.value)}
                >
                </textarea> */}
                <h4 className="textarea-wrapper__title">{textareaEN}</h4>
                <TextEditor
                    value={descriptionValueEN}
                    setValue={setDescriptionValueEN}
                />
                {/* <textarea 
                    className={theme === "dark" ? "news-create__textarea background-dark" : "news-create__textarea background-light"}
                    placeholder={textareaEN}
                    value={descriptionValueEN}
                    onChange={(e)=>setDescriptionValueEN(e.target.value)}
                >
                </textarea> */}
            </div>

        </section>
    )
}

export default NewsCreate;
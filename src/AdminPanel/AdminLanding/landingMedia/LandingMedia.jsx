import React, {useState} from "react";
import { content } from "./LandingMedia.config";
import {useDispatch, useSelector} from "react-redux";
import { Link } from "react-router-dom";

import { addItem } from "../../../common/store/media/actions";
import { deleteItem } from "../../../common/store/media/actions";

import BlocksItem from "./BlocksItem/BlocksItem";

import './LandingMedia.scss';

function LandingMedia() {
    const dispatch = useDispatch();

    const theme = useSelector((store) => store.theme.theme);
    const media = useSelector((store) => store.media);
    const language = useSelector((store) => store.language.language);

    const [inputValueRU, setInputValueRU] = useState('');
    const [inputValueEN, setInputValueEN] = useState('');
    const [textareaValueRU, setTextareaValueRU] = useState('');
    const [textareaValueEN, setTextareaValueEN] = useState('');

    const { inputFile, inputRU, inputEN, textareaRU, textareaEN} = content[language];

    const handleAdd = () => {
        dispatch(addItem(inputValueRU, inputValueEN, textareaValueRU, textareaValueEN))
    }

    const handleDelete = (id) => {
        dispatch(deleteItem(id))
    }

    return(
        <>
            <Link to="/admin/landing">
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
            <section className="landing-media">
                <div className="landing-media__header">
                    <label className={theme === "dark" ? "landing-media__wrapper-file background-dark" : "landing-media__wrapper-file background-light"}>
                        <input 
                            className={theme === "dark" ? "landing-media__input-file background-dark" : "landing-media__input-file background-light"} 
                            type="file" 
                        />
                        <p>{inputFile}</p>
                    </label>
                    <div className="landing-media-wrapper">
                        <div className="wrapper__RU">
                            <input 
                                className={theme === "dark" ? "landing-media__input background-dark" : "landing-media__input background-light"} 
                                placeholder={inputRU}
                                type="text" 
                                onChange={(e)=>setInputValueRU(e.target.value)}
                                value={inputValueRU}
                            />
                            <textarea 
                                className={theme === "dark" ? "landing-media__texarea background-dark" : "landing-media__texarea background-light "}
                                placeholder={textareaRU}
                                onChange={(e)=>setTextareaValueRU(e.target.value)}
                                value={textareaValueRU}
                            >
                            </textarea>
                        </div>
                        <div className="wrapper__EN">
                            <input 
                                className={theme === "dark" ? "landing-media__input background-dark" : "landing-media__input background-light"} 
                                placeholder={inputEN}
                                type="text" 
                                onChange={(e)=>setInputValueEN(e.target.value)}
                                value={inputValueEN}
                            />
                            <textarea 
                                className={theme === "dark" ? "landing-media__texarea background-dark" : "landing-media__texarea background-light "}
                                placeholder={textareaEN}
                                onChange={(e)=>setTextareaValueEN(e.target.value)}
                                value={textareaValueEN}
                            >
                            </textarea>
                        </div>
                        <button 
                            className={theme === "dark" ? "landing-media__button background-dark" : "landing-media__button background-light"}
                            onClick={handleAdd}
                        >
                            {language === "RU"
                            ? "Новый раздел +"
                            : "New section +"
                            }
                        </button>
                    </div>
                </div>
                <div className="landing-media__blocks">
                    {media.map((block)=>(
                        <BlocksItem key={block.id} block={block} onDelete={handleDelete}/>
                    ))} 
                </div>
            </section>
        </>
    )
}

export default LandingMedia;
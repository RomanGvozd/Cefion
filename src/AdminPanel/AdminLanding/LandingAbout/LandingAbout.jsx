import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import { content } from "./LandingMedia.config";
import { Link } from "react-router-dom";

import TextEditor from '../../TextEditor/TextEditor';

import {addItem} from '../../../common/store/team/actions';
import {deleteItem} from '../../../common/store/team/actions';

import './LandingAbout.scss';

function LandingAbout() {
    const team = useSelector((store) => store.team);
    const theme = useSelector((store) => store.theme.theme);
    const language = useSelector((store) => store.language.language);

    const dispatch = useDispatch();

    const {About, Team, inputRU, inputEN, input, button,} = content[language]

    const [inputNameRU, setInputNameRU] = useState('');
    const [inputNameEN, setInputNameEN] = useState('');
    const [inputSpecialization, setInputSpecialization] = useState('');

    const handleAdd = () => {
        dispatch(addItem(inputNameRU, inputNameEN, inputSpecialization))
        setInputNameRU('')
        setInputNameEN('')
        setInputSpecialization('')
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
            <section className="landing-about">
                <div className="landing-about__header">
                    <div className={theme === "dark" ? "header__about background-dark" : "header__about background-light"}>
                        {About}
                    </div>
                    <div className={theme === "dark" ? "header__team background-dark" : "header__team background-light"}>
                        {Team}
                    </div>
                </div>
                <div className="landing-about__main">
                    <div className="block-about">
                        <TextEditor/>
                    </div>
                    <div className="block-team">
                        <div className='block-command__card-input'>
                            <label
                                className={theme === "dark" ? "input-file background-dark" : "input-file background-light"}
                            >
                                <div className='input-file-vector'></div>
                                <input style={{visibility: `hidden`}} type="file"/>
                            </label>
                            <input
                                className={theme === "dark" ? "input background-dark" : "input background-light"} 
                                type="text"
                                placeholder={inputRU}
                                value={inputNameRU}
                                onChange={(e)=>setInputNameRU(e.target.value)}
                            />
                            <input
                                className={theme === "dark" ? "input background-dark" : "input background-light"} 
                                type="text"
                                placeholder={inputEN}
                                value={inputNameEN}
                                onChange={(e)=>setInputNameEN(e.target.value)}
                            />
                            <input
                                className={theme === "dark" ? "input background-dark" : "input background-light"} 
                                type="text"
                                placeholder={input}
                                value={inputSpecialization}
                                onChange={(e)=>setInputSpecialization(e.target.value)}
                            />
                            <button
                                className={theme === "dark" ? "button background-dark" : "button background-light"}
                                onClick={handleAdd}
                            >
                                {button}
                            </button>
                        </div>
                        {team.map((user, index)=>(
                            <div className='block-command__card' key={index}>
                                <div className='button-delete' onClick={()=>handleDelete(user.id)}>
                                </div>
                                <img className='image' src={require('./image/person.png')} alt="" />
                                {language === "RU"
                                ? <h6 className='title'>{user.nameRU}</h6>
                                : <h6 className='title'>{user.nameEN}</h6>
                                }
                                <p className={theme === "dark" ? "text-dark" : "text-light"}>
                                    {user.specialization}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </section>
        </>
    )
}

export default LandingAbout;
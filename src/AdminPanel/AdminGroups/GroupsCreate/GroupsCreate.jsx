import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {addItem} from '../../../common/store/groups/actions';

import { content } from "./GroupsCreate.config";

import './GroupsCreate.scss';

function GroupsCreate() {
    const theme = useSelector((store) => store.theme.theme);
    const language = useSelector((store) => store.language.language);
    const dispatch = useDispatch();

    const [inputTitle, setInputTitle] = useState('');
    const [inputDescription, setInputDescription] = useState('');

    const {
        Download,
        GroupName,
        GroupDescription,
        WalletAdress,
        GroupInviteLink,
        textToken,
        RemoveRestrictions,
        Save,
        Cancel
    } = content[language];

    const handleAdd = () => {
        dispatch(addItem(inputTitle, inputDescription))
        handleCancel()
    }

    const handleCancel = () => {
        setInputTitle('')
        setInputDescription('')
    }

    return(
        <section className="groups-create">
            <div className="groups-download">
                <label className={theme === "dark" ? "groups-download__block-file background-dark" : "groups-download__block-file background-light"}>
                    <input 
                        className="block-file__input" 
                        type="file"
                    />
                    <p className="block-file__text">
                        {Download}
                    </p>
                </label>
                <div className="groups-inputs">
                    <input 
                        className={theme === "dark" ? "groups-inputs__input background-dark " : "groups-inputs__input background-light"} 
                        placeholder={GroupName}
                        type="text"
                        value={inputTitle}
                        onChange={(e)=>setInputTitle(e.target.value)}
                    />
                    <textarea 
                        className={theme === "dark" ? "groups-inputs__texarea background-dark " : "groups-inputs__texarea background-light"} 
                        placeholder={GroupDescription}
                        value={inputDescription}
                        onChange={(e)=>setInputDescription(e.target.value)}
                    >
                    </textarea>
                </div>
            </div>
            <div className="groups-create__wallet-block">
                <div className={theme === "dark" ? "wallet-block__button background-dark" : "wallet-block__button background-light"}>
                </div>
                <div className="wallet-block__wrapper-input">
                    <input 
                        className={theme === "dark" ? "wrapper-input__input background-dark " : "wrapper-input__input background-light"} 
                        placeholder={WalletAdress}
                        type="text" 
                    />
                    <input 
                        className={theme === "dark" ? "wrapper-input__input background-dark " : "wrapper-input__input background-light"} 
                        placeholder={GroupInviteLink}
                        type="text" 
                    />
                    <div className="restrictions-block">
                        <p className="restrictions-block__text">
                            {textToken}
                        </p>
                        <button className="restrictions-block__button">
                            {RemoveRestrictions}
                        </button>
                    </div> 
                </div>
            </div>
            <div className="groups-create__submit-block">
                <button 
                    className="submit-block__button"
                    onClick={handleAdd}
                >
                    {Save}
                </button>
                <button 
                    className="submit-block__button"
                    onClick={handleCancel}
                >
                    {Cancel}
                </button>
            </div>

        </section>
    )
}

export default GroupsCreate;
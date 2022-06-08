import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import { Link, Routes, Route, useLocation } from "react-router-dom";

import ModalSubmit from "./ModalSubmit/ModalSubmit";

import { deleteItem } from "../../../common/store/groups/actions";

import './GroupList.scss';

function GroupList() {
    const groups = useSelector((store) => store.groups);
    const theme = useSelector((store) => store.theme.theme);
    const language = useSelector((store) => store.language.language);
    const dispatch = useDispatch();

    const [show, setShow] = useState(false);
    const {pathname} = useLocation();

    const handleDelete = (id) => {
        dispatch(deleteItem(id))
    }

    return(
        <section className="groups-list">
            {groups.map((group)=>(
                <div 
                    className={theme === "dark" ? "group background-dark" : "group background-light"}
                    key={group.id}
                >
                    <button 
                        className={theme === "dark" ? "group__delete background-dark" : "group__delete background-light"}
                        onClick={()=>handleDelete(group.id)}
                    >
                        <div className="group__delete-image"></div>
                    </button>
                    <img className="group__image" src={require('./image/groupImage.png')} alt="" />
                    <h6 className="group__title">{group.title}</h6>
                    <p className={theme === "dark" ? "group__description-dark" : "group__description-light"}>{group.description}</p>
                    {/* {show && <ModalSubmit group={group} setShow={setShow} handleDelete={handleDelete}/>} */}
                </div>
            ))}

        </section>
    )
}

export default GroupList;
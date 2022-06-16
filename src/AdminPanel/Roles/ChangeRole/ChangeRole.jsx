import React, {useState} from "react";
import {useSelector} from "react-redux";
import { content } from "./ChangeRole.config";

import arr from './rolesArray';

import './ChangeRole.scss';

function ChangeRole() {
    const theme = useSelector((store) => store.theme.theme);
    const language = useSelector((store) => store.language.language);

    const {IssueArole, EnterName, Apply} = content[language];

    const [roles, setRoles] = useState(arr)

    return(
        <div className="change-role">
            <h5 className="change-role__title">
                {IssueArole}
            </h5>
            <input 
                className={theme === "dark" ? "change-role__input change-role__input-dark" : "change-role__input change-role__input-light"} 
                type="text" 
                placeholder={EnterName}
            />
            <div className={theme === "dark" ? "change-role__wrapper-checkbox wrapper-checkbox-dark" : "change-role__wrapper-checkbox wrapper-checkbox-light"}>
                {roles.map((role)=>(
                    <div className="checkbox__item">
                        {language === "RU"
                        ? <p className={role.completed ? "item__text" : "item__text item__text-active"}>{role.titleRU}</p>
                        : <p className={role.completed ? "item__text" : "item__text item__text-active"}>{role.titleEN}</p>
                        }
                        <div className={theme === "dark" ? "checkbox__vector-dark" : "checkbox__vector-light"}>

                        </div>
                    </div>
                ))}
            </div>
            <button className="change-role__button">
                {Apply}
            </button>
        </div>
    )
}

export default ChangeRole;
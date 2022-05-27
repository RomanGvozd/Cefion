import React, {useState} from "react";
import {useSelector} from "react-redux";

import arr from './rolesArray';

import './IssueRole.scss';

function IssueRole() {
    const theme = useSelector((store) => store.theme.theme);
    const language = useSelector((store) => store.language.language);

    const [roles, setRoles] = useState(arr)

    const handleChecket = (id) => {
        setRoles(roles.map(role => {
            if (role.id === id) {
                role.completed = !role.completed
            }
            return role
        }))
    }

    return(
        <div className="issue-role">
            <h5 className="issue-role__title">
                {language === "RU"
                ? "Выдать роль"
                : "Issue a role"
                }
            </h5>
            <input 
                className={theme === "dark" ? "issue-role__input issue-role__input-dark" : "issue-role__input issue-role__input-light"} 
                type="text" 
                placeholder={language === "RU" ? "Ввести имя" : "Enter name"}
            />
            <div className={theme === "dark" ? "issue-role__wrapper-checkbox wrapper-checkbox-dark" : "issue-role__wrapper-checkbox wrapper-checkbox-light"}>
                {roles.map((role)=>(
                    <div className="checkbox__item" onClick={()=>handleChecket(role.id)}>
                        <div className={role.completed ? "item__checkbox" : "item__checkbox-active"}>
                            {role.completed ? <></> : <div className="item__checkbox-vector"></div>}
                        </div>
                        {language === "RU"
                        ? <p className={role.completed ? "item__text" : "item__text item__text-active"}>{role.titleRU}</p>
                        : <p className={role.completed ? "item__text" : "item__text item__text-active"}>{role.titleEN}</p>
                        }
                    </div>
                ))}
            </div>
            <button className="issue-role__button">
                {language === "RU"
                ? "Применить"
                : "Apply"
                }
            </button>
        </div>
    )
}

export default IssueRole;
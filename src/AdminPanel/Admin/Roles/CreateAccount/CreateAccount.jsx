import React, {useState} from "react";
import {useSelector} from "react-redux";

import arr from './rolesArray';

import './CreateAccount.scss';

function CreateAccount() {
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
        <div className="create-account">
            <h5 className="create-account__title">
                {language === "RU"
                ? "Создать аккаунт"
                : "Create account"
                }
            </h5>
            <input 
                className={theme === "dark" ? "create-account__input create-account__input-dark" : "create-account__input create-account__input-light"} 
                type="text" 
                placeholder={language === "RU" ? "Ввести имя" : "Enter name"}
            />
            <input 
                className={theme === "dark" ? "create-account__input create-account__input-dark" : "create-account__input create-account__input-light"} 
                type="text" 
                placeholder={language === "RU" ? "Ввести пароль" : "Enter password"}
            />
            <div className={theme === "dark" ? "create-account__wrapper-checkbox wrapper-checkbox-dark" : "create-account__wrapper-checkbox wrapper-checkbox-light"}>
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
            <button className="create-account__button">
                {language === "RU"
                ? "Создать аккаунт"
                : "Create account"
                }
            </button>
        </div>
    )
}

export default CreateAccount;
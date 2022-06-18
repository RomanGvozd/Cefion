import React, {useState, useEffect} from "react";
import {useSelector} from "react-redux";
import { content } from "./CreateAccount.config";
import axios from 'axios'
import ModalAlert from "../../ModalAlert/ModalAlert";

import arr from './rolesArray';

import './CreateAccount.scss';

function CreateAccount() {

    const theme = useSelector((store) => store.theme.theme);
    const language = useSelector((store) => store.language.language);

    const {CreateAccount, EnterName, EnterPassword, Alert} = content[language];

    const [roles, setRoles] = useState(arr)

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const [showAlert, setShowAlert] = useState(false);

    const handleChecket = (id) => {
        setRoles(roles.map(role => {
            if (role.id === id) {
                role.completed = !role.completed
            }
            return role
        }))
    }

    const handleCreate = () => {
        const resultRoles = []
        roles.forEach(item => {
            if (item.completed === true) {
                resultRoles.push(item.titleEN.toLowerCase())
            }
        })
        let tagName = []
        name.split(' ').forEach(item => {
            tagName.push(item.toLowerCase())
            
        })
        const user = {
            username: name,
            // tagName: `@${tagName.join('')}`,
            password: password,
            // role: resultRoles,
            role: "ADMIN",
        }

        setShowAlert(true)
        setTimeout(() => {
            setShowAlert(false)
        }, 2000);

        axios.post('/api/auth/registration', user)
            .then((response) => {
                console.log(response);
                console.log(response.data);
                
            }, (error) => {
                console.log(error);

            });

    }

    return(
        <div className="create-account">
            <h5 className="create-account__title">
                {CreateAccount}
            </h5>
            <input 
                className={theme === "dark" ? "create-account__input create-account__input-dark" : "create-account__input create-account__input-light"} 
                type="text" 
                placeholder={EnterName}
                value={name}
                onChange={(e)=>setName(e.target.value)}
            />
            {/* {password.length < 8 && <p className="text-validate">Пароль должен быть больше 8 символов</p>} */}
            <input 
                className={theme === "dark" ? "create-account__input create-account__input-dark" : "create-account__input create-account__input-light"} 
                type="text" 
                placeholder={EnterPassword}
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
            />
            <div className={theme === "dark" ? "create-account__wrapper-checkbox wrapper-checkbox-dark" : "create-account__wrapper-checkbox wrapper-checkbox-light"}>
                {roles.map((role)=>(
                    <div className="checkbox__item" onClick={()=>handleChecket(role.id)} key={role.id}>
                        <div className={!role.completed ? "item__checkbox" : "item__checkbox-active"}>
                            {!role.completed ? <></> : <div className="item__checkbox-vector"></div>}
                        </div>
                        {language === "RU"
                        ? <p className={!role.completed ? "item__text" : "item__text item__text-active"}>{role.titleRU}</p>
                        : <p className={!role.completed ? "item__text" : "item__text item__text-active"}>{role.titleEN}</p>
                        }
                    </div>
                ))}
            </div>
            <button 
                className="create-account__button"
                onClick={handleCreate}
            >
                {CreateAccount}
            </button>
            {showAlert && <ModalAlert text={Alert} name={name}/>}
        </div>
    )
}

export default CreateAccount;
import React, {useState} from "react";
import {useSelector} from "react-redux";
import { content } from "./CreateAccount.config";
import axios from 'axios'

import arr from './rolesArray';

import './CreateAccount.scss';

function CreateAccount() {
    const theme = useSelector((store) => store.theme.theme);
    const language = useSelector((store) => store.language.language);

    const {CreateAccount, EnterName, EnterPassword} = content[language];

    const [roles, setRoles] = useState(arr)

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const handleChecket = (id) => {
        setRoles(roles.map(role => {
            if (role.id === id) {
                role.completed = !role.completed
            }
            return role
        }))
    }

    const handleCreate = () => {
        const resutRoles = []
        roles.forEach(item => {
            if (item.completed === true) {
                resutRoles.push(item.titleEN)
            }
        })
        let tegName = []
        name.split(' ').forEach(item => {
            tegName.push(item.toLowerCase())
            
        })
        const result = {
            name: name,
            tegName: `@${tegName.join('')}`,
            password: password,
            roles: resutRoles,
        }

        // axios.post('/api/auth/registration', {
        //     name: name,
        //     tegName: `@${tegName.join('')}`,
        //     password: password,
        //     roles: resutRoles,
        // })
        // .then((response) => {
        //     console.log(response);

        // }, (error) => {
        //     console.log(error);

        // });

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
        </div>
    )
}

export default CreateAccount;
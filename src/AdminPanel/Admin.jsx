import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import { Routes, Route } from "react-router-dom";
import axios from "axios";

import AdminHeader from "./AdminHeader/AdminHeader";
import AdminNav from "./AdminNav/AdminNav";

import Roles from "./Roles/Roles";
import AdminLanding from "./AdminLanding/AdminLanding";
import AdminGroups from "./AdminGroups/AdminGroups";
import AdminNews from "./AdminNews/AdminNews";

import { addItem } from "../common/store/currentUser/actions";

import { accountLogin } from "../common/api/auth.api";
import './Admin.scss';


function Admin() {
    const theme = useSelector((store) => store.theme.theme);
    const language = useSelector((store) => store.language.language);

    const dispatch = useDispatch();

    const [login, setLogin] = useState(false);

    const [formValues, setFormValues]=  useState({username:"", password:""});

    const [show, setShow] = useState(true);

    const handleShow = () => {
        setShow(!show)
    }

    const handleChange = ({target})=>{
        const {name,value}=target;
        setFormValues((state)=>({...state,[name]:value}));
    }

    const handleLogin = () => {
        accountLogin(formValues)
        .then((response) => {
            dispatch(addItem(response.data.username))
            setLogin(true)
            
        }, (error) => {
            console.log(error);

        });
    }

    return(
        <>
            {!login 
            && 
                <section className="admin-login">
                    <h1>log in</h1>
                    <div className="admin-login__form">
                        <input 
                            className="form__input" 
                            type="text" 
                            placeholder={language === "RU" ? "Введите имя" : "Enter your name"} 
                            name="username"
                            value={formValues.username}
                            onChange={handleChange}
                            />
                        <input 
                            className="form__input" 
                            type="password" 
                            name="password"
                            placeholder={language === "RU" ? "Введите пароль" : "Enter your password"} 
                            value={formValues.password}
                            onChange={handleChange}
                            />
                        <button 
                            className="form__button"
                            onClick={handleLogin}
                        >
                            {language === "RU"
                            ? "Авторизоваться"
                            : "Login"
                            }

                        </button>
                    </div>
                </section>
            }
            {login 
            && 
                <main className={theme === "dark" ? "admin__main admin__main-dark" : "admin__main admin__main-light"}>
                    <AdminNav handleShow={handleShow} show={show}/>
                    <div 
                        className="admin__content"
                        style={show ? {width: `80%`,} : {width: `93%`,}}
                    >
                        <AdminHeader/>
                        <section 
                            className="anim__section"
                        >
                            <Routes>
                                <Route path="/roles" element={<Roles />} />
                                <Route path="/landing*" element={<AdminLanding />} />
                                <Route path="/groups*" element={<AdminGroups />} />
                                <Route path="/news*" element={<AdminNews />} />
                            </Routes>
                        </section>
                    </div>
                </main>
            }
        </>

    )
}

export default Admin;
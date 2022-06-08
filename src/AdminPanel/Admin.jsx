import React, {useState} from "react";
import {useSelector} from "react-redux";
import { Routes, Route } from "react-router-dom";

import AdminHeader from "./AdminHeader/AdminHeader";
import AdminNav from "./AdminNav/AdminNav";

import Roles from "./Roles/Roles";
import AdminLanding from "./AdminLanding/AdminLanding";
import AdminGroups from "./AdminGroups/AdminGroups";
import AdminNews from "./AdminNews/AdminNews";

import './Admin.scss';

function Admin() {
    const theme = useSelector((store) => store.theme.theme);
    const language = useSelector((store) => store.language.language);

    const [login, setLogin] = useState(false);

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (name === "admin" && password === "2211442") {
            setLogin(true)
        }
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
                            value={name}
                            onChange={(e)=>setName(e.target.value)}
                            />
                        <input 
                            className="form__input" 
                            type="password" 
                            placeholder={language === "RU" ? "Введите пароль" : "Enter your password"} 
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
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
                    <AdminNav/>
                    <div className="admin__content">
                        <AdminHeader/>
                        <section className="anim__section">
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
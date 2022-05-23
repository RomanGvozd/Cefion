import React from "react";
import {useSelector} from "react-redux";

import './ModalLogin.scss';

function ModalLogin({setIshShow, openModalForgot,  openModalRegister}) {
    const theme = useSelector((store) => store.theme.theme);
    const language = useSelector((store) => store.language.language);

    return(
        <div className="backgroundd-modal" onClick={()=>setIshShow(false)}>
            <div className={theme === "dark" ? "modal-login modal-dark" : "modal-login modal-light"} onClick={(e)=>e.stopPropagation()}>
                <h2 className="modal__title">
                    {language === "RU"
                    ? "Войти"
                    : "Log in"
                    }
                </h2>
                <input className="modal__input" type="text" placeholder={language === "RU" ? "Имя пользователя" : "Username"}/>
                <input className="modal__input" type="pasword" placeholder={language === "RU" ? "Пароль" : "Password"} />
                <p className={theme === "dark" ? "modal__forgot-dark" : "modal__forgot-light"} onClick={openModalForgot}>
                    {language === "RU"
                    ? "Забыли пароль?"
                    : "Forgot Password?"
                    }
                </p>
                {language === "RU"
                ? <p className="nodal__register">Нет учетной записи? <span className="nodal__register-button" onClick={openModalRegister}>Регистрация</span></p>
                : <p className="nodal__register">Don’t have an account? <span className="nodal__register-button" onClick={openModalRegister}>Sign Up</span></p>
                }
                <button className="modal__button" onClick={()=>setIshShow(false)}>
                    {language === "RU"
                    ? "Войти"
                    : "Log in"
                    }
                </button>
            </div>
        </div>
    );
}

export default ModalLogin;
import React from "react";
import {useSelector} from "react-redux";
import {content} from './ModalLogin.config';

import './ModalLogin.scss';

function ModalLogin({setIshShow, openModalForgot,  openModalRegister}) {
    const theme = useSelector((store) => store.theme.theme);
    const language = useSelector((store) => store.language.language);

    const {Login, Username, Password, ForgotPassword,} = content[language]

    return(
        <div className="backgroundd-modal" onClick={()=>setIshShow(false)}>
            <div className={theme === "dark" ? "modal-login modal-dark" : "modal-login modal-light"} onClick={(e)=>e.stopPropagation()}>
                <h2 className="modal__title">
                    {Login}
                </h2>
                <input 
                    className="modal__input" 
                    type="text" 
                    placeholder={Username}
                />
                <input 
                    className="modal__input" 
                    type="pasword"
                    placeholder={Password}
                />
                <p className={theme === "dark" ? "modal__forgot-dark" : "modal__forgot-light"} onClick={openModalForgot}>
                    {ForgotPassword}
                </p>
                {/* {language === "RU"
                ? <p className="nodal__register">Нет учетной записи? <span className="nodal__register-button" onClick={openModalRegister}>Регистрация</span></p>
                : <p className="nodal__register">Don’t have an account? <span className="nodal__register-button" onClick={openModalRegister}>Sign Up</span></p>
                } */}
                <button className="modal__button" onClick={()=>setIshShow(false)}>
                    {Login}
                </button>
            </div>
        </div>
    );
}

export default ModalLogin;
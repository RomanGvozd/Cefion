import React from "react";
import {useSelector} from "react-redux";

import './ModalRegister.scss';

function ModalRegister({setIshShow, openModalLogin}) {
    const theme = useSelector((store) => store.theme.theme);
    const language = useSelector((store) => store.language.language);

    return(
        <div className="backgroundd-modal" onClick={()=>setIshShow(false)}>
            <div className={theme === "dark" ? "modal-register modal-dark" : "modal-register modal-light"} onClick={(e)=>e.stopPropagation()}>
                <h2 className="modal__title">
                    {language === "RU"
                    ? "Регистрация"
                    : "Sign up"
                    }
                </h2>
                <input className="modal__input" type="text" placeholder={language === "RU" ? "Имя пользователя" : "Username"}/>
                <input className="modal__input" type="pasword" placeholder={language === "RU" ? "Пароль" : "Password"} />
                {language === "RU"
                ? <p className="modal__login">Есть учетная запись? <span className="modal__login-button" onClick={openModalLogin}>Войти</span></p>
                : <p className="modal__login">Have any account? <span className="modal__login-button" onClick={openModalLogin}>Log in</span></p>
                }
                <button className="modal__button" onClick={()=>setIshShow(false)}>
                    {language === "RU"
                    ? "Регистрация"
                    : "Sign up"
                    }
                </button>
            </div>
        </div>
    );
}

export default ModalRegister;
import React from "react";
import {useSelector} from "react-redux";

import './ModaForgotPassword.scss';

function ModaForgotPassword({setIshShow}) {
    const theme = useSelector((store) => store.theme.theme);
    const language = useSelector((store) => store.language.language);

    return(
        <div className="backgroundd-modal" onClick={()=>setIshShow(false)}>
            <div className={theme === "dark" ? "modal-forgot-password modal-dark" : "modal-forgot-password modal-light"} onClick={(e)=>e.stopPropagation()}>
                <h2 className="modal__title">
                    {language === "RU"
                    ? "Забыли пароль?"
                    : "Forgot Password?"
                    }
                </h2>
                <p className={theme === "dark" ? "modal__text-dark" : "modal__text-light"}>
                    {language === "RU"
                    ? "Введите 12 слов начальных фраз, разделенных пробелом, чтобы восстановить ваш аккаунт."
                    : "Enter 12 words of seed pharases separated by a space to restore your acccont."
                    }
                </p>
                <input className="modal__input" type="text" placeholder={language === "RU" ? "Начальная фраза" : "Seed phrase"}/>
                <button className="modal__button" onClick={()=>setIshShow(false)}>
                    {language === "RU"
                    ? "Отправить"
                    : "Send"
                    }
                </button>
            </div>
        </div>
    );
}

export default ModaForgotPassword;
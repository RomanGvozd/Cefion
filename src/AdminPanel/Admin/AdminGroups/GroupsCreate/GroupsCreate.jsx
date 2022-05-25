import React, {useState} from "react";
import {useSelector} from "react-redux";

import './GroupsCreate.scss';

function GroupsCreate() {
    const theme = useSelector((store) => store.theme.theme);
    const language = useSelector((store) => store.language.language);

    return(
        <section className="groups-create">
            <div className="groups-download">
                <label className={theme === "dark" ? "groups-download__block-file background-dark" : "groups-download__block-file background-light"}>
                    <input 
                        className="block-file__input" 
                        type="file" 
                    />
                    <p className="block-file__text">
                        {language === "RU"
                        ? "Загрузить"
                        : "Download"
                        }
                    </p>
                </label>
                <div className="groups-inputs">
                    <input 
                        className={theme === "dark" ? "groups-inputs__input background-dark " : "groups-inputs__input background-light"} 
                        placeholder={language === "RU" ? "Название группы" : "Group name"}
                        type="text" 
                    />
                    <textarea 
                        className={theme === "dark" ? "groups-inputs__texarea background-dark " : "groups-inputs__texarea background-light"} 
                        placeholder={language === "RU" ? "Описание группы" : "Group description"}
                    >
                    </textarea>
                </div>
            </div>
            <div className="groups-create__wallet-block">
                <div className={theme === "dark" ? "wallet-block__button background-dark" : "wallet-block__button background-light"}>
                </div>
                <div className="wallet-block__wrapper-input">
                    <input 
                        className={theme === "dark" ? "wrapper-input__input background-dark " : "wrapper-input__input background-light"} 
                        placeholder={language === "RU" ? "Адрес кошелька" : "Wallet adress"}
                        type="text" 
                    />
                    <input 
                        className={theme === "dark" ? "wrapper-input__input background-dark " : "wrapper-input__input background-light"} 
                        placeholder={language === "RU" ? "Пригласительная ссылка на группу" : "Group invite link"}
                        type="text" 
                    />
                    <div className="restrictions-block">
                        <p className="restrictions-block__text">
                            {language === "RU"
                            ? "Необходимое количество Cefion токенов для снятия ограничений (50)"
                            : "The required number of Cefion tokens to remove restrictions (50)"
                            }
                        </p>
                        <button className="restrictions-block__button">
                            {language === "RU"
                            ? "Снять ограничения"
                            : "Remove restrictions"
                            }
                        </button>
                    </div> 
                </div>
            </div>
            <div className="groups-create__submit-block">
                <button className="submit-block__button">
                    {language === "RU"
                    ? "Сохранить"
                    : "Save"
                    }
                </button>
                <button className="submit-block__button">
                    {language === "RU"
                    ? "Отменить"
                    : "Cancel"
                    }
                </button>
            </div>

        </section>
    )
}

export default GroupsCreate;
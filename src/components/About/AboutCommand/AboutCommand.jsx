import React, {useState} from 'react';
import {useSelector} from "react-redux";

import './AboutCommand.scss';

function AboutCommand() {
    const theme = useSelector((store) => store.theme.theme);
    const language = useSelector((store) => store.language.language);

    const [users, setUsers] = useState([
        {
            nameRU: "Имя Фамилия",
            nameEN: "NAme Surname",
            specialization: "CEO"
        },
        {
            nameRU: "Имя Фамилия",
            nameEN: "NAme Surname",
            specialization: "CEO"
        },
        {
            nameRU: "Имя Фамилия",
            nameEN: "NAme Surname",
            specialization: "CEO"
        },
        {
            nameRU: "Имя Фамилия",
            nameEN: "NAme Surname",
            specialization: "CEO"
        },
        {
            nameRU: "Имя Фамилия",
            nameEN: "NAme Surname",
            specialization: "CEO"
        },
        {
            nameRU: "Имя Фамилия",
            nameEN: "NAme Surname",
            specialization: "CEO"
        },
        {
            nameRU: "Имя Фамилия",
            nameEN: "NAme Surname",
            specialization: "CEO"
        },
        {
            nameRU: "Имя Фамилия",
            nameEN: "NAme Surname",
            specialization: "CEO"
        }
    ])

    return(
        <>
            <section className={theme === "dark" ? 'about-command about-command-dark' : 'about-command about-command-light'}>
                <div className='about-command__block-title'>
                    <h2 className='description__title'>
                        {language === "RU"
                        ? "Команда"
                        : "Command"
                        }
                    </h2>
                    <p className='block-title__text'>
                        {language === "RU"
                        ? "8 человек"
                        : "8 humans"
                        }
                    </p>
                </div>
                <div className='about-command__block-command'>
                    {users.map((user, index)=>(
                        <div className='block-command__card' key={index}>
                            <img className='image' src={require('./image/person.png')} alt="" />
                            {language === "RU"
                            ? <h6 className='title'>{user.nameRU}</h6>
                            : <h6 className='title'>{user.nameEN}</h6>
                            }
                            <p className={theme === "dark" ? "text-dark" : "text-light"}>
                                {user.specialization}
                            </p>
                        </div>
                    ))}

                </div>
            </section>
            <div className={theme === "dark" ? "line-dark" : "line-light"}></div>
        </>
    );
}

export default AboutCommand;
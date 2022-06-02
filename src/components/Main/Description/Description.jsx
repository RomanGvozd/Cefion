import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";

import './Description.scss';

function Description() {
    const theme = useSelector((store) => store.theme.theme);
    const language = useSelector((store) => store.language.language);

    return(
        <section
            initial="hidden"
            whileInView="visible"
            className={theme === "dark" ? "description description-dark" : "description description-light"}
        >
            <div className="description__block">
                <div className="block__information">
                    <h2 className="description__title description__h2">
                        {language === "RU"
                        ? "Безопасная вселенная для общения"
                        : "Secure universe of communications"
                        }
                    </h2>
                    <p className={theme === "dark" ? "description__text-dark description__p" : "description__text-light description__p"}>
                        {language === "RU" 
                        ? "Cefion — это многофункциональный мессенджер с чатами, новыми собеседниками и невероятными возможностями. Приложение, планировщик, крипто-кошелёк и социальная сеть — взрывное соединение для онлайн-коммуникации в современном мире."
                        : "Cefion is a multifunctional messenger with chats, new conversations, and incredible features. App, scheduler, crypto wallet, and social network united in the explosive mixture for online communications in the modern world."
                        }
                        
                    </p>
                    <p className={theme === "dark" ? "description__text-dark description__p" : "description__text-light description__p"}>
                        {language === "RU"
                        ? "Общайтесь в чатах, объединяйтесь в группы, а также следите за последними новостями в одном приложении."
                        : "Communicate in chats, join groups, and follow the latest news in a single app."
                        }
                    </p>
                    <p className={theme === "dark" ? "description__text-dark description__p" : "description__text-light description__p"}>
                        {language === "RU"
                        ? "Что ещё можно найти внутри Cefion? Посмотрите сами, скачав его на смартфон!"
                        : "What else can you find inside Cefion? Check it on your own by downloading it to your smartphone!"
                        }
                    </p>
                    <div className="block__download">
                        <button className="download__button download__android"></button>
                        <button className="download__button download__google-play"></button>
                    </div>
                </div>
                {theme === "dark" 
                ? <img className="block__image" src={require('./image/descriptionDark.png')} alt="" />
                : <img className="block__image" src={require('./image/descriptionLight.png')} alt="" />
                }
            </div>
        </section>
    );
}

export default Description;
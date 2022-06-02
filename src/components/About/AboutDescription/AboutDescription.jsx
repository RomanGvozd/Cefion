import React from 'react';
import {useSelector} from "react-redux";

import './AboutDescription.scss';

function AboutDescription() {
    const theme = useSelector((store) => store.theme.theme);
    const language = useSelector((store) => store.language.language);

    return (
        <>
            <section className={theme === "dark" ? 'about-description about-description-dark' : 'about-description about-description-light'}>
                <h2 className='about-description__title'>
                    {language === "RU"
                    ? "О нас"
                    : "About Us"
                    }
                </h2>
                <div className='description__block'>
                    <div className='description__left'>
                        <p className={theme === "dark" ? "description__text-dark" : "description__text-light"}>
                            {language === "RU"
                            ? "Вы и сами знаете, что безопасность в мобильном цифровом мире сейчас актуальна как никогда. Практически все приложения следят за нашими действиями 24/7, предоставляя маркетинговым агентствам развёрнутые данные о привычках, предпочтениях, времени в сети и прочие сведения."
                            : "You yourself know that security in the mobile digital world is now more relevant than ever. Almost all apps monitor our activities 24/7, providing marketing agencies with detailed data on habits, preferences, time spent online and other information."
                            }
                        </p>
                        <p className={theme === "dark" ? "description__text-dark" : "description__text-light"}>
                            {language === "RU"
                            ? "Это касается даже банальных мессенджеров, основной целью которых является общение и обмен контентом. Они также не брезгуют трекингом, сбором и анализом действий для таргетирования рекламы."
                            : "This applies even to banal messengers, the main purpose of which is communication and content exchange. They also do not disdain tracking, collecting and analyzing actions for ad targeting."
                            }
                        </p>
                        <p className={theme === "dark" ? "description__text-dark" : "description__text-light"}>
                            {language === "RU"
                            ? "Что самое интересное, даже такие мессенджеры, как Telegram и WhatsApp, также собирают информацию о пользователях и хранят её на собственных серверах, несмотря на заверения разработчиков о полной конфиденциальности."
                            : "What is most interesting is that even instant messengers like Telegram and WhatsApp also collect information about users and store it on their own servers, despite the developers' assurances of complete confidentiality."
                            }
                        </p>
                        <p className={theme === "dark" ? "description__text-dark" : "description__text-light"}>
                            {language === "RU"
                            ? "Вы готовы жертвовать своей безопасностью ради нескольких сомнительных функций? Мы — нет!"
                            : "Are you ready to sacrifice your security for a few dubious features? We are not!"
                            }
                        </p>

                    </div>
                    <div className='description__right'>
                        <p className={theme === "dark" ? "description__text-dark" : "description__text-light"}>
                            {language === "RU"
                            ? "Наша команда провела анализ алгоритмов сбора информации сторонними аналитическими сервисами и решилась на выпуск собственной анонимной платформы."
                            : "Our team analyzed the algorithms for collecting information by third-party analytical services and decided to release our own anonymous platform."
                            }
                        </p>
                        <p className={theme === "dark" ? "description__text-dark" : "description__text-light"}>
                            {language === "RU"
                            ? "Имя ей — Cefion. Основная идея проекта — общение (без границ, имён, контактных данных), обмена контентом, хранение и обмен своих активов, способ заработка (в виде биржи действий), Metaverce (огромный мир с неограниченными возможностями) и др. функциями. Наша задача привести вас в приложение без границ."
                            : "Her name is Cefion. The main idea of ​​the project is communication (without borders, names, contact details), content exchange, storage and exchange of your assets, a way to earn money (in the form of an action exchange), Metaverce (a huge world with unlimited possibilities) and other functions. Our task is to bring you to the application without borders."
                            }
                        </p>
                    </div>
                </div>
            </section>
            <div className={theme === "dark" ? "line-dark" : "line-light"}></div>
        </>
    );
}

export default AboutDescription;
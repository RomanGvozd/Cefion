import React from "react";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

import './Timeline.scss';
import './TimelineAdaptive.scss';


function Timeline() {
    const theme = useSelector((store) => store.theme.theme);
    const language = useSelector((store) => store.language.language);

    const scrollTop = () => {
        window.scrollTo(0, 0);
    }
    
    return(
        <section className={theme === "dark" ? "timeline timeline-dark" : "timeline timeline-light"}>
            <div className="timeline__description">
                <h2 className="description__title">
                    {language === "RU"
                    ? "Лента новостей"
                    : "News Feed"
                    }
                </h2>
                <p className={theme === "dark" ? "description__text-dark" : "description__text-light"}>
                    {language === "RU"
                    ? "Одна из задач Cefion — рассказать инвесторам о главных тенденциях на рынке криптовалют."
                    : "One of the tasks of Cefion is to tell investors about the global trends in the cryptocurrency market."
                    }
                </p>
                <p className={theme === "dark" ? "description__text-dark" : "description__text-light"}>
                    {language === "RU"
                    ? "Приложение хранит последние, популярные и 1–2 недельные новости, чтобы вы могли ознакомиться с актуальными событиями."
                    : "The app stores the latest, popular, and 1–2 week news so that you can find out more about current events."
                    }
                </p>
                <p className={theme === "dark" ? "description__text-dark" : "description__text-light"}>
                    {language === "RU"
                    ? "Платформа предлагает светлый и тёмный режим чтения, подстраиваясь под каждого пользователя."
                    : "The platform offers light and dark reading modes, adaptable to each user."
                    }
                </p>
                <p className={theme === "dark" ? "description__text-dark" : "description__text-light"}>
                    {language === "RU"
                    ? "Изучайте вдохновляющие статьи и инвестируйте правильно!"
                    : "Study inspirational articles and invest wisely!"
                    }
                </p>
                <Link to="/news" onClick={scrollTop}>
                    <button className="description__button">
                        {language === "RU"
                        ? "Читать новости"
                        : "Read news"
                        }
                    </button>
                </Link>
            </div>
            {theme === "dark" 
            ? <img className="timeline__image" src={require('./image/timelineDark.png')} alt="" />
            : <img className="timeline__image" src={require('./image/timelineLight.png')} alt="" />
            }
        </section>
    )
}

export default Timeline;
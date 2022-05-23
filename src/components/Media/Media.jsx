import React from 'react';
import {useSelector} from "react-redux";

import './Media.scss';

function Media() {
    const theme = useSelector((store) => store.theme.theme);
    const language = useSelector((store) => store.language.language);

    return (
        <section className={theme === 'dark' ? 'media media-dark' : 'media media-light'}>
            <h2 className='media-description__title'>
                {language === "RU"
                ? "СМИ о нас"
                : "Mass Media about us"
                }
            </h2>
            <div className='media__block'>
                {theme === "dark"
                ? <img className='block__image' src={require('./image/SocPullDark.png')} alt="" />
                : <img className='block__image' src={require('./image/SocPullLight.png')} alt="" />
                }
                <div className='block__content'>
                    <h4 className='content__title'>
                        {language === "RU"
                        ? "Выведение крипторынка «на свет» не решает проблемы правоприменения: председатель CFTC"
                        : "Bringing crypto market 'into the light' doesn’t address enforcement: CFTC chair"
                        }
                    </h4>
                    <p className={theme === "dark" ? "description__text-dark" : "description__text-light"}>
                        {language === "RU"
                        ? "Выведение крипторынка «на свет» не решает проблемы правоприменения: председатель CFTC"
                        : "Bringing crypto market 'into the light' doesn’t address enforcement: CFTC chair"
                        }
                    </p>
                    <p className={theme === "dark" ? "description__text-dark" : "description__text-light"}>
                        {language === "RU"
                        ? "3 месяца назад"
                        : "3 months ago"
                        }
                    </p>
                </div>
            </div>
            <div className='media__block'>
                {theme === "dark"
                ? <img className='block__image' src={require('./image/SocPullDark.png')} alt="" />
                : <img className='block__image' src={require('./image/SocPullLight.png')} alt="" />
                }
                <div className='block__content'>
                    <h4 className='content__title'>
                        {language === "RU"
                        ? "Выведение крипторынка «на свет» не решает проблемы правоприменения: председатель CFTC"
                        : "Bringing crypto market 'into the light' doesn’t address enforcement: CFTC chair"
                        }
                    </h4>
                    <p className={theme === "dark" ? "description__text-dark" : "description__text-light"}>
                        {language === "RU"
                        ? "Выведение крипторынка «на свет» не решает проблемы правоприменения: председатель CFTC"
                        : "Bringing crypto market 'into the light' doesn’t address enforcement: CFTC chair"
                        }
                    </p>
                    <p className={theme === "dark" ? "description__text-dark" : "description__text-light"}>
                        {language === "RU"
                        ? "3 месяца назад"
                        : "3 months ago"
                        }
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Media;
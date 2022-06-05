import React, {useState} from 'react';
import {useSelector} from "react-redux";
import {Link, useLocation} from "react-router-dom";

import arr from './marketNevsCards';
import './MarketNews.scss'

function MarketNews() {
    const theme = useSelector((store) => store.theme.theme);
    const language = useSelector((store) => store.language.language);

    const [cards, setCards] = useState(arr)

    const scrollTop = () => {
        window.scrollTo(0, 0);
    }
    
    return (
        <>
            <section className='market-news'>
                <div className='market-news__header'>
                    <h2 className={theme === 'dark' ? 'header__title-dark' : 'header__title-light'}>
                        {language === "RU"
                        ? "Технология"
                        : "Market News"
                        }
                    </h2>
                </div>
                <div className='market-news__content'>
                    {cards.map((card)=>(
                        <Link to="/news/1" onClick={scrollTop}>
                            <div className={theme === 'dark' ? 'content__card content__card-dark' : 'content__card content__card-light'}>
                                <div className='card__image'>
        
                                </div>
                                <div className='card__header'>
                                    {language === "RU"
                                    ? <p className='card__header__title'>{card.titleRU}</p>
                                    : <p className='card__header__title'>{card.titleEN}</p>
                                    }
                                    <p className='card__header__user'>
                                        {card.avtor}
                                    </p>
                                </div>
                                {language === "RU"
                                ? <p className='card__description'>{card.descriptionRU}</p>
                                : <p className='card__description'>{card.descriptionEN}</p>
                                }
                                <div className='card__footer'>

                                </div>
                            </div>
                        </Link>
                    ))}
                </div>         
            </section>
            <div className={theme === "dark" ? "line-dark" : "line-light"}></div>
        </>
    );
}

export default MarketNews;
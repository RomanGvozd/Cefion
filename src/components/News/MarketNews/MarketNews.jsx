import React, {useState} from 'react';
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

import arr from './marketNevsCards';
import './MarketNews.scss'

function MarketNews({setNewsID}) {
    const news = useSelector((store) => store.newsPublish);
    const theme = useSelector((store) => store.theme.theme);
    const language = useSelector((store) => store.language.language);

    const [cards, setCards] = useState(arr)

    const scrollTop = (id) => {
        window.scrollTo(0, 0);
        setNewsID(id)
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
                    {news.map((card)=>(
                        <Link to={`/news/page/${card.id}`} onClick={()=>scrollTop(card.id)}>
                            <div className={theme === 'dark' ? 'content__card content__card-dark' : 'content__card content__card-light'}>
                                <div className='card__image'>
                                </div>
                                <div className='card__header'>
                                    {language === "RU"
                                    ? <p className='card__header__title'>5 часов назад</p>
                                    : <p className='card__header__title'>5 hours ago</p>
                                    }
                                    <p className='card__header__user'>
                                        by {card.author}
                                    </p>
                                </div>
                                {language === "RU"
                                ? <p className='card__description'>{card.titleRU}</p>
                                : <p className='card__description'>{card.titleEN}</p>
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
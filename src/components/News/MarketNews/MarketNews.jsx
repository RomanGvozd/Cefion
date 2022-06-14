import React, {useState, useEffect} from 'react';
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import moment from 'moment';

import './MarketNews.scss'

function MarketNews({setNewsID, type}) {
    const [endtime, setEndtime] = useState()

    useEffect(() => {
        setEndtime(Date.now());
    },[])

    let news = useSelector((store) => store.newsPublish);
    const theme = useSelector((store) => store.theme.theme);
    const language = useSelector((store) => store.language.language);

    if (type !== "AllNews") {
        news = news.filter(item=> item.type === type)
    }

    const scrollTop = () => {
        window.scrollTo(0, 0);
    }

    return (
        <>
            <section className={theme === 'dark' ? 'market-news market-news-dark' : 'market-news market-news-light'}>
                <div className='market-news__header'>
                    <h2 className={theme === 'dark' ? 'header__title-dark' : 'header__title-light'}>

                        {type}
                    </h2>
                </div>
                <div className='market-news__content'>
                    {news.map((card)=>(
                        <Link 
                            to={`/news/page/${card.id}`} 
                            onClick={()=>{
                                scrollTop(card.id)
                                setNewsID(card.id)
                            }}
                        >
                            <div className={theme === 'dark' ? 'content__card content__card-dark' : 'content__card content__card-light'}>
                                <div className='card__image'>
                                </div>
                                <div className='card__header'>
                                    {language === "RU"
                                    ? <p className={theme === 'dark' ? 'card__header__title-dark' : 'card__header__title-light'}>
                                        {moment(card.date, "YYYYMMDD h:mm:ss").locale('ru').fromNow()}
                                    </p>
                                    : <p className={theme === 'dark' ? 'card__header__title-dark' : 'card__header__title-light'}>
                                        {moment(card.date, "YYYYMMDD h:mm:ss").locale('en').fromNow()}
                                    </p>
                                    }
                                    <p className='card__header__user'>
                                        by {card.author}
                                    </p>
                                </div>
                                {language === "RU"
                                ? <p className={theme === 'dark' ? 'card__description-dark' : 'card__description-light'}>{card.titleRU}</p>
                                : <p className={theme === 'dark' ? 'card__description-dark' : 'card__description-light'}>{card.titleEN}</p>
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
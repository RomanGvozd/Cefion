import React, {useState} from 'react';
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {content} from './NewsPageSearch.config';

import './NewsPageSearch.scss'

function NewsPageSearch({setNewsID}) {
    const newsPublish = useSelector((store) => store.newsPublish);
    const theme = useSelector((store) => store.theme.theme);
    const language = useSelector((store) => store.language.language);

    const {title, cardRead} = content[language];

    const scrollTop = (id) => {
        window.scrollTo(0, 0);
    }

    return (
        <>
            <section className='news-page-search'>
                <h2 className='news-page-search__title'>
                    {title}
                </h2>
                <div className='news-page-search__list'>
                    {newsPublish.map((card)=>(
                        <Link 
                        to={`/news/page/${card.id}`} 
                        onClick={()=>{
                            scrollTop()
                            setNewsID(card.id)
                        }}>
                            <div 
                                className={theme === 'dark' ? 'list__card list__card-dark' : 'list__card list__card-light'} 
                                key={card.id}
                            >
                                <img className='card__image' src={require('./image/cardImage.png')} alt="" />
                                {language === "RU"
                                ? <p className='card__title'>{card.titleRU}</p>
                                : <p className='card__title'>{card.titleEN}</p>
                                }

                                <div className='card__user'>
                                    <img className='user__image' src={require('./image/user.png')} alt="" />
                                    <div className='user__info'>
                                        <p className={theme === 'dark' ? 'info__name-dark' : 'info__name-light'}>{card.author}</p>
                                        <p className='info__email'>{card.tagName}</p>
                                    </div>
                                    <p className='user__text'>{cardRead}</p>
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

export default NewsPageSearch;
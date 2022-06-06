import React, {useState} from 'react';
import {useSelector} from "react-redux";
import arr from './CardArray';
import {content} from './NewsPageSearch.config';

import './NewsPageSearch.scss'

function NewsPageSearch() {
    const theme = useSelector((store) => store.theme.theme);
    const language = useSelector((store) => store.language.language);

    const [cards, setCards] = useState(arr);

    const {title, cardRead} = content[language];

    return (
        <>
            <section className='news-page-search'>
                <h2 className='news-page-search__title'>
                    {title}
                </h2>
                <div className='news-page-search__list'>
                    {cards.map((card)=>(
                        <div className='list__card' key={card.id}>
                            <img className='card__image' src={require('./image/cardImage.png')} alt="" />
                            {language === "RU"
                            ? <p className='card__title'>{card.titleRU}</p>
                            : <p className='card__title'>{card.titleEN}</p>
                            }

                            <div className='card__user'>
                                <img className='user__image' src={require('./image/user.png')} alt="" />
                                <div className='user__info'>
                                    <p className={theme === 'dark' ? 'info__name-dark' : 'info__name-light'}>{card.name}</p>
                                    <p className='info__email'>{card.email}</p>
                                </div>
                                <p className='user__text'>{cardRead}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <div className={theme === "dark" ? "line-dark" : "line-light"}></div>
        </>
    );
}

export default NewsPageSearch;
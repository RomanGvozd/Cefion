import React from "react";
import {useSelector} from "react-redux";

import './NewsPageContent.scss';

function NewsPageContent({newsID}) {
    const newsPublish = useSelector((srote) => srote.newsPublish)
    const theme = useSelector((store) => store.theme.theme);
    const language = useSelector((store) => store.language.language);

    let news = newsPublish.filter((item)=> item.id === newsID)
    news = news[0]

    return(
        <>
            <section className={theme === 'dark' ? 'news-page news-page-dark' : 'news-page news-page-light'}>
                <section className='news-page-section'>
                    <aside className='section__aside'>
                        <h6 className={theme === 'dark' ? 'aside__title-dark' : 'aside__title-light'}>February 9th 2022</h6>
                        <div className='aside__user'>
                            <img className='user__image' src={require('./image/user.png')} alt="" />
                            <p className={theme === 'dark' ? 'user__name-dark' : 'user__name-light'}>Name Surname</p>
                            <p className='user__email'>@marcelosalomao</p>
                        </div>
                    </aside>
                    <div className='section__content'>
                        <h2 className='content__title'>
                            {news.titleRU}
                        </h2>
                        <img className='content__image' src={require('./image/newsPageImage.png')} alt="" />
                        <p className={theme === 'dark' ? 'content__text-dark' : 'content__text-light'}>
                            {news.descriptionRU}
                        </p>
                    </div>
                </section>
            </section>
            <div className={theme === "dark" ? "line-dark" : "line-light"}></div>
        </>
    )
}

export default NewsPageContent;
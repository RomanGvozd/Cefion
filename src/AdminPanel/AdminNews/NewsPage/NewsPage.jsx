import React from "react";
import {useSelector} from "react-redux";

import './NewsPage.scss';

function NewsPage({newsID}) {
    const newsPageDrafts = useSelector((store) => store.newsDrafts);
    const newsPageReview = useSelector((store) => store.newsReview);
    const newsPagePublish = useSelector((store) => store.newsPublish);
    const theme = useSelector((store) => store.theme.theme);
    const language = useSelector((store) => store.language.language);

    const newsPages = [...newsPageDrafts, ...newsPageReview, ...newsPagePublish]

    let page = newsPages.filter((item)=> item.id === newsID)
    page = page[0]

    return(
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
                    {page.titleRU}
                </h2>
                <img className='content__image' src={require('./image/newsPageImage.png')} alt="" />
                <p className={theme === 'dark' ? 'content__text-dark' : 'content__text-light'}>
                    {page.descriptionRU}
                </p>
            </div>
        </section>
    )
}

export default NewsPage;
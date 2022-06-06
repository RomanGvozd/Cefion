import React from "react";
import {useSelector} from "react-redux";

import './NewsPageContent.scss';

function NewsPageContent() {
    const theme = useSelector((store) => store.theme.theme);
    const language = useSelector((store) => store.language.language);

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
                            What are the Best Data Analytics Tools?
                        </h2>
                        <img className='content__image' src={require('./image/newsPageImage.png')} alt="" />
                        <p className={theme === 'dark' ? 'content__text-dark' : 'content__text-light'}>
                            Data analytics is used for transforming raw data into useful insights. It provides statistics and explanations to help businesses produce improved data-driven decisions.
                            According to a variety of data analytics courses: modern business operations revolve around data science.
                            Data Science uses several different tools and technologies to provide better results, and that’s what makes it difficult to choose just one particular data analytics tool for improving a business.
                            Every tool has a different role to play, and not all of them are suitable for doing the same job. Therefore, let us learn what data analytics tools are, and explore some tools that are available in the market.
                        </p>
                    </div>
                </section>
            </section>
            <div className={theme === "dark" ? "line-dark" : "line-light"}></div>
        </>
    )
}

export default NewsPageContent;
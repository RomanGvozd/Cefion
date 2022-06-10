import React from "react";
import {useSelector} from "react-redux";
import moment from "moment";
import 'moment/locale/ru';

import './NewsPageContent.scss';

function NewsPageContent({newsID}) {
    const newsPublish = useSelector((srote) => srote.newsPublish)
    const theme = useSelector((store) => store.theme.theme);
    const language = useSelector((store) => store.language.language);

    let news = newsPublish.filter((item)=> item.id === newsID)
    news = news[0]

    let date = news.date.split(' ')
    date = date[0].split('-')

    let mounsRU = moment(date[1]).locale('ru').format('MMMM')
    mounsRU = mounsRU[0].toUpperCase() + mounsRU.slice(1)
    let mounsEN = moment(date[1]).locale('en').format('MMMM')
    let years = date[0]
    let numberDate = date[2]

    return(
        <>
            <section className={theme === 'dark' ? 'news-page news-page-dark' : 'news-page news-page-light'}>
                <section className='news-page-section'>
                    <aside className='section__aside'>
                        {language === "RU"
                        ?<h6 className={theme === 'dark' ? 'aside__title-dark' : 'aside__title-light'}>
                            {`${numberDate} ${mounsRU} ${years}`}
                        </h6>
                        :<h6 className={theme === 'dark' ? 'aside__title-dark' : 'aside__title-light'}>
                            {`${mounsEN} ${numberDate}th ${years}`}
                        </h6>
                        }

                        <div className='aside__user'>
                            <img className='user__image' src={require('./image/user.png')} alt="" />
                            <p className={theme === 'dark' ? 'user__name-dark' : 'user__name-light'}>{news.author}</p>
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
import React from "react";
import {useSelector} from "react-redux";
import moment from "moment";
import { Link } from "react-router-dom";

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

    let date = page.date.split(' ')
    date = date[0].split('-')

    let mounsRU = moment(date[1]).locale('ru').format('MMMM')
    mounsRU = mounsRU[0].toUpperCase() + mounsRU.slice(1)
    let mounsEN = moment(date[1]).locale('en').format('MMMM')
    let years = date[0]
    let numberDate = date[2]

    return(
        <>
            <Link to="/admin/news/drafts">
                <button 
                    className={theme === "dark" ? "button-back background-dark" : "button-back background-light"}
                >
                    <div className={theme === "dark" ? "button__image-dark" : "button__image-light"}></div>
                    {language === "RU"
                    ? "Назад"
                    : "Back"
                    }
                </button>
            </Link>
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
                        <p className={theme === 'dark' ? 'user__name-dark' : 'user__name-light'}>{page.author}</p>
                        <p className='user__email'>{page.tagName}</p>
                    </div>
                </aside>
                <div className='section__content'>
                    {language === "RU"
                    ?<h2 className='content__title'>
                        {page.titleRU}
                    </h2>
                    :<h2 className='content__title'>
                        {page.titleEN}
                    </h2>
                    }

                    <img className='content__image' src={require('./image/newsPageImage.png')} alt="" />
                    {language === "RU"
                    ?<p 
                        className={theme === 'dark' ? 'content__text-dark' : 'content__text-light'}
                        dangerouslySetInnerHTML={{__html: `${page.descriptionRU}`}}
                    >
                    </p>
                    :<p 
                        className={theme === 'dark' ? 'content__text-dark' : 'content__text-light'}
                        dangerouslySetInnerHTML={{__html: `${page.descriptionEN}`}}
                    >
                    </p>
                    }

                </div>
            </section>
        </>
    )
}

export default NewsPage;
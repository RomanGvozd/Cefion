import React, {useState, useEffect} from "react";
import {useSelector} from "react-redux";
import arr from "./tags.array";
import buttons from "./button.array";
import {content} from './NewsPageFooter.config';
import moment from "moment";

import './NewsPageFooter.scss'

function NewsPageFooter({newsID}) {
    const [endtime, setEndtime] = useState()
    const [views, setViews] = useState(15)

    useEffect(() => {
        setEndtime(Date.now());
        setViews(views + 1)
    },[])

    const newsPublish = useSelector((srote) => srote.newsPublish)
    const theme = useSelector((store) => store.theme.theme);
    const language = useSelector((store) => store.language.language);

    const {title} = content[language]

    let news = newsPublish.filter((item)=> item.id === newsID)
    news = news[0]
    
    return (
        <>
            <section className='news-page__footer'>
                <div className='footer__user'>
                    <img className='user__image' src={require('./image/user.png')} alt="" />
                    <div className='user__info'>
                        <p className='user__name'>{news.authorybk}</p>
                        <p className='user__email'>{news.tagName}</p>
                    </div>
                    {language === "RU"
                        ?<p className='user__time'>
                            {moment(news.date, "YYYYMMDD h:mm:ss").locale('ru').fromNow()}
                        </p>
                        :<p className='user__time'>
                            {moment(news.date, "YYYYMMDD h:mm:ss").locale('en').fromNow()}
                        </p>
                    }
                </div>
                <div className='footer__social'>
                    <div className="footer__social-block">
                        <div className="social__search">
                            <div className={theme === "dark" ? "social__search-icon-dark" : "social__search-icon-light"}></div>
                            <p className='social__search-text'>{views}</p>
                        </div>
                        <div className="social__tags">
                            <div className={theme === "dark" ? "social__tags-icon-dark" : "social__tags-icon-light"}></div>
                            <p className='social__tags-text'>541</p>
                        </div>
                    </div>
                    <div className='social-block'>
                        {buttons.map((button)=>(
                            <button className='social__button'>
                                {theme === "dark"
                                ? <img className='button__image' src={require(`${button.imageDark}`)} alt="" />
                                : <img className='button__image' src={require(`${button.imageLight}`)} alt="" />
                                }
                            </button>
                        ))}
                    </div>
                </div>
                <h4 className="footer__tags-title">{title}</h4>
                <div className='footer__tags'>
                    {news.hashtags.map((tag, index)=>(
                        <div key={index} className='tag'>
                            {tag}
                        </div>
                    ))}
                </div>
            </section>
            <div className={theme === "dark" ? "line-dark" : "line-light"}></div>
        </>
    );
}

export default NewsPageFooter;
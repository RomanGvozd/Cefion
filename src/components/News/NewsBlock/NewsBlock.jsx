import React, {useState, useEffect} from 'react';
import {useSelector} from "react-redux";
import { content } from "./newsBlock.config";
import {Link} from "react-router-dom";
import moment from 'moment';

import './NewsBlock.scss'

function NewsBlock({setNewsID}) {
    const [endtime, setEndtime] = useState()

    useEffect(() => {
        setEndtime(Date.now());
    },[])

    const newsPublish = useSelector((store) => store.newsPublish)
    const theme = useSelector((store) => store.theme.theme);
    const language = useSelector((store) => store.language.language);

    let news = newsPublish[newsPublish.length-1]

    let posts = []

    for (let i = 0; i < 5; i++) {
        posts.push(newsPublish[i])
    }

    const [show, setShow] = useState(false);

    const { text1, button1, button2 } = content[language];

    const scrollTop = () => {
        window.scrollTo(0, 0);
    }
    
    return (
        <section className="news-block">
            <Link to={`/news/page/${news.id}`} onClick={()=>setNewsID(news.id)}>
                <div className='news-block__image'>
                    <div className='image__top'>
                        {language === "RU"
                        ? <h4 className='image__top-title'>{news.titleRU}</h4>
                        : <h4 className='image__top-title'>{news.titleEN}</h4>
                        }
                    </div>
                    <div className='image__bottom'>
                        <p className='image__bottom-text'>{text1}</p>
                        <p className='image__bottom-text'>{news.author}</p>
                        {language === "RU"
                        ?<p className='image__bottom-text'>
                            {moment(news.date, "YYYYMMDD h:mm:ss").locale('ru').fromNow()}
                        </p>
                        :<p className='image__bottom-text'>
                            {moment(news.date, "YYYYMMDD h:mm:ss").locale('en').fromNow()}
                        </p>
                        }

                    </div>
                </div>
            </Link>
            <div className="news-block__aside">
                <div className='aside__block-button'>
                    <button 
                        className={theme === 'dark' ? 'aside__button-dark' : 'aside__button-light'}
                        style={!show ? {border: `1px solid #2E9C3E`, color: `#2E9C3E`} : {}}
                        onClick={()=>setShow(false)}
                    >
                        {button1}
                    </button>
                    <button 
                        className={theme === 'dark' ? 'aside__button-dark' : 'aside__button-light'}
                        style={show ? {border: `1px solid #2E9C3E`, color: `#2E9C3E`} : {}}
                        onClick={()=>setShow(true)}
                    >
                        {button2}
                    </button>
                </div>
                <div className="news-block__posts">
                    {posts.map((post)=>(
                        <Link 
                            to={`/news/page/${post.id}`} 
                            onClick={()=>{
                                setNewsID(post.id)
                                scrollTop()
                            }}
                        >
                            <div 
                                className={theme === 'dark' ? 'posts__block posts__block-dark' : 'posts__block posts__block-light'}
                                key={post.id}
                            >
                                {language === "RU"
                                ? <>
                                    <p className='posts__text'>{post.titleRU}</p>
                                    {show && 
                                    <p className='posts__subtext'>
                                        <div className={theme === 'dark' ? 'posts__subtext-image-dark' : 'posts__subtext-image-light'}>
                                        </div>{15}
                                    </p>}
                                </>

                                : <>
                                    <p className='posts__text'>{post.titleEN}</p>
                                    {show && 
                                    <p className='posts__subtext'>
                                        <div className={theme === 'dark' ? 'posts__subtext-image-dark' : 'posts__subtext-image-light'}>
                                        </div>{15}
                                    </p>}
                                </>
                                }
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default NewsBlock;
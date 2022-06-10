import React, {useState, useEffect} from 'react';
import {useSelector} from "react-redux";
import { content } from "./newsBlock.config";
import {Link} from "react-router-dom";
import { diffDate } from '../../../diff.date';

import arr from './newsBlockPosts';

import './NewsBlock.scss'

function NewsBlock({setNewsID}) {
    const [endtime, setEndtime] = useState()

    useEffect(() => {
        let date = new Date()

        let year = date.getFullYear()
        let month = String(date.getMonth() + 1).padStart(2, '0'); 
        let day = String(date.getDate()).padStart(2, '0');
        let hour = date.getHours()
        let minutes = date.getMinutes()

        setEndtime(`${year}-${day}-${month} ${hour}:${minutes}`);

    },[])

    const newsPublish = useSelector((store) => store.newsPublish)
    const theme = useSelector((store) => store.theme.theme);
    const language = useSelector((store) => store.language.language);

    let news = newsPublish[newsPublish.length-1]

    const [posts, setPosts] = useState(arr);

    const [show, setShow] = useState(false);

    const { text1, button1, button2 } = content[language];

    
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
                        <p className='image__bottom-text'>{`${diffDate(endtime, news.date)} ago`}</p>
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
                        <div className='posts__block'>
                            {language === "RU"
                            ? <>
                                <p className='posts__text'>{post.descriptionRU}</p>
                                {show && <p className='posts__subtext'>
                                    <div className={theme === 'dark' ? 'posts__subtext-image-dark' : 'posts__subtext-image-light'}></div>{post.peopleSearch}
                                </p>}
                            </>

                            : <>
                                <p className='posts__text'>{post.descriptionEN}</p>
                                {show && <p className='posts__subtext'>
                                    <div className={theme === 'dark' ? 'posts__subtext-image-dark' : 'posts__subtext-image-light'}></div>{post.peopleSearch}
                                </p>}
                            </>
                            }
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default NewsBlock;
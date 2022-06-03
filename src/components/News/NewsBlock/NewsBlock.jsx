import React, {useState} from 'react';
import {useSelector} from "react-redux";
import { content } from "./newsBlock.config";

import arr from './newsBlockPosts';

import './NewsBlock.scss'

function NewsBlock() {
    const theme = useSelector((store) => store.theme.theme);
    const language = useSelector((store) => store.language.language);

    const [posts, setPosts] = useState(arr);

    const [show, setShow] = useState(false);

    const { title, text1, text2, text3, button1, button2 } = content[language];

    
    return (
        <section className="news-block">
            <div className='news-block__image'>
                <div className='image__top'>
                    <h4 className='image__top-title'>
                        {title}
                    </h4>
                </div>
                <div className='image__bottom'>
                    <p className='image__bottom-text'>{text1}</p>
                    <p className='image__bottom-text'>{text2}</p>
                    <p className='image__bottom-text'>{text3}</p>
                </div>
            </div>
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
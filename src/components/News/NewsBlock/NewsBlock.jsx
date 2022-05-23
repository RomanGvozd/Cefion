import React, {useState} from 'react';
import {useSelector} from "react-redux";

import arr from './newsBlockPosts';

import './NewsBlock.scss'

function NewsBlock() {
    const theme = useSelector((store) => store.theme.theme);
    const language = useSelector((store) => store.language.language);

    const [posts, setPosts] = useState(arr)
    
    return (
        <section className="news-block">
            <div className='news-block__image'>
            </div>
            <div className="news-block__aside">
                <div className='aside__block-button'>
                    <button className={theme === 'dark' ? 'aside__button-dark' : 'aside__button-light'}>
                        {language === "RU"
                        ? "Выбор редактора"
                        : "Editor's Choice"
                        }
                    </button>
                    <button className={theme === 'dark' ? 'aside__button-dark' : 'aside__button-light'}>
                        {language === "RU"
                        ? "ГОРЯЧИЕ НОВОСТИ"
                        : "HOTNEWS"
                        }
                    </button>
                </div>
                <div className="news-block__posts">
                    {posts.map((post)=>(
                        <div className='posts__block'>
                            {language === "RU"
                            ? <p className='posts__text'>{post.descriptionRU}</p>
                            : <p className='posts__text'>{post.descriptionEN}</p>
                            }
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default NewsBlock;
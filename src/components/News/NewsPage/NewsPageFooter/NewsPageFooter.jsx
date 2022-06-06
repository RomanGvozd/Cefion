import React, {useState} from "react";
import {useSelector} from "react-redux";
import arr from "./tags.array";
import buttons from "./button.array";
import {content} from './NewsPageFooter.config';

import './NewsPageFooter.scss'

function NewsPageFooter() {
    const theme = useSelector((store) => store.theme.theme);
    const language = useSelector((store) => store.language.language);

    const [tags, setTags] = useState(arr)

    const {title} = content[language]
    
    return (
        <>
            <section className='news-page__footer'>
                <div className='footer__user'>
                    <img className='user__image' src={require('./image/user.png')} alt="" />
                    <div className='user__info'>
                        <p className='user__name'>Name Surname</p>
                        <p className='user__email'>@marcelosalomao</p>
                    </div>
                    <p className='user__time'>5 month ago</p>
                </div>
                <div className='footer__social'>
                    <div className="footer__social-block">
                        <div className="social__search">
                            <div className={theme === "dark" ? "social__search-icon-dark" : "social__search-icon-light"}></div>
                            <p className='social__search-text'>15</p>
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
                    {tags.map((tag)=>(
                        <div className='tag'>
                            {tag.title}
                        </div>
                    ))}
                </div>
            </section>
            <div className={theme === "dark" ? "line-dark" : "line-light"}></div>
        </>
    );
}

export default NewsPageFooter;
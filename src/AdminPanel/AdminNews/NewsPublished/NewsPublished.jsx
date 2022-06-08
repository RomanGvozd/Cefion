import React from "react";
import {useSelector, useDispatch} from "react-redux";
import { Link, Routes, Route, useLocation } from "react-router-dom";

import { deleteItem } from "../../../common/store/newsPublish/actions";

import './NewsPublished.scss';

function NewsPublished({setNewsID, setNewsEditPublishID}) {

    const news = useSelector((store) => store.newsPublish);
    const theme = useSelector((store) => store.theme.theme);
    const language = useSelector((store) => store.language.language);
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deleteItem(id))
    }

    return(
        <section className="news-list">
            {news.map((item)=>(
                <div 
                    className={theme === "dark" ? "news background-dark" : "news background-light"}
                    key={item.id}
                >
                    <Link to={`/admin/news/edit-publish/page/${item.id}`} onClick={()=>setNewsEditPublishID(item.id)}>
                        <button 
                            className={theme === "dark" ? "news__edit background-dark" : "news__edit background-light"}
                            
                        >
                            <div className="news__edit-image"></div>
                        </button>
                    </Link>
                    <button 
                        className={theme === "dark" ? "news__delete background-dark" : "news__delete background-light"}
                        onClick={()=>handleDelete(item.id)}
                    >
                        <div className="news__delete-image"></div>
                    </button>
                    <Link to={`/admin/news/page/${item.id}`} onClick={()=>setNewsID(item.id)}>
                        <img className="news__image" src={require('./image/newsImage.png')} alt="" />
                    </Link>
                    <div className="news__info">
                        <p className={theme === "dark" ? "info__time-dark": "info__time-light"}>
                            5 hours ago
                        </p>
                        <p className="info__author">
                            by {item.author}
                        </p>
                    </div>
                    <h6 className="news__title">
                        {item.titleRU}
                    </h6>
                    <p className={theme === "dark" ? "news__description-dark" : "news__description-light"}>
                        {news.descriptionRU}
                    </p>
                </div>
            ))}
        </section>
    )
}

export default NewsPublished;
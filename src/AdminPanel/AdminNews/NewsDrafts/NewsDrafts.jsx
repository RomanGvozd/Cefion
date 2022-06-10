import React, {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import { Link } from "react-router-dom";
import moment from "moment";

import { deleteItem } from "../../../common/store/newsDrafts/actions";

import './NewsDrafts.scss';

function NewsDrafts({setNewsID, setNewsEditDraftsID}) {
    const [endtime, setEndtime] = useState()

    useEffect(() => {
        setEndtime(Date.now());
    },[])
    
    const news = useSelector((store) => store.newsDrafts);
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
                    <Link to={`/admin/news/edit-drafts/page/${item.id}`} onClick={()=>setNewsEditDraftsID(item.id)}>
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
                        {language === "RU"
                            ?<p className={theme === "dark" ? "info__time-dark": "info__time-light"}>
                                {moment(item.date, "YYYYMMDD h:mm:ss").locale('ru').fromNow()}
                            </p>
                            :<p className={theme === "dark" ? "info__time-dark": "info__time-light"}>
                                {moment(item.date, "YYYYMMDD h:mm:ss").locale('en').fromNow()}
                            </p>
                        }
                        <p className="info__author">
                            by {item.author}
                        </p>
                    </div>
                    <p className="news__title">
                        {item.titleRU}
                    </p>
                </div>
            ))}
        </section>
    )
}

export default NewsDrafts;
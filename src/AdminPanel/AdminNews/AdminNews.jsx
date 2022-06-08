import React, {useState} from "react";
import {useSelector} from "react-redux";
import { Link, Routes, Route, useLocation } from "react-router-dom";
import { content } from "./AdminNews.config";

import NewsCreate from "./NewsCreate/NewsCreate";
import NewsDrafts from "./NewsDrafts/NewsDrafts";
import NewsReview from "./NewsReview/NewsReview";
import NewsPublished from "./NewsPublished/NewsPublished";

import NewsPage from "./NewsPage/NewsPage";
import NewsEditDraft from "./NewsEditDraft/NewsEditDraft";
import NewsEditReview from "./NewsEditReview/NewsEditReview";
import NewsEditPublish from "./NewsEditPublish/NewsEditPublish";

import './AdminNews.scss';

function AdminNews() {
    const theme = useSelector((store) => store.theme.theme);
    const language = useSelector((store) => store.language.language);
    const {pathname} = useLocation();

    const {Create, Drafts, Review, Published} = content[language];

    const [newsID, setNewsID] = useState('');
    const [newsEditDraftsID, setNewsEditDraftsID] = useState('');
    const [newsEditReviewID, setNewsEditReviewID] = useState('');
    const [newsEditPublishID, setNewsEditPublishID] = useState('');

    return(
        <section className="admin-news">
            <div className="admin-news__header">
                <Link to="/admin/news">
                    <button 
                        className={theme === "dark" ? "header__button background-dark" : "header__button background-light"}
                        style={pathname === "/admin/news" ? {color: "#2E9C3E", border: "1px solid #2E9C3E"} : {}}
                    >
                        {Create}
                    </button>
                </Link>
                <Link to="/admin/news/drafts">
                    <button 
                        className={theme === "dark" ? "header__button background-dark" : "header__button background-light"}
                        style={pathname === "/admin/news/drafts" ? {color: "#2E9C3E", border: "1px solid #2E9C3E"} : {}}
                    >
                        {Drafts}
                    </button>
                </Link>
                <Link to="/admin/news/review">
                    <button 
                        className={theme === "dark" ? "header__button background-dark" : "header__button background-light"}
                        style={pathname === "/admin/news/review" ? {color: "#2E9C3E", border: "1px solid #2E9C3E"} : {}}
                    >
                        {Review}
                    </button>
                </Link>
                <Link to="/admin/news/published">
                    <button 
                        className={theme === "dark" ? "header__button background-dark" : "header__button background-light"}
                        style={pathname === "/admin/news/published" ? {color: "#2E9C3E", border: "1px solid #2E9C3E"} : {}}
                    >
                        {Published}
                    </button>
                </Link>
            </div>
            <Routes>
                <Route path="/" element={<NewsCreate />}/>
                <Route path="/drafts*" element={<NewsDrafts setNewsID={setNewsID} setNewsEditDraftsID={setNewsEditDraftsID}/>} />
                <Route path="/review*" element={<NewsReview setNewsID={setNewsID} setNewsEditReviewID={setNewsEditReviewID}/>} />
                <Route path="/published*" element={<NewsPublished setNewsID={setNewsID} setNewsEditPublishID={setNewsEditPublishID}/>} />
                <Route path={`/page/${newsID}`} element={<NewsPage newsID={newsID} />} />
                <Route path={`/edit-drafts/page/${newsEditDraftsID}`} element={<NewsEditDraft newsID={newsEditDraftsID} />} />
                <Route path={`/edit-review/page/${newsEditReviewID}`} element={<NewsEditReview newsID={newsEditReviewID} />} />
                <Route path={`/edit-publish/page/${newsEditPublishID}`} element={<NewsEditPublish newsID={newsEditPublishID} />} />
            </Routes>
        </section>
    )
}

export default AdminNews;
import React from 'react';
import {useSelector} from "react-redux";
import { Routes, Route} from "react-router-dom"

import NewsNavigation from './NewsNavigation/NewsNavigation';
import CurrentRateBlock from './CurrentRateBlock/CurrentRateBlock';
import StatisticsBlock from './StatisticsBlock/StatisticsBlock';
import MarketNews from './MarketNews/MarketNews';
import NewsBlock from './NewsBlock/NewsBlock';
import NewsPage from './NewsPage/NewsPage';

import './News.scss'

function News() {
    const theme = useSelector((store) => store.theme.theme);
    const language = useSelector((store) => store.language.language);
    
    return (
        <section className={theme === 'dark' ? 'news news-dark' : 'news news-light'}>
            <Routes>
                <Route path="/" element={
                    <>
                        <div className='news-block'>
                            <CurrentRateBlock/>
                            <StatisticsBlock/>
                        </div>
                        <NewsNavigation/>
                        <Routes>
                            <Route path="/blockchain" element={<></>} />
                            <Route path="/nft" element={<></>} />
                            <Route path="/defi" element={<></>} />
                            <Route path="/business" element={<></>} />
                            <Route path="/gamefi" element={<></>} />
                        </Routes>
                        <NewsBlock/>
                        <MarketNews/>
                    </>
                } />
                <Route path="/1" element={<NewsPage />} />
            </Routes>

        </section>
    );
}

export default News;
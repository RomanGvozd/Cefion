import React, {useState} from 'react';
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

    const [newsID, setNewsID] = useState('');
    
    return (
        <section className={theme === 'dark' ? 'news news-dark' : 'news news-light'}>
            <Routes>
                <Route path="/*" element={
                    <>
                        <div className='news-block'>
                            <CurrentRateBlock/>
                            <StatisticsBlock/>
                        </div>
                        <NewsNavigation/>
                        <Routes>
                            <Route path="/" element={<>
                                <NewsBlock setNewsID={setNewsID}/>
                                <MarketNews setNewsID={setNewsID} type="AllNews"/>
                            </>} />
                            <Route path="/blockchain" element={<MarketNews setNewsID={setNewsID} type="Blockchain"/>} />
                            <Route path="/nft" element={<MarketNews setNewsID={setNewsID} type="NFT"/>} />
                            <Route path="/defi" element={<MarketNews setNewsID={setNewsID} type="DeFI"/>} />
                            <Route path="/business" element={<MarketNews setNewsID={setNewsID} type="Business"/>} />
                            <Route path="/gamefi" element={<MarketNews setNewsID={setNewsID} type="GameFi"/>} />
                        </Routes>
                    </>
                }/>
                <Route path={`/page/${newsID}`} element={<NewsPage newsID={newsID}/>} />
            </Routes>

        </section>
    );
}

export default News;
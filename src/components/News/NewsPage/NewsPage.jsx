import React from 'react';

import NewsPageContent from './NewsPageContent/NewsPageContent';
import NewsPageFooter from './NewsPageFooter/NewsPageFooter';
import NewsPageSearch from './NewsPageSearch/NewsPageSearch';

import './NewsPage.scss'

function News() {
    
    return (
        <>
            <NewsPageContent/>
            <NewsPageFooter/>
            <NewsPageSearch/>
        </>
    );
}

export default News;
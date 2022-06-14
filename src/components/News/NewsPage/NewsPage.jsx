import React from 'react';

import NewsPageContent from './NewsPageContent/NewsPageContent';
import NewsPageFooter from './NewsPageFooter/NewsPageFooter';
import NewsPageSearch from './NewsPageSearch/NewsPageSearch';

import './NewsPage.scss'

function NewsPage({newsID, setNewsID}) {
    
    return (
        <>
            <NewsPageContent newsID={newsID}/>
            <NewsPageFooter newsID={newsID}/>
            <NewsPageSearch setNewsID={setNewsID}/>
        </>
    );
}

export default NewsPage;
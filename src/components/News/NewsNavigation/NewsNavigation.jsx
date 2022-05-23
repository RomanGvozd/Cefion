import React from 'react';
import {useSelector} from "react-redux";
import {Link, useLocation} from "react-router-dom";
import routs from "../../../common/routs.config";

import './NewsNavigation.scss'

function NewsNavigation() {
    const theme = useSelector((store) => store.theme.theme);
    const language = useSelector((store) => store.language.language);

    const {pathname} = useLocation();

    const scrollTop = () => {
        window.scrollTo(0, 0);
    }

    return (
        <nav className='news-navigation'>
            <Link className='news-navigation__button' to="/news" onClick={scrollTop}>
                <button 
                    className={theme === 'dark' ? 'news-navigation__button-dark' : 'news-navigation__button-light'}
                    style={pathname === "/news" ? {color: "#2E9C3E", border: '1px solid #2E9C3E'} : {}}
                >
                    {language === "RU"
                    ? "ВСЕ новости"
                    : "All news"
                    }
                </button>
            </Link>
            <Link className='news-navigation__button' to="/news/blockchain" onClick={scrollTop}>
                <button 
                    className={theme === 'dark' ? 'news-navigation__button-dark' : 'news-navigation__button-light'}
                    style={pathname === "/news/blockchain" ? {color: "#2E9C3E", border: '1px solid #2E9C3E'} : {}}
                >
                    Blockchain
                </button>
            </Link>
            <Link className='news-navigation__button' to="/news/nft" onClick={scrollTop}>
                <button 
                    className={theme === 'dark' ? 'news-navigation__button-dark' : 'news-navigation__button-light'}
                    style={pathname === "/news/nft" ? {color: "#2E9C3E", border: '1px solid #2E9C3E'} : {}}
                >
                    NFT
                </button>
            </Link>
            <Link className='news-navigation__button' to="/news/defi" onClick={scrollTop}>
                <button 
                    className={theme === 'dark' ? 'news-navigation__button-dark' : 'news-navigation__button-light'}
                    style={pathname === "/news/defi" ? {color: "#2E9C3E", border: '1px solid #2E9C3E'} : {}}
                >
                    DeFI
                </button>
            </Link>
            <Link className='news-navigation__button' to="/news/business" onClick={scrollTop}>
                <button 
                    className={theme === 'dark' ? 'news-navigation__button-dark' : 'news-navigation__button-light'}
                    style={pathname === "/news/business" ? {color: "#2E9C3E", border: '1px solid #2E9C3E'} : {}}
                >
                    Business
                </button>
            </Link>
            <Link className='news-navigation__button' to="/news/gamefi" onClick={scrollTop}>
                <button 
                    className={theme === 'dark' ? 'news-navigation__button-dark' : 'news-navigation__button-light'}
                    style={pathname === "/news/gamefi" ? {color: "#2E9C3E", border: '1px solid #2E9C3E'} : {}}
                >
                    GameFi
                </button>
            </Link>
        </nav>
    );
}

export default NewsNavigation;
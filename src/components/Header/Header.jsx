import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import { Link, useLocation } from "react-router-dom";
import {content} from './Header.config';
import optionsNav from './optionsNav.array';

import Select from '../Select/Select';
import SelectNav from '../SelectNav/SelectNav';

import {changeTheme} from '../../common/store/theme/actions';
import {changeLanguage} from '../../common/store/language/actions';

import './Header.scss';
import './HeaderAdaptive.scss';

function Header({openModalLogin}) {
    let lastScroll = 0
    const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop

    const [hide, setHide] = useState(0);
    const {pathname} = useLocation();
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (scrollPosition() > lastScroll) {
                setHide(-100)
                setIsActive(false)        
            } else if (scrollPosition() < lastScroll) {
                setHide(0)
            }     
            lastScroll = scrollPosition()
        })
    }, [])

    const theme = useSelector((store) => store.theme.theme);
    const language = useSelector((store) => store.language.language);
    const dispatch = useDispatch();

    const [selected, setSelected] = useState("RU");
    const options = ["RU", "EN",];

    const [selectedNav, setSelectedNav] = useState({
        titleRU: "Функции приложения",
        titleEN: "Application Features",
    },)

    const {Roadmap, News, AboutUs} = content[language]

    const handleTheme = () => {
        if (theme === "dark") {
            dispatch(changeTheme('light'))
        } else {
            dispatch(changeTheme('dark'))
        }
    }

    const handleLanguage = (option) => {
        dispatch(changeLanguage(option))
    }

    const [nav, setNav] = useState(false);

    const scrollTop = () => {
        window.scrollTo(0, 0);
    }

    return (
        <>
            <header      
                className={theme === 'dark' ? 'header header-dark' : 'header header-light'}
                style={{transform: `translateY(${hide}%)`}}
                >
                <div className="header__logo-wrapper">
                    <Link to="/" onClick={scrollTop}>
                        <div className='header__logo'>
                        </div>
                    </Link>
                    <div className='nav__buuton-wrapper'>
                        <div className='nav__button' onClick={()=>setNav(true)}>
                            <span className='nav__button-span'></span>
                        </div>
                    </div>
                </div>

                <nav className='header__nav'>
                    <div 
                        className={nav ? 'nav__list nav__list-open' : 'nav__list'}
                        style={theme === "dark" ? {backgroundColor: "black"} : {backgroundColor: "white"}}
                    >
                            {nav 
                            ? <div className='nav__buuton-wrapper'>
                                <div className='nav__button-close' onClick={()=>setNav(false)}></div>
                            </div> 
                            : <></>
                            }
                            <div className={theme === 'dark' ? 'list__item-dark' : 'list__item-light'}>
                                <SelectNav
                                    selected={selectedNav} 
                                    setSelected={setSelectedNav}
                                    options={optionsNav}
                                    theme={theme}
                                    language={language}
                                    setIsActive={setIsActive}
                                    isActive={isActive}
                                />
                            </div>
                            <Link 
                                className={theme === 'dark' ? 'list__item-dark' : 'list__item-light'} 
                                to="/Roadmap"
                                style={pathname === "/Roadmap" ? {color: "#2E9C3E"} : {}}
                                onClick={()=>{
                                    setNav(false) 
                                    scrollTop()
                                    setIsActive(false)}
                                }
                            >
                                {Roadmap}
                            </Link>
                            <Link 
                                className={theme === 'dark' ? 'list__item-dark' : 'list__item-light'} 
                                to="/news" 
                                style={pathname === "/news" ? {color: "#2E9C3E"} : {}}
                                onClick={()=>{
                                    setNav(false) 
                                    scrollTop()
                                    setIsActive(false)}
                                }
                            >
                                {News}
                            </Link>
                            <Link 
                                className={theme === 'dark' ? 'list__item-dark' : 'list__item-light'} 
                                to="/about" 
                                style={pathname === "/about" ? {color: "#2E9C3E"} : {}}
                                onClick={()=>{
                                    setNav(false) 
                                    scrollTop()
                                    setIsActive(false)}
                                }
                            >
                                {AboutUs}
                            </Link>   
                    </div>
                </nav>
                <div className='header__setting'>
                    <button className='header__login' onClick={openModalLogin}>
                        {language === 'RU' ? 'Войти' : 'Log in'}
                    </button>
                    <button className={theme === 'dark' ? 'setting__theme setting__theme-dark' : 'setting__theme setting__theme-light'} onClick={handleTheme}>     
                        <div 
                            className={theme === 'dark' ? 'setting__theme-icon-dark' : 'setting__theme-icon-light'}
                        >
                        </div>
                    </button>
                    <Select
                        selected={selected} 
                        setSelected={setSelected}
                        options={options}
                        theme={theme}
                        handleLanguage={handleLanguage}
                    />
                </div>
            </header>
        </>

    );
}

export default Header;



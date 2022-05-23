import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import { Link } from "react-router-dom";

import Select from '../Select/Select';

import {changeTheme} from '../../common/store/theme/actions';
import {changeLanguage} from '../../common/store/language/actions';


import './Header.scss';
import './HeaderAdaptive.scss';


function Header({openModalLogin}) {
    let lastScroll = 0
    const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop
    const [hide, setHide] = useState(0);

    useEffect(() => {
        window.addEventListener('scroll', () => {

            if (scrollPosition() > lastScroll) {
                setHide(-100)
                
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

    return (
        <>
            <header      
                className={theme === 'dark' ? 'header header-dark' : 'header header-light'}
                style={{transform: `translateY(${hide}%)`}}
                >
                <Link to="/">
                    <div className='header__logo'>

                    </div>
                </Link>
                <nav className='header__nav'>

                </nav>
                <div className='header__setting'>
                    <button className='header__login' onClick={openModalLogin}>
                        {language === 'RU' ? 'Войти' : 'Log in'}
                    </button>
                    <button className='setting__theme' onClick={handleTheme}>     
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



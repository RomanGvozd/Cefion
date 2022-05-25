import React, {useState} from 'react'

import './SelectNav.scss';

const SelectNav = ({selected, options, theme, language}) => {

    const [isActive, setIsActive] = useState(false);

    const handleScroll = (id) => {
        setIsActive(false)
        document.id.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    }

    return(
        <div className={ theme === 'dark' ? 'select-nav select-dark' : 'select-nav select-light'}>
            <div 
            className={isActive ? 'select-nav__button select-nav__button-active' : 'select-nav__button'}
            onClick={() => setIsActive(!isActive)}
            >
                {language === "RU"
                ? <p>{selected.titleRU}</p>
                : <p>{selected.titleEN}</p>
                }   
                <div 
                    className={theme === 'dark' ? 'selectArrow-dark' : 'selectArrow-light'}
                    style={isActive ? {transform: `rotate(180deg)`} : {transform: `rotate(0deg)`}}
                >    
                </div>
            </div>
            {isActive && (
                <div className={theme === 'dark' ? 'select__content select__content-dark' : 'select__content select__content-light'}>
                    {options.map(option => (
                        <a href={"#" + option.id}
                        className='content__item'
                        onClick={() =>handleScroll(option.id)}
                        >
                            {language === "RU"
                            ? <p className={theme === "dark" ? "item__text-dark" : "item__text-light"}>{option.titleRU}</p>
                            : <p className={theme === "dark" ? "item__text-dark" : "item__text-light"}>{option.titleEN}</p>
                            }   
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
}

export default SelectNav;
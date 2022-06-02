import React, {useState} from 'react'

import './Select.scss';

const Select = ({selected, setSelected, options, theme, handleLanguage}) => {

    const [isActive, setIsActive] = useState(false);

    return(
        <div className={ theme === 'dark' ? 'select select-dark' : 'select select-light'}>
            <div 
            className={isActive ? 'select__button select__button-active' : 'select__button'}
            style={theme === "dark" 
            ? {background: `rgba(255, 255, 255, 0.05)`, border: `1px solid #424246`}
            : {background: `rgba(0, 0, 0, 0.05)`, border: `1px solid #D6D6D6`}
            }
            onClick={() => setIsActive(!isActive)}
            >
                {selected}
                <div 
                    className={theme === 'dark' ? 'selectArrow-dark' : 'selectArrow-light'}
                    style={isActive ? {transform: `rotate(180deg)`} : {transform: `rotate(0deg)`}}
                >    
                </div>
            </div>
            {isActive && (
                <div className={theme === 'dark' ? 'select__content select__content-dark' : 'select__content select__content-light'}>
                    {options.map(option => (
                        <div 
                        className='content__item'
                        onClick={
                            () => {
                                setIsActive(false)
                                setSelected(option)
                                handleLanguage(option)
                            }
                        }
                        >
                        {option}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Select;
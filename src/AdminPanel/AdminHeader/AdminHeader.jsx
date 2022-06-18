import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import Select from '../../components/Select/Select';

import {changeTheme} from '../../common/store/theme/actions';
import {changeLanguage} from '../../common/store/language/actions';

import './AdminHeader.scss';

function AdminHeader() {
    const currentUser = useSelector((store) => store.currentUser);
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

    return(
    <header className="admin__header">
        <div className="header-wrapper">
            <h2 className="header__title">
                
            </h2>
            <div className="header__content">
                <input 
                className={theme === "dark" ? "content__input-dark" : "content__input-light"} 
                placeholder={language === "RU" ? "Поиск сообщений или пользователей" : "Search for messages or users"}
                type="text" 
                />
                <Select
                    selected={selected} 
                    setSelected={setSelected}
                    options={options}
                    theme={theme}
                    handleLanguage={handleLanguage}
                />
                <button className='setting__theme' onClick={handleTheme}>     
                    <div 
                        className={theme === 'dark' ? 'setting__theme-icon-dark' : 'setting__theme-icon-light'}
                    >
                    </div>
                </button>
                <div className="header__user">
                    <img className="user__image" src={require(`./images/user.png`)} alt="" />
                    <div className="user__info">
                        <p className={theme === "dark" ? "info__name-dark" : "info__name-light"}>
                            {currentUser.username}
                        </p>
                        <p className="info__tagname">
                            {currentUser.tagName}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </header>
    )
}

export default AdminHeader;
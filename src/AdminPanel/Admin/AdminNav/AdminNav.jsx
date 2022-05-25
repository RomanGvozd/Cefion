import React from "react";
import {useSelector} from "react-redux";
import { Link, useLocation } from "react-router-dom";

import './AdminNav.scss';

function AdminNav() {
    const theme = useSelector((store) => store.theme.theme);
    const language = useSelector((store) => store.language.language);

    const {pathname} = useLocation();

    return(
        <aside className={theme === "dark" ? "admin__nav admin__nav-dark" : "admin__nav admin__nav-light"}>
            <div className="nav__header">
                <div className="nav__image">
                </div>
            </div>
            <div className="nav__management">
                <h4 className="management__title">
                    {language === "RU"
                    ? "Управление Cefion"
                    : "Cefion Management"
                    }
                </h4>
                <nav className="management__nav">
                    <Link to="/admin/roles">
                        <button 
                            className={theme === "dark" ? "nav__button nav__button-dark" : "nav__button nav__button-light"}
                            style={pathname === "/admin/roles" ? {color: "#2E9C3E", border: "1px solid #2E9C3E"} : {}}
                        >
                            {language === "RU"
                            ? "Роли"
                            : "Roles"
                            }
                        </button>
                    </Link>
                    <Link to="/admin/landing">
                        <button 
                            className={theme === "dark" ? "nav__button nav__button-dark" : "nav__button nav__button-light"}
                            style={pathname === "/admin/landing" ? {color: "#2E9C3E", border: "1px solid #2E9C3E"} : {}}
                        >
                            Landing
                        </button>
                    </Link>
                    <Link to="/admin/groups">
                        <button 
                            className={theme === "dark" ? "nav__button nav__button-dark" : "nav__button nav__button-light"}
                            style={pathname === "/admin/groups" ? {color: "#2E9C3E", border: "1px solid #2E9C3E"} : {}}
                        >
                            {language === "RU"
                            ? "Группы"
                            : "Groups"
                            }
                        </button>
                    </Link>
                    <Link to="/admin/newc">
                        <button 
                            className={theme === "dark" ? "nav__button nav__button-dark" : "nav__button nav__button-light"}
                            style={pathname === "/admin/newc" ? {color: "#2E9C3E", border: "1px solid #2E9C3E"} : {}}
                        >
                            {language === "RU"
                            ? "Новости"
                            : "Newc"
                            }
                        </button>
                    </Link>
                    <Link to="/admin/calendar">
                        <button 
                            className={theme === "dark" ? "nav__button nav__button-dark" : "nav__button nav__button-light"}
                            style={pathname === "/admin/calendar" ? {color: "#2E9C3E", border: "1px solid #2E9C3E"} : {}}
                        >
                            {language === "RU"
                            ? "Календарь"
                            : "Calendar"
                            }
                        </button>
                    </Link>
                    <Link to="/admin/Statistics">
                        <button
                            className={theme === "dark" ? "nav__button nav__button-dark" : "nav__button nav__button-light"}
                            style={pathname === "/admin/Statistics" ? {color: "#2E9C3E", border: "1px solid #2E9C3E"} : {}}
                        >
                            {language === "RU"
                            ? "Статистика"
                            : "Statistics"
                            }
                        </button>
                    </Link>
                </nav>
                <button className={theme === "dark" ? "button__end button__end-dark" : "button__end button__end-light"}>
                    {language === "RU"
                    ? "Завершить сессию"
                    : "End session"
                    }
                </button>
            </div>
        </aside>
    )
}

export default AdminNav;
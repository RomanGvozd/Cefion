import React from "react";
import {useSelector} from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { content } from "./AdminNav.config";

import './AdminNav.scss';

function AdminNav() {
    const theme = useSelector((store) => store.theme.theme);
    const language = useSelector((store) => store.language.language);

    const {pathname} = useLocation();

    const {CefionManagement, Roles, Landing, Groups, Newc, Calendar, Statistics, EndSession} = content[language];

    return(
        <aside className={theme === "dark" ? "admin__nav admin__nav-dark" : "admin__nav admin__nav-light"}>
            <div className="nav__header">
                <div className="nav__image">
                </div>
            </div>
            <div className="nav__management">
                <h4 className="management__title">
                    {CefionManagement}
                </h4>
                <nav className="management__nav">
                    <Link to="/admin/roles">
                        <button 
                            className={theme === "dark" ? "nav__button nav__button-dark" : "nav__button nav__button-light"}
                            style={pathname === "/admin/roles" ? {color: "#2E9C3E", border: "1px solid #2E9C3E"} : {}}
                        >
                            {Roles}
                        </button>
                    </Link>
                    <Link to="/admin/landing">
                        <button 
                            className={theme === "dark" ? "nav__button nav__button-dark" : "nav__button nav__button-light"}
                            style={pathname === "/admin/landing" ? {color: "#2E9C3E", border: "1px solid #2E9C3E"} : {}}
                        >
                            {Landing}
                        </button>
                    </Link>
                    <Link to="/admin/groups">
                        <button 
                            className={theme === "dark" ? "nav__button nav__button-dark" : "nav__button nav__button-light"}
                            style={pathname === "/admin/groups" ? {color: "#2E9C3E", border: "1px solid #2E9C3E"} : {}}
                        >
                            {Groups}
                        </button>
                    </Link>
                    <Link to="/admin/news">
                        <button 
                            className={theme === "dark" ? "nav__button nav__button-dark" : "nav__button nav__button-light"}
                            style={pathname === "/admin/news" ? {color: "#2E9C3E", border: "1px solid #2E9C3E"} : {}}
                        >
                            {Newc}
                        </button>
                    </Link>
                    <Link to="/admin/calendar">
                        <button 
                            className={theme === "dark" ? "nav__button nav__button-dark" : "nav__button nav__button-light"}
                            style={pathname === "/admin/calendar" ? {color: "#2E9C3E", border: "1px solid #2E9C3E"} : {}}
                        >
                            {Calendar}
                        </button>
                    </Link>
                    <Link to="/admin/Statistics">
                        <button
                            className={theme === "dark" ? "nav__button nav__button-dark" : "nav__button nav__button-light"}
                            style={pathname === "/admin/Statistics" ? {color: "#2E9C3E", border: "1px solid #2E9C3E"} : {}}
                        >
                            {Statistics}
                        </button>
                    </Link>
                </nav>
                <Link to="/">
                    <button className={theme === "dark" ? "button__end button__end-dark" : "button__end button__end-light"}>
                        {EndSession}
                    </button>
                </Link>
            </div>
        </aside>
    )
}

export default AdminNav;
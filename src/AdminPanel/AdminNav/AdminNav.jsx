import React, {useState} from "react";
import {useSelector} from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { content } from "./AdminNav.config";
import { buttons } from "./adminNav.buttons";

import './AdminNav.scss';

function AdminNav({handleShow, show}) {
    const currentUser = useSelector((store) => store.currentUser);
    const theme = useSelector((store) => store.theme.theme);
    const language = useSelector((store) => store.language.language);

    const {pathname} = useLocation();

    let filteredRoles = currentUser.roles.includes("admin") || currentUser.roles.includes("super_admin")

    let filteredButtons = buttons

    if (!filteredRoles) {
        filteredButtons = buttons.filter((item)=> item.link === "/admin/news")
    }

    const {CefionManagement, Cefion, EndSession} = content[language];

    return(
        <aside 
            className={theme === "dark" ? "admin__nav admin__nav-dark" : "admin__nav admin__nav-light"}
            style={show ? {width: `20%`, padding: `0 1.87rem`,} : {width: `7%`, padding: `0 1rem`}}
        >
            <div className="nav__header">
                <div className="header__image">
                    <div className="image">
                    </div>
                    {show && <div className="text"></div>}

                </div>
                <div 
                    className={show ? "header__button" : "header__button header__button-active"} 
                    onClick={handleShow}
                >
                </div>
            </div>
            <div className="nav__management">
                {show 
                ?<h4 className={show ? "management__title" : "management__title management__title-active"}>
                    {CefionManagement}
                </h4>
                :<h4 className={show ? "management__title" : "management__title management__title-active"}>
                </h4>
                }
                <nav className="management__nav">
                    {filteredButtons.map((button)=>(
                    <Link to={button.link} key={button.id}>
                        <button 
                            className={theme === "dark" ? "nav__button background-dark" : "nav__button background-light"}
                            style={pathname === `${button.link}` ? {color: "#2E9C3E", border: "1px solid #2E9C3E"} : {}}
                            // style={show ? {} : {justifyContent: `center`}}
                            
                        >
                            {theme === "dark"
                            ? <img className="button__image" src={require(`${button.imageDark}`)} alt="" />
                            : <img className="button__image" src={require(`${button.imageLight}`)} alt="" />
                            }

                            {language === "RU" && show ? <p className="button__text">{button.textRU}</p> : <></>}
                            {language === "EN" && show ? <p className="button__text">{button.textEN}</p> : <></>}
                        </button>
                    </Link>
                    ))}
                </nav>
                <Link to="/">
                    <button className={theme === "dark" ? "button__end background-dark" : "button__end background-light"}>
                        {theme === "dark"
                        ? <img src={require(`./imageButton/endDark.svg`).default} alt="" />
                        : <img src={require(`./imageButton/endLight.svg`).default} alt="" />
                        }
                        { show && <p className="button__text">{EndSession}</p>}
                    </button>
                </Link>
            </div>
        </aside>
    )
}


export default AdminNav;
import React, {useState} from "react";
import {useSelector} from "react-redux";
import { Link, Routes, Route, useLocation } from "react-router-dom";

import GroupsCreate from "./GroupsCreate/GroupsCreate";
import GroupList from "./GroupList/GroupList";

import './AdminGroups.scss';

function AdminGroups() {
    const theme = useSelector((store) => store.theme.theme);
    const language = useSelector((store) => store.language.language);

    const {pathname} = useLocation();

    return(
        <section className="admin-groups">
            <div className="admin-groups__header">
                <Link to="/admin/groups">
                    <button 
                        className={theme === "dark" ? "header__button background-dark" : "header__button background-light"}
                        style={pathname === "/admin/groups" ? {color: "#2E9C3E", border: "1px solid #2E9C3E"} : {}}
                    >
                        {language === "RU"
                        ? "Создать"
                        : "Create"
                        }
                    </button>
                </Link>
                <Link to="/admin/groups/edit">
                    <button 
                        className={theme === "dark" ? "header__button background-dark" : "header__button background-light"}
                        style={pathname === "/admin/groups/edit" ? {color: "#2E9C3E", border: "1px solid #2E9C3E"} : {}}
                    >
                        {language === "RU"
                        ? "Редактировать"
                        : "Edit"
                        }
                    </button>
                </Link>
            </div>
            <Routes>
                <Route path="/" element={<GroupsCreate />} />
                <Route path="/edit" element={<GroupList />} />
            </Routes>
        </section>
    )
}

export default AdminGroups;
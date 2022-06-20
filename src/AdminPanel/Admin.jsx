import React, {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import { Routes, Route } from "react-router-dom";

import AdminHeader from "./AdminHeader/AdminHeader";
import AdminNav from "./AdminNav/AdminNav";
import Login from "./Login/Login";

import Roles from "./Roles/Roles";
import AdminLanding from "./AdminLanding/AdminLanding";
import AdminGroups from "./AdminGroups/AdminGroups";
import AdminNews from "./AdminNews/AdminNews";

import { addItem, loggout } from "../common/store/currentUser/actions";
import { getUserName,isLoggedUser} from "../common/store/currentUser/selectors"
import { accountLogin } from "../common/api/auth.api";

import { api } from "../common/api/api";

import './Admin.scss';

function Admin() {
    const theme = useSelector((store) => store.theme.theme);
    const language = useSelector((store) => store.language.language);
    const username = useSelector(getUserName);
    const isLogged = useSelector(isLoggedUser);
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(false);
    const [show, setShow] = useState(true);

    useEffect(()=>{
        setIsLoading(true);
        api.get('/api/auth')
        .then(res => {
            console.log(res)
        }).catch(()=>{
            localStorage.setItem("tokens","")
        }).finally(()=>{
            setIsLoading(false);
        })
    },[]);

    const handleShow = () => {
        setShow(!show)
    }

    if(isLoading){
        return "Loading..."
    }

    if(!isLogged || !username){
        return <Login/>
    }

    return(
                <main className={theme === "dark" ? "admin__main admin__main-dark" : "admin__main admin__main-light"}>
                    <AdminNav handleShow={handleShow} show={show}/>
                    <div 
                        className="admin__content"
                        style={show ? {width: `80%`,} : {width: `93%`,}}
                    >
                        <AdminHeader/>
                        <section 
                            className="anim__section"
                        >
                            <Routes>
                                <Route path="/roles" element={<Roles />} />
                                <Route path="/landing*" element={<AdminLanding />} />
                                <Route path="/groups*" element={<AdminGroups />} />
                                <Route path="/news*" element={<AdminNews />} />
                            </Routes>
                        </section>
                    </div>
                </main>


    )
}

export default Admin;
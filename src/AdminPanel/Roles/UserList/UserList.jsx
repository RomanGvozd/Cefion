import React, {useEffect} from "react";
import { useSelector } from "react-redux";
import { content } from "./UserList.config";
import { UserListArr } from "./UserList.array";
import axios from 'axios'

import "./UserList.scss";

function UserList() {

    const getUsers = async () => {
        await axios.get('/api/roles/role/admin')
        .then(res => {
            console.log(res.data)
        })
    }

    useEffect(()=> {
        getUsers()
    }, [])

    const theme = useSelector((store) => store.theme.theme);
    const language = useSelector((store) => store.language.language);

    const {Administration, Users} = content[language];

    const filterUser = UserListArr.filter( (user)=> user.roles[0] === "User")
    const filterAdministration = UserListArr.filter( (user)=> user.roles[0] !== "User")

    return(
        <div className={theme === "dark" ? "user-list user-list-dark" : "user-list user-list-light"}>
            <div className="list__wrapper">
                <h2 className="List__title">
                    {Administration}
                </h2>
                <div className="list">
                    {filterAdministration.map((user)=>(
                        <div 
                            className={theme === "dark" ? "list__item background-dark" : "list__item background-light"} 
                            key={user.id}
                        >
                            <div className="item__roles">
                                {user.roles.map((role, index)=>(
                                    <p className="role" key={index}>
                                        {role}
                                    </p>
                                ))}
                            </div>
                            <div className="item__info">
                                <p className={theme === "dark" ? "item__tagname-dark" : "item__tagname-light"}>
                                    {user.tagName}
                                </p>
                                <div className={theme === "dark" ? "item__image-dark" : "item__image-light"}>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="list__wrapper">
                <h2 className="List__title">
                    {Users}
                </h2>
                <div className="list">
                    {filterUser.map((user)=>(
                        <div 
                            className={theme === "dark" ? "list__item background-dark" : "list__item background-light"} 
                            key={user.id}
                        >
                            <div className="item__roles">
                                {user.roles.map((role, index)=>(
                                    <p className="role" key={index}>
                                        {role}
                                    </p>
                                ))}
                            </div>
                            <div className="item__info">
                                <p className={theme === "dark" ? "item__tagname-dark" : "item__tagname-light"}>
                                    {user.tagName}
                                </p>
                                <div className={theme === "dark" ? "item__image-dark" : "item__image-light"}>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default UserList;
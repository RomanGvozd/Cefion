import React, {useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { content } from "./UserList.config";
import Loader from "../../../Loader/Loader";

import { api } from "../../../common/api/api";
import { setUsers } from "../../../common/store/users/actions";

import "./UserList.scss";

function UserList() {

    const dispatch = useDispatch()

    const getUsers = async () => {
        setLoading(true)
        await api.get('/api/roles/page/1')
        .then(res => {
            console.log(res.data)
            dispatch(setUsers(res.data))
        }).catch(()=>{
            setLoading(false)
        })
        setTimeout(() => {
            setLoading(false)
        }, 1500);
    }

    useEffect(()=> {
        getUsers()
    }, [])

    const currentUser = useSelector((store) => store.currentUser);
    let filteredRoles = currentUser.roles.includes("super_admin")

    const users = useSelector((store) => store.users);
    const theme = useSelector((store) => store.theme.theme);
    const language = useSelector((store) => store.language.language);

    const [loading, setLoading] = useState(false)

    const {Administration, Users} = content[language];

    const filterUser = users.filter( (user)=> user.roles.includes("user"))
    const filterAdministration = users.filter( (user)=> !user.roles.includes("user"))

    return(
        <div className={theme === "dark" ? "user-list user-list-dark" : "user-list user-list-light"}>
            <div className="list__wrapper">
                <h2 className="List__title">
                    {Administration}
                </h2>
                <div className="list">
                    {loading 
                    ? <Loader/>
                    : <>
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
                                    {filteredRoles &&
                                        <div className={theme === "dark" ? "item__image-dark" : "item__image-light"}>
                                        </div>
                                    }
                                </div>
                            </div>
                        ))}
                    </>
                    }

                </div>
            </div>
            <div className="list__wrapper">
                <h2 className="List__title">
                    {Users}
                </h2>
                <div className="list">
                    {loading 
                    ? <Loader/>
                    : <>
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
                                    {filteredRoles &&
                                        <div className={theme === "dark" ? "item__image-dark" : "item__image-light"}>
                                        </div>
                                    }

                                </div>
                            </div>
                        ))}
                    </>
                    }
                </div>
            </div>
        </div>
    )
}

export default UserList;
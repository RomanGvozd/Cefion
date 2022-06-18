import React from "react";
import {useSelector} from "react-redux";

import CreateAccount from "./CreateAccount/CreateAccount";
import IssueRole from "./IssueRole/IssueRole";
import ChangeRole from "./ChangeRole/ChangeRole";
import UserList from "./UserList/UserList";

import './Roles.scss';

function Roles() {
    const currentUser = useSelector((store) => store.currentUser);
    let filteredRoles = currentUser.roles.includes("superadmin")

    return(
        <section className="admin-roles" style={!filteredRoles ? {justifyContent: `space-between`,} : {}}>
            <CreateAccount/>
            {filteredRoles && <IssueRole/>}
            {filteredRoles && <ChangeRole/>}
            <UserList/>
        </section>
    )
}

export default Roles;
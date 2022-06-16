import React from "react";

import CreateAccount from "./CreateAccount/CreateAccount";
import IssueRole from "./IssueRole/IssueRole";
import ChangeRole from "./ChangeRole/ChangeRole";
import UserList from "./UserList/UserList";

import './Roles.scss';

function Roles() {
    return(
        <section className="admin-roles">
            <CreateAccount/>
            <IssueRole/>
            <ChangeRole/>
            <UserList/>
        </section>
    )
}

export default Roles;
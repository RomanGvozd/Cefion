import React from "react";

import CreateAccount from "./CreateAccount/CreateAccount";
import IssueRole from "./IssueRole/IssueRole";

import './Roles.scss';

function Roles() {
    return(
        <section className="admin-roles">
            <CreateAccount/>
            <IssueRole/>
        </section>
    )
}

export default Roles;
import React from "react";
import {useSelector} from "react-redux";

import './ModalAlert.scss';

function ModalAlert({text, name}) {
    const theme = useSelector((store) => store.theme.theme);

    return(
        <div className={theme === "dark" ? "modal-alert background-dark" : "modal-alert background-light"}>
            <p className="modal-alert__text">{text} <span className="modal-alert__name">{name}</span></p>
        </div>
    )
}

export default ModalAlert;
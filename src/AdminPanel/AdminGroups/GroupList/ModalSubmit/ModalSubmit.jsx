import React from "react";
import {useSelector, useDispatch} from "react-redux";
import { content } from "./ModalSibmit.config";

import './ModalSubmit.scss'

function ModalSubmit({group, setShow, handleDelete}) {
    const theme = useSelector((store) => store.theme.theme);
    const language = useSelector((store) => store.language.language);

    const {Confirm, Cancel} = content[language];

    return(
        <div className="modal-submit-background">
            <button 
                className="button-submit"
                onClick={()=>handleDelete(group.id)}
            >
                {Confirm}
            </button>
            <button 
                className={theme === "dark" ? "button-cancle background-dark" : "button-cancle background-light"} 
                onClick={()=>setShow(false)}
            >
                {Cancel}
            </button>
        </div>
    )
}

export default ModalSubmit;
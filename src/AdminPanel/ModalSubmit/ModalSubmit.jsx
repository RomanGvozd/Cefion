import React from "react";
import { useSelector } from "react-redux";
import { content } from "./ModalSubmit.config";

import "./ModalSubmit.scss";

function ModalSubmit({item, setShow, handleDelete,}) {
    const theme = useSelector((store) => store.theme.theme);
    const language = useSelector((store) => store.language.language);

    const {Confirm, Cancel} = content[language]

    return(
        <div className="modal-submit">
            <button 
                className="modal__confirm" 
                onClick={()=>{
                    handleDelete(item.id)
                    setShow(false)
                }}
            >
                {Confirm}
            </button>
            <button 
                className={theme === "dark" ? "modal__cancel background-dark" : "modal__cancel background-light"}
                onClick={()=>setShow(false)}
            >
                {Cancel}
            </button>
        </div>
    )
}

export default ModalSubmit;
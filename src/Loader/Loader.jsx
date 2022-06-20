import React from "react";
import { useSelector } from "react-redux";

import './Loader.scss';

function Loader() {
    const theme = useSelector((store) => store.theme.theme);
    return(
        <div className="loader-background">
            <div className={theme === "dark" ? "loader-dark" : "loader-light"}></div>
        </div>
    )
}

export default Loader;
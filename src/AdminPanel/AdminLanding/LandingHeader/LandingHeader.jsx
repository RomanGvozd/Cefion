import React from "react";
import {useSelector} from "react-redux";

import './LandingHeader.scss';

function LandingHeader() {
    const theme = useSelector((store) => store.theme.theme);
    const language = useSelector((store) => store.language.language);

    return(
        <section>
            header
        </section>
    )
}

export default LandingHeader;
import React from "react";
import {useSelector} from "react-redux";

import './LandingFooter.scss';

function LandingFooter() {
    const theme = useSelector((store) => store.theme.theme);
    const language = useSelector((store) => store.language.language);

    return(
        <section>
            footer
        </section>
    )
}

export default LandingFooter;
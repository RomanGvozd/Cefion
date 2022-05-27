import React from "react";
import {useSelector} from "react-redux";
import { Routes, Route } from "react-router-dom";

import LandingNav from "./LandingNav/LandingNav";
import LandingHeader from "./LandingHeader/LandingHeader";
import LandingFooter from "./LandingFooter/LandingFooter";
import LandingRoadmap from "./LandingRoadmap/LandingRoadmap";

import LandingMedia from "./landingMedia/LandingMedia";
import LandingAbout from "./LandingAbout/LandingAbout";
import LandingFAQs from "./LandingFAQs/LandingFAQs";

import './AdminLanding.scss';

function AdminLanding() {
    const theme = useSelector((store) => store.theme.theme);
    return(
        <section className={theme === "dark" ? "admin-landing admin-landing-dark" : "admin-landing admin-landing-light"}>
            <Routes>
                <Route path="/" element={<LandingNav />} />
                <Route path="/header" element={<LandingHeader />} />
                <Route path="/footer" element={<LandingFooter />} />
                <Route path="/roadmap" element={<LandingRoadmap />} />
                <Route path="/media" element={<LandingMedia />} />
                <Route path="/about" element={<LandingAbout />} />
                <Route path="/faqs" element={<LandingFAQs />} />
            </Routes>
        </section>
    )
}

export default AdminLanding;
import React from "react";
import { Helmet } from "react-helmet";
import DashboardMenu from '../assets/components/DashboardMenu';
import DashboardHeader from "../assets/components/DashboardHeader";
import JpgToPdfComponent from "../assets/components/JpgToPdfComponent";

function JpgToPdf() {
    return (
        <>
        <Helmet>
            <title>JPG To PDF - Fidar</title>
        </Helmet>
        <div className="dashboard-main-container">
            <DashboardMenu />
            <DashboardHeader />
            <div className="dash-others">
                <JpgToPdfComponent />
            </div>
        </div>
        </>
    )
}

export default JpgToPdf;
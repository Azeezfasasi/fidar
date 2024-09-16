import React from "react";
import { Helmet } from "react-helmet";
import DashboardMenu from '../assets/components/DashboardMenu';
import DashboardHeader from "../assets/components/DashboardHeader";
import PowerPointToPdfComponent from "../assets/components/PowerPointToPdfComponent";

function PowerPointToPdf() {
    return (
        <>
        <Helmet>
            <title>Powerpoint To PDF - Fidar</title>
        </Helmet>
        <div className="dashboard-main-container">
            <DashboardMenu />
            <DashboardHeader />
            <div className="dash-others">
                <PowerPointToPdfComponent />
            </div>
        </div>
        </>
    )
}

export default PowerPointToPdf;
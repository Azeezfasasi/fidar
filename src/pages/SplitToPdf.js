import React from "react";
import { Helmet } from "react-helmet";
import DashboardMenu from '../assets/components/DashboardMenu';
import DashboardHeader from "../assets/components/DashboardHeader";
import SplitToPdfComponent from "../assets/components/SplitToPdfComponent";

function SplitToPdf() {
    return (
        <>
        <Helmet>
            <title>Split To PDF - Fidar</title>
        </Helmet>
        <div className="dashboard-main-container">
            <DashboardMenu />
            <DashboardHeader />
            <div className="dash-others">
                <SplitToPdfComponent />
            </div>
        </div>
        </>
    )
}

export default SplitToPdf;
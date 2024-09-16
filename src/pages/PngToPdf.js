import React from "react";
import { Helmet } from "react-helmet";
import DashboardMenu from '../assets/components/DashboardMenu';
import DashboardHeader from "../assets/components/DashboardHeader";
import PngToPdfComponent from "../assets/components/PngToPdfComponent";

function PngToPdf() {
    return (
        <>
        <Helmet>
            <title>PNG To PDF - Fidar</title>
        </Helmet>
        <div className="dashboard-main-container">
            <DashboardMenu />
            <DashboardHeader />
            <div className="dash-others">
                <PngToPdfComponent />
            </div>
        </div>
        </>
    )
}

export default PngToPdf;
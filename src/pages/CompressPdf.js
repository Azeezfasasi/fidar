import React from "react";
import { Helmet } from "react-helmet";
import DashboardMenu from '../assets/components/DashboardMenu';
import DashboardHeader from "../assets/components/DashboardHeader";
import CompressPdfComponent from "../assets/components/CompressPdfComponent";

function CompressPdf() {
    return (
        <>
        <Helmet>
            <title>Compress PDF - Fidar</title>
        </Helmet>
        <div className="dashboard-main-container">
            <DashboardMenu />
            <DashboardHeader />
            <div className="dash-others">
                <CompressPdfComponent />
            </div>
        </div>
        </>
    )
}

export default CompressPdf;
import React from "react";
import { Helmet } from "react-helmet";
import DashboardMenu from '../assets/components/DashboardMenu';
import DashboardHeader from "../assets/components/DashboardHeader";

function Inbox() {
    return (
        <>
        <Helmet>
            <title>Starred - Fidar</title>
        </Helmet>
        <div className="dashboard-main-container">
            <DashboardMenu />
            <DashboardHeader />
            <div className="dashboard-main">
                
            </div>
        </div>
        </>
    )
}

export default Inbox;
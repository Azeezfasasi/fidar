import React from "react";
import { Helmet } from "react-helmet";
import '../assets/css/Dashboard.css';
import DashboardMenu from '../assets/components/DashboardMenu';
import DashboardHeader from "../assets/components/DashboardHeader";
import DashboardCard from "../assets/components/DashboardCard";
import Overview from "../assets/components/Overview";
import RecentFiles from "../assets/components/RecentFiles";
import DashRightSide from "../assets/components/DashRightSide";

function Dashboard() {
    return (
        <>
        <Helmet>
            <title>Dashboard - Fidar</title>
        </Helmet>
        <div className="dashboard-main-container">
            <DashboardMenu />
            <DashboardHeader />
            <div className="dashboard-main">
                <DashboardCard />
                <Overview />
                <RecentFiles />
            </div>
            <DashRightSide />
        </div>
        </>
    )
}

export default Dashboard;
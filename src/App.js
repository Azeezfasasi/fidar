import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { Helmet } from "react-helmet";
import Welcome from './pages/Welcome';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import ResetPassword from "./pages/ResetPassword";
import Inbox from "./pages/Inbox";
import Outbox from './pages/Outbox';
import Draft from './pages/Draft';
import Starred from './pages/Starred';
import MergePdf from "./pages/MergePdf";
import JpgToPdf from "./pages/JpgToPdf";
import PngToPdf from "./pages/PngToPdf";
import SplitToPdf from "./pages/SplitToPdf";
import PowerPointToPdf from "./pages/PowerPointToPdf";
import CompressPdf from "./pages/CompressPdf";
import Settings from "./pages/Settings";

function App() {
  return (
    <>
    <Helmet>
      <title>Welcome to Fidar</title>
    </Helmet>
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/pages/login" element={<Login />} />
        <Route path="/pages/signup" element={<SignUp />} />
        <Route path="/pages/dashboard" element={<Dashboard />} />
        <Route path="/pages/resetpassword" element={<ResetPassword />} />
        <Route path="/pages/inbox" element={<Inbox />} />
        <Route path="/pages/outbox" element={<Outbox />} />
        <Route path="/pages/draft" element={<Draft />} />
        <Route path="/pages/starred" element={<Starred />} />
        <Route path="/pages/mergepdf" element={<MergePdf />} />
        <Route path="/pages/jpgtopdf" element={<JpgToPdf />} />
        <Route path="/pages/pngtopdf" element={<PngToPdf />} />
        <Route path="/pages/splittopdf" element={<SplitToPdf />} />
        <Route path="/pages/powerpointtopdf" element={<PowerPointToPdf />} />
        <Route path="/pages/compresspdf" element={<CompressPdf />} />
        <Route path="/pages/settings" element={<Settings />} />
      </Routes>
    </Router>

    </>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';

import Login from './pages/Login';
import Home from './pages/Home/index';

import Facility from './pages/Headmaster/Facility/Facility';
import Attendance from './pages/Headmaster/Summary/Attendance';
import Summary from './pages/Headmaster/Summary/Summary';
import Personnel from './pages/Headmaster/Personnel/Personnel';
import Leaves from './pages/Headmaster/Personnel/Leaves';
import Messages from './pages/Headmaster/Communication/Messages';
import Ogloszenia from './pages/Headmaster/Communication/Announcements';
import Kids from './pages/Headmaster/Kids/Kids';
import Parents from './pages/Headmaster/Kids/Parents';
import Groups from './pages/Headmaster/Kids/Groups';
import Config from './pages/Headmaster/Kids/Config';
import Diets from './pages/Headmaster/Kids/Diets';
import MiniSidebarSummary from './Layout/MiniSidebars/MiniSidebarSummary';
import MiniSidebarPersonnel from './Layout/MiniSidebars/MiniSidebarPersonnel';
import MiniSidebarFacility from './Layout/MiniSidebars/MiniSidebarFacility';

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />
        <Route path="/facility" element={<Layout ><Facility /></Layout>} />
        <Route path="/attendance" element={<Layout minisidebarEnabled={true} minisidebar={<MiniSidebarSummary index={1} />} ><Attendance /></Layout>} />
        <Route path="/summary" element={<Layout minisidebarEnabled={true} minisidebar={<MiniSidebarSummary index={0} />} ><Summary /></Layout>} />
        <Route path="/personnel" element={<Layout minisidebarEnabled={true} minisidebar={<MiniSidebarPersonnel index={0} />} ><Personnel /></Layout>} />
        <Route path="/leaves" element={<Layout minisidebarEnabled={true} minisidebar={<MiniSidebarPersonnel index={1} />} ><Leaves /></Layout>} />
        <Route path="/messages" element={<Layout sidebar1={true}><Messages /></Layout>} />
        <Route path="/Ogloszenia" element={<Layout minisidebarEnabled={true}><Ogloszenia /></Layout>} />
        <Route path="/kids" element={<Layout minisidebarEnabled={true} minisidebar={<MiniSidebarFacility index={0} />} ><Kids /></Layout>} />
        <Route path="/parents" element={<Layout minisidebarEnabled={true} minisidebar={<MiniSidebarFacility index={1} />} ><Parents /></Layout>} />
        <Route path="/groups" element={<Layout minisidebarEnabled={true} minisidebar={<MiniSidebarFacility index={2} />} ><Groups /></Layout>} />
        <Route path="/config" element={<Layout minisidebarEnabled={true} minisidebar={<MiniSidebarFacility index={3} />} ><Config /></Layout>} />
        <Route path="/diets" element={<Layout minisidebarEnabled={true} minisidebar={<MiniSidebarFacility index={4} />} ><Diets /></Layout>} />
        <Route path="" element={<Layout minisidebarEnabled={true}><Groups /></Layout>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';

import Login from './pages/Login';
import Home from './pages/Home';

import P0 from './pages/P0';
import Attendance from './pages/Summary/Attendance';
import Summary from './pages/Summary';
import Personnel from './pages/Personnel/Personnel';
import Leaves from './pages/Personnel/Leaves';
import P4 from './pages/P4';
import Ogloszenia from './pages/Announcements/Announcements';
import Kids from './pages/Kids/Kids';
import Parents from './pages/Kids/Parents';
import Groups from './pages/Kids/Groups';
import MiniSidebarSummary from './Layout/MiniSidebars/MiniSidebarSummary';
import MiniSidebarPersonnel from './Layout/MiniSidebars/MiniSidebarPersonnel';
import MiniSidebarFacility from './Layout/MiniSidebars/MiniSidebarFacility';

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/p0" element={<Layout ><P0 /></Layout>} />
        <Route path="/attendance" element={<Layout minisidebarEnabled={true} minisidebar={<MiniSidebarSummary index={1} />} ><Attendance /></Layout>} />
        <Route path="/summary" element={<Layout minisidebarEnabled={true} minisidebar={<MiniSidebarSummary index={0} />} ><Summary /></Layout>} />
        <Route path="/personnel" element={<Layout minisidebarEnabled={true} minisidebar={<MiniSidebarPersonnel index={0} />} ><Personnel /></Layout>} />
        <Route path="/leaves" element={<Layout minisidebarEnabled={true} minisidebar={<MiniSidebarPersonnel index={1} />} ><Leaves /></Layout>} />
        <Route path="/p4" element={<Layout sidebar1={true}><P4 /></Layout>} />
        <Route path="/Ogloszenia" element={<Layout minisidebarEnabled={true}><Ogloszenia /></Layout>} />
        <Route path="/kids" element={<Layout minisidebarEnabled={true} minisidebar={<MiniSidebarFacility index={0} />} ><Kids /></Layout>} />
        <Route path="/parents" element={<Layout minisidebarEnabled={true} minisidebar={<MiniSidebarFacility index={1} />} ><Parents /></Layout>} />
        <Route path="/groups" element={<Layout minisidebarEnabled={true} minisidebar={<MiniSidebarFacility index={2} />} ><Groups /></Layout>} />
        <Route path="" element={<Layout minisidebarEnabled={true}><Groups /></Layout>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//wspolne
import Login from './pages/Login';
import Home from './pages/Home/index';
//headmaster
import HeadmasterLayout from './Layout/Headmaster/Layout';
import HeadmasterMiniSidebarSummary from './Layout/Headmaster/MiniSidebars/MiniSidebarSummary';
import MiniSidebarPersonnel from './Layout/Headmaster/MiniSidebars/MiniSidebarPersonnel';
import MiniSidebarFacility from './Layout/Headmaster/MiniSidebars/MiniSidebarFacility';
import Facility from './pages/Headmaster/Facility/Facility';
import HeadmasterSummary from './pages/Headmaster/Summary/Summary';
import Attendance from './pages/Headmaster/Summary/Attendance';
import Personnel from './pages/Headmaster/Personnel/Personnel';
import Leaves from './pages/Headmaster/Personnel/Leaves';
import Messages from './pages/Headmaster/Communication/Messages';
import Posts from './pages/Headmaster/Communication/Posts';
import Kids from './pages/Headmaster/Kids/Kids';
import Parents from './pages/Headmaster/Kids/Parents';
import Groups from './pages/Headmaster/Kids/Groups';
import Config from './pages/Headmaster/Kids/Config';
import Diets from './pages/Headmaster/Kids/Diets';
import Gallery from './pages/Headmaster/Gallery/Gallery';
//parent
import ParentLayout from './Layout/Parent/Layout';
import ParentMiniSidebarSummary from './Layout/Parent/MiniSidebars/MiniSidebarSummary';
import ParentSummary from './pages/Parent/Summary/Summary';

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />
        
        <Route path="/headmaster/facility" element={<HeadmasterLayout ><Facility /></HeadmasterLayout>} />
        <Route path="/headmaster/summary" element={<HeadmasterLayout minisidebarEnabled={true} minisidebar={<HeadmasterMiniSidebarSummary index={0} />} ><HeadmasterSummary /></HeadmasterLayout>} />
        <Route path="/headmaster/attendance" element={<HeadmasterLayout minisidebarEnabled={true} minisidebar={<HeadmasterMiniSidebarSummary index={1} />} ><Attendance /></HeadmasterLayout>} />
        <Route path="/headmaster/personnel" element={<HeadmasterLayout minisidebarEnabled={true} minisidebar={<MiniSidebarPersonnel index={0} />} ><Personnel /></HeadmasterLayout>} />
        <Route path="/headmaster/leaves" element={<HeadmasterLayout minisidebarEnabled={true} minisidebar={<MiniSidebarPersonnel index={1} />} ><Leaves /></HeadmasterLayout>} />
        <Route path="/headmaster/messages" element={<HeadmasterLayout ><Messages /></HeadmasterLayout>} />
        <Route path="/headmaster/posts" element={<HeadmasterLayout minisidebarEnabled={true}><Posts /></HeadmasterLayout>} />
        <Route path="/headmaster/kids" element={<HeadmasterLayout minisidebarEnabled={true} minisidebar={<MiniSidebarFacility index={0} />} ><Kids /></HeadmasterLayout>} />
        <Route path="/headmaster/parents" element={<HeadmasterLayout minisidebarEnabled={true} minisidebar={<MiniSidebarFacility index={1} />} ><Parents /></HeadmasterLayout>} />
        <Route path="/headmaster/groups" element={<HeadmasterLayout minisidebarEnabled={true} minisidebar={<MiniSidebarFacility index={2} />} ><Groups /></HeadmasterLayout>} />
        <Route path="/headmaster/config" element={<HeadmasterLayout minisidebarEnabled={true} minisidebar={<MiniSidebarFacility index={3} />} ><Config /></HeadmasterLayout>} />
        <Route path="/headmaster/diets" element={<HeadmasterLayout minisidebarEnabled={true} minisidebar={<MiniSidebarFacility index={4} />} ><Diets /></HeadmasterLayout>} />
        <Route path="/headmaster/gallery" element={<HeadmasterLayout ><Gallery /></HeadmasterLayout>} />

        <Route path="/parent/summary" element={<ParentLayout minisidebarEnabled={true} minisidebar={<ParentMiniSidebarSummary index={0} />} ><ParentSummary /></ParentLayout>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
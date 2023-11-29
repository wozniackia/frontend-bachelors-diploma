import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Layout1 from './Layout';

import Login from './pages/Login';
import Home from './pages/Home';

import P0 from './pages/P0';
import P1 from './pages/P1';
import P2 from './pages/P2';
import P3 from './pages/P3';
import P4 from './pages/P4';
import Ogloszenia from './pages/Ogloszenia';
import Dzieci from './pages/Dzieci';
import Grupy from './pages/Grupy';

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/p0" element={<Layout ><P0 /></Layout>} />
        <Route path="/p1" element={<Layout minisidebar={true}><P1 /></Layout>} />
        <Route path="/p2" element={<Layout minisidebar={true}><P2 /></Layout>} />
        <Route path="/p3" element={<Layout minisidebar={true}><P3 /></Layout>} />
        <Route path="/p4" element={<Layout1 sidebar1={true}><P4 /></Layout1>} />
        <Route path="/Ogloszenia" element={<Layout minisidebar={true}><Ogloszenia /></Layout>} />
        <Route path="/Dzieci" element={<Layout minisidebar={true}><Dzieci /></Layout>} />
        <Route path="/Grupy" element={<Layout minisidebar={true}><Grupy /></Layout>} />
        <Route path="" element={<Layout minisidebar={true}><Grupy /></Layout>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
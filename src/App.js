import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import HomePage from './components/Home';
import NotFound from './components/404';
import Signup from './Auth/Auth';
import Sidenav from './components/Sidenav';
// import Dashboard from './components/Dashboard';
// import Employees from './components/Employees';

const AuthenticatedRoutes = () => {
  return (
    <Routes>
      {/* <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/employees" element={<Employees />} /> */}
    </Routes>
  );
};

const App = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className={`App ${collapsed ? 'sidebar-collapsed' : ''}`}>
      <Router>
        <div className="container-main-page">
          <Sidenav collapsed={collapsed} toggleSidebar={toggleSidebar} />
          <div className="main-content">
            <Routes>
              <Route path="/" element={<Signup />} />
              <Route path="/dashboard" element={<HomePage />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/*" element={<AuthenticatedRoutes />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
};

export default App;
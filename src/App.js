import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import HomePage from './components/Home';
import NotFound from './components/404';
import Signup from './Auth/Auth';
import Sidenav from './components/Sidenav';

const AuthenticatedRoutes = () => {
  return (
    <Routes>
      {/* <Route path="/dashboard" element={<Homepage />} /> */}
      {/* <Route path="/employees" element={<Employees />} /> */}
      {/* Add more routes as needed */}
    </Routes>
  );
};

const App = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className={`App ${collapsed ? 'collapsed' : ''}`}>
      <Router>
        <div className="container-main-page">
          <Sidenav collapsed={collapsed} />
          <div className="main-content">
            <Routes>
              <Route path="/" element={<Signup />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/*" element={<AuthenticatedRoutes />} />
              <Route path="/dashboard" element={<HomePage />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
};

export default App;

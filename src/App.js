import './App.scss';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import HomePage from './components/Home';
import NotFound from './components/404';
import AuthenticationPages from './Auth/Auth';
import Sidenav from './components/Sidenav';
import Employees from './pages/Employees';
import Clients from './pages/Clients';
import Settings from './pages/Settings';
import Projects from './pages/Projects';
import AddProject from './pages/AddProjects';
import AddEmployee from './pages/AddEmployees';
import EditEmployee from './pages/EditEmployees';
import EditProject from './pages/EditProjects';
import Attendance from './pages/Attendance';
import LeaveManagement from './pages/Leave';

const ProtectedRoute = ({ children, isAuthenticated }) => {
  if (!isAuthenticated) {
    // return <Navigate to="/" replace />;
    return children;

  }
  // return children;
};

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <Router>
      <div className={`App ${collapsed ? 'sidebar-collapsed' : ''}`}>
        <div className="container-main-page">
        <Sidenav collapsed={collapsed} toggleSidebar={toggleSidebar} />

          {/* {isAuthenticated && (
          )} */}
          <div className={`main-content ${isAuthenticated ? 'authenticated' : ''}`}>
            <Routes>
              <Route path="/" element={<AuthenticationPages onLogin={handleLogin} />} />
              <Route path="*" element={<NotFound />} />
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute isAuthenticated={isAuthenticated}>
                    <HomePage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/employees"
                element={
                  <ProtectedRoute isAuthenticated={isAuthenticated}>
                    <Employees />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/employees/add"
                element={
                  <ProtectedRoute isAuthenticated={isAuthenticated}>
                    <AddEmployee />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/employees/edit"
                element={
                  <ProtectedRoute isAuthenticated={isAuthenticated}>
                    <EditEmployee />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/projects"
                element={
                  <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <Projects />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/projects/add"
                element={
                  <ProtectedRoute isAuthenticated={isAuthenticated}>
                    <AddProject />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/projects/edit"
                element={
                  <ProtectedRoute isAuthenticated={isAuthenticated}>
                    <EditProject />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/clients"
                element={
                  <ProtectedRoute isAuthenticated={isAuthenticated}>
                    <Clients />
                  </ProtectedRoute>
                }
                />
              <Route
                path="/attendance"
                element={
                  <ProtectedRoute isAuthenticated={isAuthenticated}>
                    <Attendance />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/leavemanagement"
                element={
                  <ProtectedRoute isAuthenticated={isAuthenticated}>
                    <LeaveManagement />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/settings"
                element={
                  <ProtectedRoute isAuthenticated={isAuthenticated}>
                    <Settings />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
import './App.scss';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import HomePage from './components/Home';
import NotFound from './components/404';
import AuthenticationPages from './Auth/Auth';
import Sidenav from './components/Sidenav';
import Employees from './pages/Employees';

// Placeholder components for new routes
const AddEmployee = () => <div>Add Employee Page</div>;
const EditEmployee = () => <div>Edit Employee Page</div>;
const Projects = () => <div>Projects Page</div>;
const AddProject = () => <div>Add Project Page</div>;
const EditProject = () => <div>Edit Project Page</div>;
const Attendance = () => <div>Attendance Page</div>;
const LeaveManagement = () => <div>Leave Management Page</div>;
const Settings = () => <div>Settings Page</div>;

const ProtectedRoute = ({ children, isAuthenticated }) => {
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  return children;
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
          {isAuthenticated && (
            <Sidenav collapsed={collapsed} toggleSidebar={toggleSidebar} />
          )}
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
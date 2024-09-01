import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import StudentList from './components/StudentList';
import TeacherList from './components/TeacherList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} /> {/* Redirect to Dashboard */}
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/students" element={<StudentList />} />
        <Route path="/teachers" element={<TeacherList />} />
        <Route path="*" element={<h2>404 Not Found</h2>} /> {/* Fallback route */}
      </Routes>
    </Router>
  );
}

export default App;

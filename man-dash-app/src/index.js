import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TaskPage from './pages/TaskPage';
import MemberPage from './pages/MemberPage';
import CalanderPage from './pages/CalanderPage';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/tasks" element={<TaskPage />} />
        <Route path="/members" element={<MemberPage />}/>
        <Route path="/calander" element={<CalanderPage />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals(); 

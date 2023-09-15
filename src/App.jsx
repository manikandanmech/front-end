import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import your components
import LoginPage from './components/LoginPage';
import ProfilePage from './components/ProfilePage';
import BookingHistoryPage from './components/BookingHistoryPage';
import BookingFormPage from './components/BookingFormPage';
import ManagerTablePage from './components/ManagerTablePage';
import ManagerLogin from './components/ManagerLogin';

import NavBar from './components/NavBar'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/BookingHistoryPage" element={<BookingHistoryPage />} />
        <Route path="/BookingFormPage" element={<BookingFormPage/>} />
        <Route path="/ManagerLogin" element={<ManagerLogin/>} />
        <Route path="/ManagerTablePage" element={<ManagerTablePage />} />
        <Route path="/NavBar" element={<NavBar/>} />
        <Route path="/ProfilePage" element={<ProfilePage/>} />
      </Routes>
    </Router>
  );
}

export default App;

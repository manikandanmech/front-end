import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
//import BookingFormPage from '../src/components/BookingFormPage';
//import ManagerTable from './ManagerTable';
import ProfilePage from '../src/components/ProfilePage';
import ManagerTablePage from './components/ManagerTablePage';
import BookingHistoryPage from './components/BookingHistoryPage';
import BookingFormPage from '../src/components/BookingFormPage';
import App from '../src/App';
//import ManagerTable from './ManagerTable';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);
reportWebVitals();

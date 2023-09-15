import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/login.css'

function LoginPage() {
  const [empId, setEmpId] = useState('');
  const history = useNavigate();
  const handleUsernameChange = (event) => {
    setEmpId(event.target.value);
  };
  const handleLoginClick = () => {
    history(`/BookingHistoryPage?empId=${encodeURIComponent(empId)}`);
  };

  const handleClick = () => {
    history(`/ManagerLogin`);
  };
  return (
    <div>
       <button onClick={handleClick}>Manager Page</button>
      <h1>Employee Login Page</h1>
      
      <label>
        <input
          type="text"
          value={empId}
          onChange={handleUsernameChange}
          placeholder="Enter your employee Id"
        />
      </label>
      <button onClick={handleLoginClick}>Login</button>
    </div>
  );
}
export default LoginPage;

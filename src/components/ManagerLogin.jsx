import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ManagerLogin() {
  const [managerId, setManagerId] = useState('');
  const history = useNavigate();
  const handleUsernameChange = (event) => {
    setManagerId(event.target.value);
  };
  const handleLoginClick = () => {
    history(`/ManagerTablePage?managerId=${encodeURIComponent(managerId)}`);
  };
  return (
    <div>
 
      <h1>Manager Login Page</h1>

      <label>
        Username:
        <input
          type="text"
          value={managerId}
          onChange={handleUsernameChange}
          placeholder="Enter your employee Id"
        />
      </label>
      <button onClick={handleLoginClick}>Login</button>
    </div>
  );
}
export default ManagerLogin;

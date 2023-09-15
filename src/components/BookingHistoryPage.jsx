import React, { useState, useEffect } from 'react';
import { useLocation,useNavigate} from 'react-router-dom';
import axios from 'axios';
import '../css/History.css' 

function BookingHistoryPage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();
  const empId = new URLSearchParams(location.search).get("empId");
  const history = useNavigate();

  const handleLoginClick = () => {
    history(`/BookingFormPage?empId=${encodeURIComponent(empId)}`);
  };



  function abc(id){
    if(id==1){
      return 'Pending'
    }
    else if(id==2){
      return "Accepted"
    }
    else if(id==3){
      return "Rejected"
    }
  }

  useEffect(() => {
    // Function to fetch data from a service
    const fetchData = async () => {
      try {
        
        const response1 = await axios.get('http://localhost:5282/api/Requests/byEmpId/'+empId);
        setData(response1.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };
    fetchData();
  }, []); 

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
      <div>
          <p>Employee Id: {empId}</p>
          <button onClick={handleLoginClick}>New Booking</button>
          <h4>Booking History</h4>
          {data.map((item) => (
          <div key={item.empId} className="history-card">
            <p>EmpID: {item.empId}</p>
            <p>Pickup Location: {item.pickUpLocation}</p>
            <p>Pickup Time: {item.pickupTime}</p>
            <p>RequestStatus:{abc(item.requestStatusId)}</p>
          </div>
          ))}
    </div>
  );
}

export default BookingHistoryPage;

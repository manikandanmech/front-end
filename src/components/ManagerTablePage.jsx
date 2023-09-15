import React, { useState, useEffect } from 'react';
import { useLocation} from 'react-router-dom';
import axios from 'axios';
import '../css/Table.css'
function ManagerTablePage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
 
  const location = useLocation();
  const managerId = new URLSearchParams(location.search).get("managerId");

  useEffect(() => {
    // Function to fetch data from a service
    const fetchData = async () => {
      try {
        
        const response1 = await axios.get('http://localhost:5282/api/Manger/approvals/'+managerId);
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

  // const handleClick = (data) => {
  //   setData(data)
  // };



  // const handleClick2 = () => {
  //   axios.patch('http://localhost:5282/api/Requests/UpdateRequests/'+empId,{empId,requestStatusId})


  // };



  return (
    <div>
      <div className="table-container">
<table>
    <tr>
    <th>Employee Name</th>
    <th>Pickup location</th>
    <th>PickupTime</th>
    <th>RequestStatus</th>
    </tr>
  {data.map((item) => (
    <tr key={item}>
    <td>{item.employeeName}</td>
    <td>{item.pickUpLocation}</td>
    <td>{item.pickUpTime}</td>
    {/* <td>{item.requestStatus}</td> */}
    <td><button>Accepted</button>
    <button className="Denied"> Denied</button></td>
    </tr>
    ))}
</table>
      </div>
    </div>
  );
}


export default  ManagerTablePage;
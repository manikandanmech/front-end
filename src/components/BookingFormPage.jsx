import React, { useState} from 'react';
import axios from 'axios';
import { useLocation} from 'react-router-dom';
import '../css/Form.css';

function Forms() {

  const location = useLocation();
  const empId = new URLSearchParams(location.search).get("empId");
  const [formData, setFormData] = useState({
    empId: empId,
    pickupLocation:"",
    dropLocation:"DLF",
    pickUpTime: "",
    requestStatusId: 1
  });
  
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      console.log(formData)
      await axios.post('http://localhost:5282/api/Requests', formData);
      console.log('hi')
    } catch (err) {
      console.log(err);
    }
  };



  return (
    <div className="form-container">
      <div className="form-content">
    
        <form onSubmit={handleSubmit}>
          <label>Employee Id: {empId}</label>



       
        <label htmlFor="pickupLocation">Pickup Location:</label>
          <select
            name="pickupLocation"
           // value={formData.pickUpLocation}
            onChange={handleChange}
            required
          >

            <option value="Koyambedu">Koyambedu</option>
            <option value="Kelambakkam">Kelambakkam</option>
            <option value="Guindy">Guindy</option>
            <option value="Tambaram">Tambaram</option>
          </select>

          <p>Drop Location: DLF</p>

          <label htmlFor="DateTime">Pickup Date and Time:</label>
          <input
            type="datetime-local"
            id="DateTime"
            name="pickUpTime"
            //value={formData. pickUpTime}
            onChange={handleChange}
            required
          />

          <button type="submit" >Book Now</button>
        </form>
      </div>
      <div className="form-image">
      <img
          src="https://img.freepik.com/free-vector/taxi-app-concept_23-2148484534.jpg?size=626&ext=jpg&ga=GA1.1.1185004765.1693457479&semt=ais"
          alt="Car Booking"
        />
      </div>
    </div>
  );
}

export default Forms;

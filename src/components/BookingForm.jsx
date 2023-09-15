import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../src/Form.css';

function Forms() {
  const [formData, setFormData] = useState({
    requestId: 0,
    empId: "",
    pickUpLocation: "",
    dropLocation: "",
    pickUpTime: "",
    requestStatusId: 1
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('hi');
    try {
      await axios.post('http://localhost:5282/api/Requests', formData);
      setFormData({
        requestId: 5,
        empId: "",
        pickUpLocation: "",
        dropLocation: "",
        pickUpTime: "",
        requestStatusId: 1
      });
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5282/api/Requests');
        setFormData(response.data);
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
    <div className="form-container">
      <div className="form-content">
        <form onSubmit={handleSubmit}>
        <input
          value={formData.requestId}
          onChange={handleChange} 
          />
          <input
            type="text"
            name="empId"
            placeholder="Your Emp Id"
            value={formData.empId}
            onChange={handleChange}
            required
          />
          <select
            name="pickupLocation"
            value={formData.pickUpLocation}
            onChange={handleChange}
            required
          >
            <option value="Koyambedu">Koyambedu</option>
            <option value="Kelambakkam">Kelambakkam</option>
            <option value="Guindy">Guindy</option>
            <option value="Tambaram">Tambaram</option>
          </select>

          <select
            name="pickupLocation"
            value={formData.dropLocation}
            onChange={handleChange}
            required
          >
            <option value="Koyambedu">Koyambedu</option>
            <option value="Kelambakkam">Kelambakkam</option>
            <option value="Guindy">Guindy</option>
            <option value="Tambaram">Tambaram</option>
          </select>





          <label htmlFor="DateTime">Pickup Date and Time:</label>
          <input
            type="datetime-local"
            id="DateTime"
            name="datetime"
            value={formData. pickUpTime}
            onChange={handleChange}
            required
          />

          <input
          value={formData.requestStatusId} // ...force the input's value to match the state variable...
          onChange={handleChange} // ... and update the state variable on any edits!
          />
          <button type="submit">Book Now</button>
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

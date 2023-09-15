

import { useState, useEffect } from 'react';
import prof1 from '../images/iconProf.png';

import { useLocation} from 'react-router-dom';

import Profile from '../components/ProfilePage';


import axios from 'axios';

 

function Apps() {

  const [showprofile,setshowprofile] = useState(false);

  const [data , setData] = useState([]);

  const [loading , setLoading] = useState(true);

  const [error , setError] = useState(null);

  const [isEditing, setIsEditing] = useState(false);

  const [editedData, setEditedData] = useState({ ...data });

 

  function toggleprofile() {

    if(showprofile) {

      setshowprofile(false);

    } else {

      setshowprofile(true);

    }

  }

 

  useEffect(() => {

    const fetchData = async () => {

      try{

        const response = await axios.get('https://localhost:7245/api/EmployeeDetails/INT1234');

        setData(response.data);

        setLoading(false);

      } catch (err) {

        setError(err);

        setLoading(false);

      }

    }

    fetchData();

  }, []);

 

  const handleEdit = () => {

    setIsEditing(true);

  };

 

 

  const handleSave = async () => {

    try {    

      setIsEditing(false);  

      setEditedData(editedData);

      await axios.put('https://localhost:7245/api/INT1234', editedData);      

    } catch (err) {

      console.error(err);

     

    }

  };

 

  return (

    <><div className="main">

      <header className="topbar">

        <a href="#profile" class="img" onClick={toggleprofile} ><img src={prof1} width="40px" height="40px" alt="Profile icon" /></a>

        <a href="#about">About</a>

        <a href="#booking">Booking</a>

        <a class="active" href="#home">Home</a>

      </header>

    </div>

 

    {showprofile && <Profile className="profilecomp" data={data} handleEdit={handleEdit} handleSave={handleSave} editedData={editedData} isEditing={isEditing} setEditedData={setEditedData}/>}

    {loading && <div>Loading...</div>}

    {error && <div>Error: {error.message}</div>}

    </>

  );

}

 

export default Apps;
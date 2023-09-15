



import '../css/profile.css';
import NavBar from '../components/NavBar'
import prof2 from '../images/pic.png';
function ProfilePage({ data, handleEdit, handleSave, editedData, isEditing, setEditedData }) {
  return (
    <>
      <div className='container'>
        <div className='left'>
          <div className="myprofile">MY PROFILE</div>
          <div className="icon">
            <img src={prof2} className='profilepicture' alt="Profile icon" />
          </div>
        </div>
        <div className='right'>
          <div className="submain">
            <div className="employee-info">
              <div className="detail">
                <p className="head">Employee ID <span className="ans">: {isEditing ? (
                  <input
                    type="text"
                    value={editedData.empId}
                    onChange={(e) => setEditedData({ ...editedData, empId: e.target.value })}
                  />
                ) : (
                  <span>{data.empId}</span>
                )}</span> </p>
              </div>
              <div className="detail">
                <p className="head">Employee Name <span className="ans">: {isEditing ? (
                  <input
                    type="text"
                    value={editedData.empName}
                    onChange={(e) => setEditedData({ ...editedData, empName: e.target.value })}
                  />
                ) : (
                  <span>{data.empName}</span>
                )}</span> </p>
              </div>
              <div className="detail">
                <p className="head">Contact No <span className="ans">:{isEditing ? (
                  <input
                    type="text"
                    value={editedData.contactNo}
                    onChange={(e) => setEditedData({ ...editedData, contactNo: e.target.value })}
                  />
                ) : (
                  <span>{data.contactNo}</span>
                )}</span> </p>
              </div>
              <div className="detail">
                <p className="head">Email ID <span className="ans">: {isEditing ? (
                  <input
                    type="text"
                    value={editedData.emailId}
                    onChange={(e) => setEditedData({ ...editedData, emailId: e.target.value })}
                  />
                ) : (
                  <span>{data.emailId}</span>
                )}</span> </p>
              </div>
              <div className="detail">
                <p className="head">Manager ID <span className="ans">: {isEditing ? (
                  <input
                    type="text"
                    value={editedData.managerId}
                    onChange={(e) => setEditedData({ ...editedData, managerId: e.target.value })}
                  />
                ) : (
                  <span>{data.managerId}</span>
                )}</span> </p>
              </div>
            </div>
            {isEditing ? (
            <div >
              <button  onClick={handleSave} className='button'>Save</button>
            </div>
          ) : (
            <div>
              <button onClick={handleEdit} className='button'>Edit</button>
            </div>
          )}
          </div>
        </div>
      </div>
    </>
  );
}
export default ProfilePage;
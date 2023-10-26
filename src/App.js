import logo from './asset/images/icon.png';
import './App.css';
import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [name,setName]=useState('');
  const [department, setDepartment] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    if (name.length === 0) {
      alert("Name has left blank!");
    }
    else if (department.length === 0) {
      alert("department has left blank!");
    }
    else if (email.length === 0) {
      alert("email has left blank!");
    }
    else{
      const url = "http://localhost/leave_api/leaveform.php";
      let fData = new FormData();
      fData.append('name', name);
      fData.append('department', department);
      fData.append('email', email);
      axios.post(url, fData)
        .then(response => alert(response.data))
        .catch(error => alert(error));
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
        <div className="LeavingForm">
          <h2>Leave Application Form</h2>
          <p>Please fill in the form below if you need to leave work. All leave applications need to be approved by both the applicant and the manager.</p>
          <hr />
          <form>
          <div className='formController'>
          <div className="formGroup">
            <label htmlFor="name">Applicant Name:</label>
            <input type="text" id="name" name="name" value={name} onChange={(e)=>setName(e.target.value)}  />
          </div>
          <div className="formGroup">
              <label htmlFor="department">Department:</label>
              <input type="text" id="department" name="department" value={department} onChange={(e) => setDepartment(e.target.value)} />
          </div>
          
          <div className="formGroup">
            <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          </div>
          
          <button type="submit" className='leaveSubmit' onClick={handleSubmit}>Submit</button>
         
          </form>
        </div>
    </div>
  );
}

export default App;

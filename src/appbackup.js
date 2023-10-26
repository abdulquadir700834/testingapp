import logo from './asset/images/icon.png';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    department: '', // Add department field
    phone: '', // Add phone field
    startDate: '',
    endDate: '',
    number: '', // Add number field
    reason: '',
    emergencyLeave: false,
    annualLeave: false,
    medicalLeave: false,
    personalLeave: false,
    otherLeave: false,
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost/leave_api/leaveform.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Form data sent successfully');
        // You can handle success here, such as showing a success message to the user.
      } else {
        console.error('Failed to send form data');
        // You can handle error here, such as showing an error message to the user.
      }
    } catch (error) {
      console.error('An error occurred:', error);
      // Handle any unexpected errors that occurred during the request.
    }
  };
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
        <div className="LeavingForm">
          <h2>Leave Application Form</h2>
          <p>Please fill in the form below if you need to leave work. All leave applications need to be approved by both the applicant and the manager.</p>
          <hr />
          <form onSubmit={handleSubmit}>
          <div className='formController'>
          <div className="formGroup">
            <label htmlFor="name">Applicant Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleFormChange} />
          </div>
          <div className="formGroup">
              <label htmlFor="department">Department:</label>
            <input type="text" id="department" name="department" value={formData.department} onChange={handleFormChange} />
          </div>
          <div className="formGroup">
              <label htmlFor="phone">Phone no:</label>
              <input type="text" id="phone" name="phone" value={formData.phone} onChange={handleFormChange} />
          </div>
          <div className="formGroup">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleFormChange} />
          </div>
          </div>
          <div className='clear'></div>
            <div className="reasonLeave">
              <h4>Reason for Leave</h4>
            <div className='clear'></div>
            <div><input type="checkbox" /> <span>Emergency Leave</span></div>
            <div><input type="checkbox" /> <span>Annual Leave</span></div>
            <div><input type="checkbox" /> <span>Medical Leave</span></div>
            <div><input type="checkbox" /> <span>Personal Leave</span></div>
            <div><input type="checkbox" /> <span>Other</span></div>
            </div>
          <div className='clear'></div>
          <div className='formController'>
            <div className='formGroup'>
            <label htmlFor="startDate">First day of absence:</label>
            <input type="date" id="startDate" name="startDate" value={formData.startDate} onChange={handleFormChange} />
            </div>
            <div className='formGroup'>
            <label htmlFor="endDate">Last day of absence:</label>
            <input type="date" id="endDate" name="endDate" value={formData.endDate} onChange={handleFormChange} />
            </div>
            <div className='formGroup'>
              <label htmlFor="number">No. of days requested:</label>
              <input type="number" id="number" name="number" value={formData.number} onChange={handleFormChange} />
            </div>
            <div className='clear'></div>
            <label htmlFor="reason">Reason:</label>
            <textarea id="reason" name="reason" value={formData.reason} onChange={handleFormChange} />
          </div>
            <button type="submit" className='leaveSubmit'>Submit</button>
         
          </form>
        </div>
    </div>
  );
}

export default App;

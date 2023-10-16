// ShowEmployee.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const ShowEmployee = () => {
  const { id } = useParams();
  const [employeeData, setEmployeeData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:1500/api/employee/${id}`);
        setEmployeeData(response.data);
      } catch (error) {
        console.error('Error fetching employee data:', error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div className='container mt-4 w-75 navbar-appbar' style={{ marginLeft: '250px' }}>
      <h2>Employee Details</h2>
      <Card style={{ maxWidth: 300 }}>
        <img src={employeeData.image} alt="Employee" style={{ maxWidth: '100%', height: 'auto' }} />
        <CardContent>
          <Typography variant="h5" component="div">
            {`${employeeData.firstname} ${employeeData.lastname}`}
          </Typography>
          <Typography color="textSecondary" gutterBottom>
            <strong>Email:</strong> {employeeData.email}<br />
            <strong>Department:</strong> {employeeData.department}<br />
            <strong>Hire Date:</strong> {employeeData.hiredate}<br />
            <strong>Salary:</strong> {employeeData.salary}<br />
          </Typography>
        </CardContent>
      </Card>
      <Button variant="contained" color="primary" onClick={() => window.history.back()} style={{ marginTop: '16px' }}>
        Go Back
      </Button>
    </div>
  );
};

export default ShowEmployee;
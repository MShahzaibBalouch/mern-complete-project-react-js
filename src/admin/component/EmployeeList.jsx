import React from 'react';
import { useProductContext } from './ProductContext';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const EmployeeList = () => {
  const { employees } = useProductContext();
  const navigate = useNavigate();

  const deleteEmployee = (employeeId) => {
    try {
      axios.delete(`http://localhost:1500/api/employee/${employeeId}`).then(()=>{
        console.log('Employee Deleted Sucessfully!!!!');
      }).catch((err)=>{
        console.log(err.message);
      })
    }
    catch (err) {
      console.log(err.message);
    }
  };


  return (
    <TableContainer component={Paper} className='container mt-4 w-75 navbar-appbar' style={{ marginLeft: '250px' }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Image</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Department</TableCell>
            <TableCell>Job Title</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employees.map((employee) => (
            <TableRow key={employee._id}>
              <TableCell>
                <img alt={employee.username} className='rounded-circle admin-image' src={employee.image} />
              </TableCell>
              <TableCell>{employee.firstname}</TableCell>
              <TableCell>{employee.lastname}</TableCell>
              <TableCell>{employee.department}</TableCell>
              <TableCell>{employee.job}</TableCell>
              <TableCell>
                <Button onClick={() => navigate(`/employee/update/${employee._id}`)} variant="contained" color="warning">Edit</Button>
                <Button onClick={() => navigate(`/employee/view/${employee._id}`)} variant="contained" color="success">View</Button>
                <Button onClick={() => deleteEmployee(employee._id)} variant="contained" color="secondary">
                  Delete
                </Button>
                
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default EmployeeList;

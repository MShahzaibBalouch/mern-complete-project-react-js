import React from 'react';
import AdminLeftNavbar from '../component/AdminLeftNavbar';
import Navbar from '../component/Navbar';
import EmployeeList from '../component/EmployeeList';

const Employee = () => {
  return (
    <div>
      <AdminLeftNavbar />
      <Navbar />
      <EmployeeList />
    </div>
  )
}

export default Employee;
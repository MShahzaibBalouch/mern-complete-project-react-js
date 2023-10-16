import React from 'react';
import AdminLeftNavbar from '../component/AdminLeftNavbar';
import Navbar from '../component/Navbar';
import EmployeeForm from '../component/EmployeeForm';

const FormPages = () => {
  return (
    <div>
        <AdminLeftNavbar />
        <Navbar />
        <EmployeeForm />
    </div>
  )
}

export default FormPages;
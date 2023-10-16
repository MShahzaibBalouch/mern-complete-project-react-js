import React from 'react';
import AdminLeftNavbar from '../component/AdminLeftNavbar';
import Navbar from '../component/Navbar';
import ShowEmployee from '../component/ShowEmployee';

const EmployeeGet = () => {
  return (
    <div>
        <AdminLeftNavbar />
        <Navbar />
        <ShowEmployee />
    </div>
  )
}

export default EmployeeGet;
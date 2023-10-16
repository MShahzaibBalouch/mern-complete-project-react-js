import React from 'react';
import Navbar from '../component/Navbar';
import Profile from '../component/Profile';
import AdminLeftNavbar from '../component/AdminLeftNavbar';

const AdminProfile = () => {
  return (
    <div>
      <AdminLeftNavbar />
        <Navbar />
        <Profile />
    </div>
  )
}

export default AdminProfile;
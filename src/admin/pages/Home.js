import React from 'react';
import Navbar from '../component/Navbar';
import ProductList from '../component/ProductList';
import AdminLeftNavbar from '../component/AdminLeftNavbar';

const Home = () => {
  return (
    <div>
      <AdminLeftNavbar />
        <Navbar />
        <ProductList />
    </div>
  )
}

export default Home;
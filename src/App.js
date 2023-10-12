import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import LogIn from './admin/component/LogIn';
import './App.css';
import Home from './admin/pages/Home';
import ProductCreate from './admin/pages/ProductCreate';
import UpdateProductForm from './admin/component/UpdateProductForm';
import AdminProfile from './admin/pages/AdminProfile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/product/create' element={<ProductCreate />} />
        <Route path='/product/update/:id' element={<UpdateProductForm />} />
        <Route path='/admin/profile' element={ <AdminProfile /> } />
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

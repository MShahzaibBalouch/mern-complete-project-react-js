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
import FormPages from './admin/pages/FormPages';
import Employee from './admin/pages/Employee';
import UpdateEmployee from './admin/pages/UpdateEmployee';
import EmployeeGet from './admin/pages/EmployeeGet';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/product/create' element={<ProductCreate />} />
        <Route path='/product/update/:id' element={<UpdateProductForm />} />
        <Route path='/admin/profile' element={ <AdminProfile /> } />
        <Route path='/employee' element={ <Employee /> } />
        <Route path='/forms' element={ <FormPages /> } />
        <Route path="/login" element={<LogIn />} />
        <Route path='/employee/update/:id' element={ <UpdateEmployee /> } />
        <Route path='/employee/view/:id' element={ <EmployeeGet /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

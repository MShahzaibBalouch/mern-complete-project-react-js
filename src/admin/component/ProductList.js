import React from 'react';
import { useProductContext } from './ProductContext';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
const ProductList = () => {
  const { products, handleEdit, handleDelete } = useProductContext();
  const navigate = useNavigate();
  return (
    <TableContainer component={Paper} className='container mt-4 w-75 navbar-appbar' style={{marginLeft:'250px'}}>
      <Table>
        <TableHead>
          <TableRow>
          <TableCell>Image</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => {
            return (
              <TableRow key={product._id}>
                <TableCell>
                <img alt={product.title} className='rounded-circle admin-image' src={product.image} />
                </TableCell>
                <TableCell>{product.title}</TableCell>
                <TableCell>{product.date}</TableCell>
                <TableCell>{product.description}</TableCell>
                <TableCell>{product.price}</TableCell>

                <TableCell>
                  <Button onClick={() => handleEdit(product, navigate(`/product/update/${product._id}`))}>Edit</Button>
                  <Button onClick={() => handleDelete(product._id)}>Delete</Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};


export default ProductList;

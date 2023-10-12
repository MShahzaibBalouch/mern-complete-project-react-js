import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react';

const ProductContext = createContext();

export const useProductContext = () => {
  return useContext(ProductContext);
};

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:1500/api/product/all');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchData();
  }, [products]);

  const handleEdit = (product) => {
    setEditingProduct(product);
  };

  const handleDelete = async (productId) => {
    try {
      const response = await axios.delete(`http://localhost:1500/api/product/${productId}`);
      console.log('Product Successfully Deleted!');
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleCreate = (newProduct) => {
    setProducts((prevProducts) => [...prevProducts, newProduct]);
  };



  return (
    <ProductContext.Provider
      value={{
        products,
        handleEdit,
        handleDelete,
        handleCreate,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

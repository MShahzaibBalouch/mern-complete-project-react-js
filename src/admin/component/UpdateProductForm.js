import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import FormControl from '@mui/material/FormControl';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateProductForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    description: '',
    price: '',
    image: null,
  });

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await axios.get(`http://localhost:1500/api/product/${id}`);
        const productData = response.data;
        setFormData({
          title: productData.title,
          date: productData.date,
          description: productData.description,
          price: productData.price,
          image: null,
        });
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    fetchProductData();
  }, [id]);

  const formik = useFormik({
    initialValues: formData,
    validationSchema: Yup.object({
      title: Yup.string().required('Title is required'),
      date: Yup.date().required('Date is required'),
      description: Yup.string().required('Description is required'),
      price: Yup.number().required('Price is required'),
      image: Yup.mixed().required('Image is required'),
    }),
    onSubmit: handleSubmit,
  });

  async function handleSubmit() {
    const formDataToSend = new FormData();

    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    try {
      await axios.put(`http://localhost:1500/api/product/${id}`, formDataToSend);
      console.log('Product Updated Successfully!');
      navigate('/');
    } catch (error) {
      console.error('Error updating product:', error);
    }
  }

  return (
    <form onSubmit={formik.handleSubmit} className='container mt-3'>
      <Box>
        <FormControl fullWidth className="mt-3">
          <InputLabel htmlFor="title">Title</InputLabel>
          <Input
            id="title"
            name="title"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.title}
          />
        </FormControl>
        {formik.touched.title && formik.errors.title && (
          <div style={{ color: 'red' }}>{formik.errors.title}</div>
        )}
      </Box>
      <Box>
        <FormControl fullWidth className="mt-3">
          <InputLabel htmlFor="date">Date</InputLabel>
          <Input
            id="date"
            name="date"
            type="date"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.date}
          />
        </FormControl>
        {formik.touched.date && formik.errors.date && (
          <div style={{ color: 'red' }}>{formik.errors.date}</div>
        )}
      </Box>
      <Box>
        <FormControl fullWidth className="mt-3">
          <InputLabel htmlFor="description">Description</InputLabel>
          <Input
            id="description"
            name="description"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.description}
          />
        </FormControl>
        {formik.touched.description && formik.errors.description && (
          <div style={{ color: 'red' }}>{formik.errors.description}</div>
        )}
      </Box>
      <Box>
        <FormControl fullWidth className="mt-3">
          <InputLabel htmlFor="price">Price</InputLabel>
          <Input
            id="price"
            name="price"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.price}
          />
        </FormControl>
        {formik.touched.price && formik.errors.price && (
          <div style={{ color: 'red' }}>{formik.errors.price}</div>
        )}
      </Box>
      <Box>
        <FormControl fullWidth className="mt-3">
          <InputLabel htmlFor="image"></InputLabel>
          <Input
            id="image"
            name="image"
            type="file"
            onChange={(event) => formik.setFieldValue('image', event.currentTarget.files[0])}
            onBlur={formik.handleBlur}
            error={formik.touched.image && Boolean(formik.errors.image)}
          />
        </FormControl>
        {formik.touched.image && formik.errors.image && (
          <div style={{ color: 'red' }}>{formik.errors.image}</div>
        )}
      </Box>
      <Button type="submit" variant="contained" className='form-control mt-3' color="primary">
        Update
      </Button>
    </form>
  );
};

export default UpdateProductForm;

// CreateProductForm.js
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useProductContext } from './ProductContext';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import FormControl from '@mui/material/FormControl';
import { useNavigate } from 'react-router-dom';

const validationSchema = Yup.object({
  title: Yup.string().required('Title is required'),
  date: Yup.string().required('Date is required'),
  description: Yup.string().required('Description is required'),
  price: Yup.string().required('Price is required'),
  image: Yup.mixed().required('Image is required'),
});

const CreateProductForm = () => {
  const { handleCreate } = useProductContext();
const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      title: '',
      date: '',
      description: '',
      price: '',
      image: null,
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const formDataToSend = new FormData();
      for (const key in values) {
        formDataToSend.append(key, values[key]);
      }

      try {
        console.log('Compillier reached!')
        const response = await axios.post('http://localhost:1500/api/product/create', formDataToSend);
        handleCreate(response.data);
        navigate('/');

      } catch (error) {
        console.error('Error creating product:', error);
      }
    },
  });

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
            type="text"
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
        Create
      </Button>
    </form>
  );
};

export default CreateProductForm;

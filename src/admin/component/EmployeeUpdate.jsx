import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Col, Row } from 'react-bootstrap';
import InputLabel from '@mui/material/InputLabel';
import axios from 'axios';

const EmployeeUpdateForm = () => {
  const { id } = useParams();
  const [employeeData, setEmployeeData] = useState({});
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
    firstname: Yup.string().required('First name is required'),
    lastname: Yup.string().required('Last name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    department: Yup.string().required('Department is required'),
    hiredate: Yup.string().required('Hire date is required'),
    salary: Yup.number().positive('Salary must be greater than 0').required('Salary is required'),
    cnic: Yup.string().required('CNIC is required'),
    dob: Yup.string().required('Date of Birth is required'),
    qualification: Yup.string().required('Qualification is required'),
    benefits: Yup.string().required('Benefits are required'),
    job: Yup.string().required('Job is required'),
    image: Yup.string().required('Image is required'),
  });

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      firstname: '',
      lastname: '',
      image: '',
      email: '',
      department: '',
      hiredate: '',
      salary: 0,
      cnic: '',
      dob: '',
      qualification: '',
      benefits: '',
      job: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await axios.put(`http://localhost:1500/api/employee/${id}`, values);

        if (response.status === 200) {
          console.log('Employee updated successfully');
          navigate('/employee')
        } else {
          console.error('Error updating employee');
        }
      } catch (error) {
        console.error('Error updating employee:', error);
      }
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:1500/api/employee/${id}`);
        setEmployeeData(response.data);
        formik.setValues({
          username: response.data.username || '',
          password: response.data.password || '',
          firstname: response.data.firstname || '',
          lastname: response.data.lastname || '',
          image: response.data.image || '',
          email: response.data.email || '',
          department: response.data.department || '',
          hiredate: response.data.hiredate || '',
          salary: response.data.salary || 0,
          cnic: response.data.cnic || '',
          dob: response.data.dob || '',
          qualification: response.data.qualification || '',
          benefits: response.data.benefits || '',
          job: response.data.job || '',
        });
      } catch (error) {
        console.error('Error fetching employee data:', error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <Box
      sx={{
        maxWidth: '800px',
        margin: 'auto',
        marginTop: '2rem',
      }}
    >
      <h2>Update Employee Information</h2>
      <Row>
        <Col md={6}>
          <InputLabel htmlFor="firstname">First Name</InputLabel>
          <TextField
            id="firstname"
            name="firstname"
            value={formik.values.firstname}
            onChange={formik.handleChange}
            error={formik.touched.firstname && Boolean(formik.errors.firstname)}
            helperText={formik.touched.firstname && formik.errors.firstname}
            sx={{ marginBottom: '1rem' }}
            className='form-control'
          />
        </Col>
        <Col md={6}>
          <InputLabel htmlFor="lastname">Last Name</InputLabel>
          <TextField
            id="lastname"
            name="lastname"
            value={formik.values.lastname}
            onChange={formik.handleChange}
            error={formik.touched.lastname && Boolean(formik.errors.lastname)}
            helperText={formik.touched.lastname && formik.errors.lastname}
            sx={{ marginBottom: '1rem' }}
            className='form-control'
          />
        </Col>
        <Col md={6}>
          <InputLabel htmlFor="username">Username</InputLabel>
          <TextField
            id="username"
            name="username"
            value={formik.values.username}
            onChange={formik.handleChange}
            error={formik.touched.username && Boolean(formik.errors.username)}
            helperText={formik.touched.username && formik.errors.username}
            sx={{ marginBottom: '1rem' }}
            className='form-control'
          />
        </Col>
        <Col md={6}>
          <InputLabel htmlFor="email">Email</InputLabel>
          <TextField
            id="email"
            name="email"
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            sx={{ marginBottom: '1rem' }}
            className='form-control'
          />
        </Col>
        <Col md={6}>
          <InputLabel htmlFor="hiredate">Hire Date</InputLabel>
          <TextField
            id="hiredate"
            name="hiredate"
            type="date"
            value={formik.values.hiredate}
            onChange={formik.handleChange}
            error={formik.touched.hiredate && Boolean(formik.errors.hiredate)}
            helperText={formik.touched.hiredate && formik.errors.hiredate}
            sx={{ marginBottom: '1rem' }}
            className='form-control'
          />
        </Col>
        <Col md={6}>
          <InputLabel htmlFor="cnic">CNIC</InputLabel>
          <TextField
            id="cnic"
            name="cnic"
            value={formik.values.cnic}
            onChange={formik.handleChange}
            error={formik.touched.cnic && Boolean(formik.errors.cnic)}
            helperText={formik.touched.cnic && formik.errors.cnic}
            sx={{ marginBottom: '1rem' }}
            className='form-control'
          />
        </Col>
        <Col md={6}>
          <InputLabel htmlFor="dob">Date of Birth</InputLabel>
          <TextField
            id="dob"
            name="dob"
            type='date'
            value={formik.values.dob}
            onChange={formik.handleChange}
            error={formik.touched.dob && Boolean(formik.errors.dob)}
            helperText={formik.touched.dob && formik.errors.dob}
            sx={{ marginBottom: '1rem' }}
            className='form-control'
          />
        </Col>
        <Col md={6}>
          <InputLabel htmlFor="department">Department</InputLabel>
          <TextField
            id="department"
            name="department"
            value={formik.values.department}
            onChange={formik.handleChange}
            error={formik.touched.department && Boolean(formik.errors.department)}
            helperText={formik.touched.department && formik.errors.department}
            sx={{ marginBottom: '1rem' }}
            className='form-control'
          />
        </Col>
        <Col md={6}>
          <InputLabel htmlFor="qualification">Qualification</InputLabel>
          <TextField
            id="qualification"
            name="qualification"
            value={formik.values.qualification}
            onChange={formik.handleChange}
            error={formik.touched.qualification && Boolean(formik.errors.qualification)}
            helperText={formik.touched.qualification && formik.errors.qualification}
            sx={{ marginBottom: '1rem' }}
            className='form-control'
          />
        </Col>
        <Col md={6}>
          <InputLabel htmlFor="benefits">Benefits</InputLabel>
          <TextField
            id="benefits"
            name="benefits"
            value={formik.values.benefits}
            onChange={formik.handleChange}
            error={formik.touched.benefits && Boolean(formik.errors.benefits)}
            helperText={formik.touched.benefits && formik.errors.benefits}
            sx={{ marginBottom: '1rem' }}
            className='form-control'
          />
        </Col>
        <Col md={6}>
          <InputLabel htmlFor="job">Job</InputLabel>
          <TextField
            id="job"
            name="job"
            value={formik.values.job}
            onChange={formik.handleChange}
            error={formik.touched.job && Boolean(formik.errors.job)}
            helperText={formik.touched.job && formik.errors.job}
            sx={{ marginBottom: '1rem' }}
            className='form-control'
          />
        </Col>
        <Col md={6}>
          <InputLabel htmlFor="salary">Salary</InputLabel>
          <TextField
            id="salary"
            name="salary"
            type="number"
            value={formik.values.salary}
            onChange={formik.handleChange}
            error={formik.touched.salary && Boolean(formik.errors.salary)}
            helperText={formik.touched.salary && formik.errors.salary}
            sx={{ marginBottom: '1rem' }}
            className='form-control'
          />
        </Col>
        <Col md={6}>
          <InputLabel htmlFor="password">Password</InputLabel>
          <TextField
            id="password"
            name="password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            sx={{ marginBottom: '1rem' }}
            className='form-control'
          />
        </Col>
        <Col md={6}>
          <InputLabel htmlFor="image">Image</InputLabel>
          <TextField
            id="image"
            placeholder='Paste link here'
            name="image"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.image && Boolean(formik.errors.image)}
            helperText={formik.touched.image && formik.errors.image}
            sx={{ marginBottom: '1rem' }}
            className='form-control'
          />
        </Col>
      </Row>
      <form onSubmit={formik.handleSubmit}>
        <Button type="submit" variant="contained" color="primary" className='form-control'>
          Update Employee
        </Button>
      </form>
    </Box>
  );
};

export default EmployeeUpdateForm;

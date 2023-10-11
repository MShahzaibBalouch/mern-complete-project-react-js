import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import FormHelperText from '@mui/material/FormHelperText';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import axios from 'axios';

const LogIn = () => {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address').required('Email is Required'),
            password: Yup.string().required('Password is Required'),
        }),
        onSubmit: async (values) => {
            try {
                const response = await axios.post('http://localhost:1500/api/admin/login', values);

                if (response.status === 200) {
                    const { token } = response.data;
                    localStorage.setItem('token', token);
                    navigate('/');
                } else {
                    console.error('Login failed');
                }
            } catch (error) {
                console.error(error);
            }
        },
    });

    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <div className='d-flex align-items-center justify-content-center' style={{ height: '100vh' }}>
            <div>
                <Card>
                    <CardContent>
                        <form onSubmit={formik.handleSubmit}>
                            <FormControl sx={{ m: 1 }} className='w-100' variant="standard">
                                <InputLabel htmlFor="email">Email</InputLabel>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    {...formik.getFieldProps('email')}
                                />
                            </FormControl>
                            <FormHelperText error style={{ minHeight: '1em' }}>
                                {formik.touched.email && formik.errors.email ? (
                                    formik.errors.email
                                ) : null}
                            </FormHelperText>
                            <FormControl sx={{ m: 1 }} className='w-100' variant="standard">
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input
                                    id="password"
                                    name="password"
                                    type={showPassword ? 'text' : 'password'}
                                    {...formik.getFieldProps('password')}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
                            {formik.touched.password && formik.errors.password ? (
                                <div style={{ color: 'red' }}>{formik.errors.password}</div>
                            ) : null}
                            <Stack spacing={2} direction="row">
                                <Button type="submit" variant="contained" className='w-100'>
                                    Submit
                                </Button>
                            </Stack>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default LogIn;

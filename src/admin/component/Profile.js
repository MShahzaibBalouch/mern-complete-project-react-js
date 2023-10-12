import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardBody, CardTitle, CardImg, Container, Row, Col, Spinner } from 'react-bootstrap';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import adminImage from '../assets/Professional_Business_Card.png';
import { useProductContext } from './ProductContext';
import { CardText, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';

const Profile = () => {
  const [adminProfile, setAdminProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const { handleEdit } = useProductContext();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      axios.get('http://localhost:1500/api/admin/', {
        headers: {
          Authorization: `${token}`,
          'Content-Type': 'application/json',
        },
      })
        .then(response => {
          setAdminProfile(response.data[0]);
          console.log(response.data[0]);
        })
        .catch(error => {
          console.error('Error fetching admin profile:', error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, []);

  return (
    <Container className="mt-4">
      <Row>
        <Col sm={12}>
          <CardImg src={adminImage} alt="Admin Profile" className='rounded-4 w-100 admin-banner' />
        </Col>
        <Col md="4">
          <Card className='border-0'>
            <div className='position-reletive'>
              <CardImg src={adminProfile?.image} alt="Admin Profile" className='rounded-circle admin-profile-image' />
              <span className='position-absolute bottom-20 end-50 cursor-pointer'>
                <PhotoCameraIcon />
              </span>
            </div>
            <CardBody>
              <CardTitle tag="h3" className='text-center'>{adminProfile?.firstname} {adminProfile?.lastname}</CardTitle>
            </CardBody>
          </Card>
        </Col>
        <Col md="8">
          {loading ? (
            <Spinner color="primary" />
          ) : (
            <Card className='mt-5'>
              <CardBody >
                <CardTitle tag="h3">{`Wellcom ${adminProfile.firstname} to Our Dashboard`}</CardTitle>
                <TableContainer component={Paper}>
                  <Table>
                    <TableBody>
                      <TableRow>
                        <TableCell><strong>First Name</strong></TableCell>
                        <TableCell>{adminProfile?.firstname}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell><strong>Last Name</strong></TableCell>
                        <TableCell>{adminProfile?.lastname}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell><strong>User Name</strong></TableCell>
                        <TableCell>{adminProfile?.username}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell><strong>Email</strong></TableCell>
                        <TableCell>{adminProfile?.email}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell><strong>Uppgrade Your Profile</strong></TableCell>
                        <TableCell><Button onClick={() => handleEdit(adminProfile)}>Uppgrade Your Profile</Button></TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </CardBody>
            </Card>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;

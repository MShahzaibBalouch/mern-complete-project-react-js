// MultiLinesCharts.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const MultiLinesCharts = () => {
    const [data, setData] = useState({});

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:1500/api/dashboard');
          setData(response.data);
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchData();
    }, []);
  
    const chartData = [
      { name: 'Admins', value: data.admin || 0 },
      { name: 'Employees', value: data.employee || 0 },
      { name: 'Products', value: data.product || 0 },
      { name: 'User', value: data.user || 0 },
    ];
  return (
    <div className="container mt-4 w-75 navbar-appbar" style={{ marginLeft: '250px' }}>
      <LineChart width={400} height={200} data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="value" stroke="#8884d8" />
      </LineChart>
    </div>
  );
};

export default MultiLinesCharts;

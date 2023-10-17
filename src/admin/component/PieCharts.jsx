import React, { useEffect, useState } from "react";
import axios from "axios";
import { PieChart, Pie, Tooltip, Legend } from "recharts";

const PieCharts = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:1500/api/dashboard");
        setData(response.data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const chartData = [
    { name: "Admins", value: data.admin || 0, fill: "#8884d8" },
    { name: "Employees", value: data.employee || 0, fill: "#82ca9d" },
    { name: "Products", value: data.product || 0, fill: "#ffc658" },
    { name: "User", value: data.user || 0, fill: "#00ff00" },
  ];

  return (
    <div
      className="container mt-4 w-75 navbar-appbar"
      style={{ marginLeft: "250px" }}
    >
      <PieChart width={400} height={210}>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={chartData}
          cx={200}
          cy={100}
          outerRadius={80}
          fill="#8884d8"
        />
          <Tooltip />
          <Legend />
      </PieChart>
    </div>
  );
};

export default PieCharts;
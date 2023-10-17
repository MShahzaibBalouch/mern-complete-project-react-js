import React from "react";
import Navbar from "../component/Navbar";
// import ProductList from "../component/ProductList";
import AdminLeftNavbar from "../component/AdminLeftNavbar";
import Barchart from "../component/Barchart";
import PieCharts from "../component/PieCharts";
import MultiBarChart from "../component/MultiLineChart";
import { Col, Row } from "react-bootstrap";
import LineCharts from "../component/Lineharts";
import MultiLinesCharts from "../component/MultiLinesCharts";

const Home = () => {
  return (
    <div>
      <AdminLeftNavbar />
      <Navbar />
      {/* <ProductList /> */}
      <Row>
        <Col md={5}>
          <Barchart />
        </Col>
        <Col md={5}>
          <PieCharts />
        </Col>
        <Col md={5}>
          <MultiBarChart />
        </Col>
        <Col md={5}>
          <LineCharts />
        </Col>
        <Col md={5}>
          <MultiLinesCharts />
        </Col>
      </Row>
    </div>
  );
};

export default Home;

import React from "react";
import {
  ListItem,
  ListItemIcon,
  List,
  Button,
  Hidden,
} from "@mui/material";
import { Link } from "react-router-dom";
import { NavLink } from 'react-bootstrap';
import DashboardIcon from "@mui/icons-material/Dashboard";
import WidgetsIcon from "@mui/icons-material/Widgets";
import EditIcon from "@mui/icons-material/Edit";
import TableChartIcon from "@mui/icons-material/TableChart";
import BarChartIcon from "@mui/icons-material/BarChart";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

const AdminLeftNavbar = () => {

  const menuItems = [
    { icon: <DashboardIcon />, text: "Dashboard", to: "/" },
    { icon: <PeopleAltIcon />, text: "Employes", to: "/employee" },
    { icon: <WidgetsIcon />, text: "Widgets", to: "/admin/widgets" },
    { icon: <EditIcon />, text: "Forms", to: "/forms" },
    { icon: <TableChartIcon />, text: "Tables", to: "/admin/tables" },
    { icon: <BarChartIcon />, text: "Charts", to: "/admin/charts" },
    { icon: <InsertDriveFileIcon />, text: "Pages", to: "/admin/pages" },
  ];

  const renderMenuItems = (showText) => {
    return menuItems.map((item, index) => (
      <ListItem key={index}>
        <Button
          component={NavLink}
          href={item.to}
          color="inherit"
          startIcon={<ListItemIcon>{item.icon}</ListItemIcon>}
        >
          {showText && item.text}
        </Button>
      </ListItem>
    ));
  };

  return (
    <div className="admin-left-navbar">
      <Hidden mdDown>
        <List>{renderMenuItems(true)}</List>
      </Hidden>
      <Hidden lgUp>
        <div className="d-flex flex-column p-3 gap-4">
          <Link to='/'><DashboardIcon /></Link>
          <Link to='/employee'><PeopleAltIcon /></Link>
          <Link to='/'><WidgetsIcon /></Link>
          <Link to='/'><EditIcon /></Link>
          <Link to='/'><TableChartIcon /></Link>
          <Link to='/'><BarChartIcon /></Link>
          <Link to='/'><InsertDriveFileIcon /></Link></div>
      </Hidden>
    </div>
  );
};

export default AdminLeftNavbar;

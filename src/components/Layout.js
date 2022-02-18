import React from "react";
import NavBar from "./Navbar";
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Sidebar,
  Visibility
} from 'semantic-ui-react'
import '../index.css'

const Layout = ({ children }) => {
  return (
    <>
       <NavBar />
        {/* pages */}
        {children}
    </>
  );
};

export default Layout;
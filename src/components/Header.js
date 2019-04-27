import React from 'react';
import { NavLink } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem } from 'reactstrap';

const Header = (props) => (
  <div>
  <Navbar color="dark" light expand="md">
    <NavbarBrand href="/">Xpense</NavbarBrand>
    <NavbarToggler onClick={true} />
    <Collapse isOpen={true} navbar>
      <Nav style={{padding:'10px'}} className="ml-auto" navbar>
        <NavItem style={{padding:'3px'}}>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </NavItem>
        <NavItem style={{padding:'3px'}}>
          <NavLink to="/create">Create</NavLink>
        </NavItem>
        <NavItem style={{padding:'3px'}}>
        <GoogleAuth/>
        </NavItem>
      </Nav>
    </Collapse>
  </Navbar>
</div>
);

export default Header;


/* <h1>Expensify</h1>
    <NavLink to="/" activeClassName="is-active" exact>test</NavLink>
    <NavLink to="/dashboard" activeClassName="is-active">Dashboard</NavLink>
    <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
    <GoogleAuth />*/

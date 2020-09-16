import React from 'react';
import { Nav, NavLink } from 'reactstrap';
import { NavLink as Link } from 'react-router-dom'
import '../App.css'

const NavBar = (props) => {
  return (
    <div>
      <Nav>
        <NavLink tag={Link} to="/" exact activeClassName="current">Home</NavLink> 
        <NavLink tag={Link} to="/ApplicationForm" exact activeClassName="current">App Form</NavLink> 
        <NavLink tag={Link} to="/DoubleForm" exact activeClassName="current">Double Form</NavLink> 
      </Nav>
    </div>
  );
}

export default NavBar;
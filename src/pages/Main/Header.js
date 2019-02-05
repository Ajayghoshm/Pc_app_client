import React from 'react';
import { connect } from 'react-redux';
import { toggleMobileNavVisibility } from '../../reducers/Layout';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, FormGroup, FormControl } from 'react-bootstrap';

const Header = ({
  showMobileMenu,
  toggleMobileNavVisibility
}) => (
    <Navbar fluid={true}>
      <Navbar.Header>
        <button type="button" className="navbar-toggle" data-toggle="collapse" onClick={toggleMobileNavVisibility}>
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>  
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
      </Navbar.Header>

      <Navbar.Collapse>
        <div className="separator"></div>
        <Nav pullLeft>
        <NavItem>2019-2020</NavItem>
        </Nav>
        <Nav pullRight>
          <NavDropdown title="Account" id="right-nav-bar">
            <MenuItem>View</MenuItem>
            <MenuItem>Update Profile</MenuItem>
            <MenuItem>Change Password</MenuItem>
            <MenuItem divider />
            <MenuItem>Others</MenuItem>
          </NavDropdown>
          <NavItem>Log out</NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );

const mapDispatchToProp = dispatch => ({
  toggleMobileNavVisibility: () => dispatch(toggleMobileNavVisibility())
});

export default connect(null, mapDispatchToProp)(Header);
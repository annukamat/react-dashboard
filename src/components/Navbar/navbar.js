import React, { Fragment, useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container,
  NavLink,
} from 'reactstrap';
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import profileImg from '../../Assets/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg';

const AppNavbar = () => {
  const [isOpen, setIsOpen] = useState(!false);
  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Navbar light expand="sm" className="mb-1">
        <Container>
          <NavbarBrand href="/">
            Rep<span>suite</span>.
          </NavbarBrand>
          <NavbarToggler onClick={handleToggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="https://github.com">
                  <FontAwesomeIcon className="setting-font" icon={faCog} />
                </NavLink>
              </NavItem>
              <NavItem className="d-flex">
                <NavLink href="https://github.com" className="pro-img-nav">
                  <img
                    className="img-fluid profile-img"
                    src={profileImg}
                    alt="login-rt-image"
                  />
                </NavLink>
                <div className="profile-des">
                  <h6>Profile</h6>
                  <p>Rachna Ranade</p>
                </div>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default AppNavbar;

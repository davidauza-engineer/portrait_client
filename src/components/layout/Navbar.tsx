import React, { useState } from 'react';
import {
  Collapse,
  Navbar as ReactstrapNavbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
      <div className="container">
        <ReactstrapNavbar color="light" light expand="md">
          <NavbarBrand>Portrait Client</NavbarBrand>
          <NavbarToggler onClick={toggle}/>
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink>Planets</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </ReactstrapNavbar>
      </div>
  );
}

export default Navbar;

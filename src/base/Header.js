import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Nav, NavItem, NavLink } from "reactstrap";

const Header = () => {
  return (
    <Nav tabs>
      <NavItem>
        <NavLink>
          <Link to="/Home">Home</Link>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink>
          <Link to="/News">News</Link>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink>
          <Link to="/Weather">Weather</Link>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink>
          <Link to="/Maps">Maps</Link>
        </NavLink>
      </NavItem>
    </Nav>
  );
};

export default Header;

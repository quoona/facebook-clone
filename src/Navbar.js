import React from "react";
import "./DropdownMenu.css";
function Navbar(props) {
  return (
    <div>
      <nav className="navbar">
        <ul className="navbar-nav">{props.children}</ul>
      </nav>
    </div>
  );
}

export default Navbar;

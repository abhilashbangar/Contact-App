import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
      <div className="container">
        <Link className="navbar-brand logo_text" to="/">
         <img src="contactlogo.svg" width="30" className="mr-2"/>
          MyContacts
        </Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="btn btn-primary d-flex" to="/AddContact">
              <i className="material-icons pr-2">person_add</i>Add Contact
            </Link>
          </li>
        
        </ul>
      </div>
    </nav>
  );
};

export default Header;

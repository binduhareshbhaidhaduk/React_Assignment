import { useState } from "react";
import "./Header.css"; // Import CSS file
import { Dropdown } from "react-bootstrap";

const Navbar = () => {
  // State to track navbar toggle, default open
  const [isOpen, setIsOpen] = useState(true);

  // Function to toggle navbar
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar nav-underline">
      <div className="nav1">
        <h2 className="logo ">Logo</h2>
        <div className="p-2 line">
          <span className="menu1  d-flex justify-content-start ps-3" >
            <i className="bi bi-columns-gap p-1"></i>
            <span className="p-1">Bid</span>
          </span>
        </div>
        <div className="p-2">
          <span className="menu1 d-flex justify-content-start ps-3" >
            <i className="bi bi-columns-gap p-1"></i>
            <span className="p-1">Bid</span>
          </span>
        </div>
        <div className="p-2">
          <span className="menu1 d-flex justify-content-start ps-3" >
            <i className="bi bi-columns-gap p-1"></i>
            <span className="p-1">Bid</span>
          </span>
        </div>

      </div>
      <span className="menu-toggle" onClick={toggleNavbar}>
        <i className="bi bi-list"></i>
      </span>
      <div className="header">
        <ul className="nav nav-underline">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/home">Bid</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/pod">POD</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/vendor">Vendor</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/user">User</a>
          </li>
          <li className="nav-item">
            <Dropdown>
              <Dropdown.Toggle id="dropdown-basic" className=" ">
                <span>
                  <i className="bi bi-person-circle p-1 fw-bolder h5"></i>
                </span>
                <span className="">Freight EG    </span>
              </Dropdown.Toggle>

              <Dropdown.Menu className="submenu">
                <Dropdown.Item href="/profile">Profile</Dropdown.Item>
                <Dropdown.Item href="/settings">Settings</Dropdown.Item>
                <Dropdown.Item href="/logout">Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </li>

        </ul>
        {/* <ul className={`nav-links ${isOpen ? "active" : ""}`}>
          <li><a href="/" className="active">Bid</a></li>
          <li><a href="/">POD</a></li>
          <li><a href="/">Vendor</a></li>
          <li><a href="/">User</a></li>
          
        </ul> */}
      </div>
    </nav>
  );
};

export default Navbar;

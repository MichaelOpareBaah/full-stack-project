import React, { useContext } from "react";
import logo from "../assets/kossLogo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdSearch } from "react-icons/io";
import { FaRegUser } from "react-icons/fa6";
import { NavLink } from "react-router";
import { HeaderContext } from "../layouts/Layout";
import { MdClose } from "react-icons/md";

export default function Header() {
  const styles = {
    width: "60px",
  };
  const styleIcons = {
    color: "#fff",
    fill: "#fff",
    fontSize: "30px",
    cursor: "pointer",
  };
  const { show, handleToggle } = useContext(HeaderContext);
  return (
    <div className="navbar">
      <div className="header-container">
        <NavLink
          to="/"
          onClick={show ? handleToggle : ""}
          className="logo-details"
        >
          <img src={logo} alt="" style={styles} />
          <h2 className="logo-caption">Alumni</h2>
        </NavLink>
        <div className="header-icons">
          {show ? (
            <MdClose style={styleIcons} onClick={handleToggle} />
          ) : (
            <GiHamburgerMenu style={styleIcons} onClick={handleToggle} />
          )}

          <FaRegUser style={styleIcons} />
          {!show ? <NavLink>Donate</NavLink> : ""}
        </div>
      </div>

      {/*className={`navbar-items ${show?'nav-items':''}`}  */}
      <div className={` ${show ? "nav-items" : "navbar-items"}`}>
        <NavLink to="/" onClick={show ? handleToggle : ""} className="nav-item">
          Home
        </NavLink>
        <NavLink
          to="events"
          onClick={show ? handleToggle : ""}
          className="nav-item"
        >
          Events
        </NavLink>
        <NavLink
          to="projects"
          onClick={show ? handleToggle : ""}
          className="nav-item"
        >
          Projects
        </NavLink>
        <NavLink
          to="executives"
          onClick={show ? handleToggle : ""}
          className="nav-item"
        >
          Executives
        </NavLink>
        <NavLink
          to="blogs"
          onClick={show ? handleToggle : ""}
          className="nav-item"
        >
          Blogs
        </NavLink>
        <NavLink
          to="contact"
          onClick={show ? handleToggle : ""}
          className="nav-item"
        >
          Contact Us
        </NavLink>
        <div className="donate-btn">
          <NavLink
            to="donate"
            onClick={show ? handleToggle : ""}
            className="donate-btn"
          >
            Donate
          </NavLink>
        </div>
      </div>
      {/* <div className="donate-btn">
        <NavLink
          to="donate"
          onClick={show ? handleToggle : ""}
          className="donate-btn"
        >
          Donate
        </NavLink>
      </div> */}
    </div>
  );
}

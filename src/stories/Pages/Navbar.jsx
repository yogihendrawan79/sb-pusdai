import React from "react";
import { Link } from "react-scroll";
import pusdaiijo from "../assets/pusdaiijo.png";
import logotikomdik from "../assets/logo-tkdsvg.svg";
import "../styles/index.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-white main-navigation fixed-top"
      style={{ backgroundColor: "white", zIndex: "1" }}
    >
      <div className="container">
        <a href="/" className="navbar-brand">
          <img src={pusdaiijo} alt="imagerute" className="logo-navbar" />
          <span>
            <img
              src={logotikomdik}
              alt="imagerute"
              className="logo-tikomdik px-4"
            />
          </span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ">
            <li className="nav-item px-3">
              <Link
                to="header-wraper"
                className="nav-link "
                spy={true}
                smooth={true}
                offset={-250}
                duration={200}
                style={{ color: "#24A19C", cursor: "pointer" }}
              >
                Home
              </Link>
            </li>
            <li className="nav-item px-3">
              <Link
                to="cara-menggunakan-wraper"
                className="nav-link "
                spy={true}
                smooth={true}
                offset={-200}
                duration={200}
                style={{ color: "#24A19C", cursor: "pointer" }}
              >
                Agenda
              </Link>
            </li>
            <li className="nav-item px-3">
              <Link
                to="learning-wraper"
                className="nav-link "
                spy={true}
                smooth={true}
                offset={-200}
                duration={200}
                style={{ color: "#24A19C", cursor: "pointer" }}
              >
                Learning
              </Link>
            </li>
            <li className="nav-item px-3">
              <Link
                to="about-wraper"
                className="nav-link "
                spy={true}
                smooth={true}
                offset={-200}
                duration={200}
                style={{ color: "#24A19C", cursor: "pointer" }}
              >
                About
              </Link>
            </li>
            <li className="nav-item px-3">
              <Link
                to="gallery-wraper"
                className="nav-link "
                spy={true}
                smooth={true}
                offset={-200}
                duration={200}
                style={{ color: "#24A19C", cursor: "pointer" }}
              >
                Gallery
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

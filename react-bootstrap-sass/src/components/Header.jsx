import React from "react";
import logo from "../assets/img/logo.png";

function Header() {
  return (
    <header id="header" class="header fixed-top">
      <div class="container-fluid container-xl d-flex align-items-center justify-content-between">
        <a href="index.html" class="logo d-flex align-items-center">
          <img src={logo} alt="" />
          <span>FlexStart</span>
        </a>

        <nav id="navbar" class="navbar">
          <ul>
            <li>
              <a class="nav-link scrollto active" href="#hero">
                Home
              </a>
            </li>
            <li>
              <a class="nav-link scrollto" href="#about">
                About
              </a>
            </li>
            <li>
              <a class="nav-link scrollto" href="#values">
                Values
              </a>
            </li>
            <li>
              <a class="getstarted scrollto" href="#about">
                Get Started
              </a>
            </li>
          </ul>
          <i class="bi bi-list mobile-nav-toggle"></i>
        </nav>
      </div>
    </header>
  );
}

export default Header;

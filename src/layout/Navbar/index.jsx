import React, { useState, useEffect } from "react";
import $ from "jquery";
import clsx from "clsx";
import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faChevronDown,
  faGlobe,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSideMenuActive, setIsSideMenuActive] = useState(false);

  const toggleNextMega = (e) => {
    const el = e.currentTarget;
    const $this = $(el);

    $this.next().slideToggle();
  };

  useEffect(() => {
    document.addEventListener("scroll", function () {
      if (window.pageYOffset > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
  }, []);

  const toggleSideMenu = () => {
    setIsSideMenuActive((prevState) => !prevState);
  };

  return (
    <div id="navbar" className={clsx(isScrolled && "scrolled")}>
      <div className={clsx("side-menu", isSideMenuActive && "active")}>
        <div className="title">
          <div className="logo">
            <img src="/assets/imgs/logo-gold.png" alt="logo" />
          </div>
          <FontAwesomeIcon onClick={toggleSideMenu} icon={faTimes} />
        </div>

        <div className="links">
          <button
            className="d-flex justify-content-between"
            onClick={toggleNextMega}
          >
            <span>INVESTMENT SOLUTIONS</span>
            <FontAwesomeIcon icon={faChevronDown} />
          </button>
          <div className="mega-menu" style={{ display: "none" }}>
            <Container className="mx-auto">
              <Row>
                <Col md={4}>
                  <h2>By Investor Life Stage</h2>

                  <div className="cards">
                    <a href="#0" className="link-card">
                      <div className="text">
                        <h3>Guardian Create™</h3>
                        <p>
                          Solutions designed for investors accumulating and
                          growing their wealth
                        </p>
                      </div>
                    </a>
                    <a href="#0" className="link-card">
                      <div className="text">
                        <h3>Guardian Prosper™</h3>
                        <p>
                          Solutions designed for investors that are in
                          decumulation stage of thier life and require steady
                          income
                        </p>
                      </div>
                    </a>
                  </div>
                </Col>
                <Col md={4}>
                  <h2>By Solution Type</h2>

                  <a href="#0">Exchange Traded Funds</a>
                  <a href="#0">Mutual Funds</a>
                </Col>
                <Col md={4}>
                  <h2>By Investment Strategy</h2>

                  <a href="#0">Sustainable Funds</a>
                </Col>
              </Row>
            </Container>
          </div>
          <a href="#0">INSIGHTS</a>
          <button
            className="d-flex justify-content-between"
            onClick={toggleNextMega}
          >
            <span>ABOUT US</span>
            <FontAwesomeIcon icon={faChevronDown} />
          </button>
          <div className="mega-menu" style={{ display: "none" }}>
            <Container className="mx-auto">
              <Row>
                <Col md={4}>
                  <a href="#0">Guadian Capital</a>
                  <a href="#0">Responsible Investing</a>
                </Col>
              </Row>
            </Container>
          </div>
          <a href="#0">INSIGHTS</a>
        </div>
      </div>
      <Container fluid>
        <div className="navbar-main d-flex justify-content-between align-items-center">
          <div className="logo">
            <img src="/assets/imgs/logo-white.png" alt="logo" />
          </div>
          <div className="nav-links d-md-flex d-none">
            <button className="nav-link">
              INVESTMENT SOLUTIONS{" "}
              <FontAwesomeIcon className="ms-2" icon={faChevronDown} />
              <div className="mega-menu">
                <Container className="mx-auto">
                  <Row>
                    <Col md={4}>
                      <h2>By Investor Life Stage</h2>

                      <div className="cards">
                        <a href="#0" className="link-card">
                          <div className="text">
                            <h3>Guardian Create™</h3>
                            <p>
                              Solutions designed for investors accumulating and
                              growing their wealth
                            </p>
                          </div>
                        </a>
                        <a href="#0" className="link-card">
                          <div className="text">
                            <h3>Guardian Prosper™</h3>
                            <p>
                              Solutions designed for investors that are in
                              decumulation stage of thier life and require
                              steady income
                            </p>
                          </div>
                        </a>
                      </div>
                    </Col>
                    <Col md={4}>
                      <h2>By Solution Type</h2>

                      <a href="#0">Exchange Traded Funds</a>
                      <a href="#0">Mutual Funds</a>
                    </Col>
                    <Col md={4}>
                      <h2>By Investment Strategy</h2>

                      <a href="#0">Sustainable Funds</a>
                    </Col>
                  </Row>
                </Container>
              </div>
            </button>
            <a href="/" className="nav-link">
              INSIGHTS
            </a>
            <button className="nav-link p-relative">
              ABOUT
              <FontAwesomeIcon className="ms-2" icon={faChevronDown} />
              <div className="mega-menu px-30" style={{ width: 220 }}>
                <a href="#0">Guardian Capital</a>
                <a href="#0">Responsible Investing</a>
              </div>
            </button>
            <a href="/" className="nav-link">
              CONTACT US
            </a>
          </div>

          <div className="d-flex align-items-center">
            <div className="select-container">
              <FontAwesomeIcon icon={faGlobe} color="#fff" />
              <select name="lang_choice_1" id="lang_choice_1">
                <option value="en">EN</option>
                <option value="fr">FR</option>
              </select>
            </div>

            <FontAwesomeIcon
              onClick={toggleSideMenu}
              className="d-block d-md-none"
              icon={faBars}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;

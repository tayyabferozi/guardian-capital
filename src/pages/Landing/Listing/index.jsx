import React from "react";
import { useState } from "react";
import { faSearch, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Container from "react-bootstrap/Container";
import Collapse from "react-bootstrap/Collapse";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import clsx from "clsx";

import FilterItem from "./FilterItem";
import DailyNavTable from "./DailyNavTable";
import PerformanceTable from "./PerformanceTable";
import DistrubutionsTable from "./DistrubutionsTable";

const Listing = () => {
  const [filtersActive, setFiltersActive] = useState(false);
  const [tableActive, setTableActive] = useState("daily-nav");

  return (
    <div id="listing">
      <div className="filter-container short-section mb-0">
        <div className="tabs">
          <button className="tab active">Mutual Funds</button>
          <button className="tab">ETFs</button>
        </div>
        <div
          className="filters"
          onClick={() => setFiltersActive(!filtersActive)}
        >
          <div className="search-container">
            <FontAwesomeIcon icon={faSearch} />
            <input type="search" placeholder="Search Funds" />
          </div>
          <button className="primary-btn">
            <span> Filter</span> <FontAwesomeIcon icon={faChevronDown} />
          </button>
        </div>
      </div>

      <Collapse in={filtersActive}>
        <div className="short-section">
          <div className="large-filters">
            <Container fluid>
              <Row>
                <Col md={6} xl={4}>
                  <Card>
                    <Card.Body>
                      <div className="title">
                        <div className="left">FUND GROUND</div>
                        <div className="right">
                          <button>Select All Clear</button>
                          <button>| Clear</button>
                        </div>
                      </div>

                      <div className="main">
                        <div className="filter-box-items">
                          <FilterItem className="create">Create</FilterItem>
                          <FilterItem className="prosper">Prosper</FilterItem>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6} xl={4}>
                  <Card>
                    <Card.Body>
                      <div className="title">
                        <div className="left">ASSET CLASS</div>
                        <div className="right">
                          <button>Select All Clear</button>
                          <button>| Clear</button>
                        </div>
                      </div>

                      <div className="main">
                        <label className="checkbox-container">
                          Alternative
                          <input type="checkbox" />
                          <span className="checkmark"></span>
                        </label>
                        <label className="checkbox-container">
                          Canadian Equity
                          <input type="checkbox" />
                          <span className="checkmark"></span>
                        </label>
                        <label className="checkbox-container">
                          Emerging Equity
                          <input type="checkbox" />
                          <span className="checkmark"></span>
                        </label>
                        <label className="checkbox-container">
                          Fixed Income
                          <input type="checkbox" />
                          <span className="checkmark"></span>
                        </label>
                        <label className="checkbox-container">
                          Global Equity
                          <input type="checkbox" />
                          <span className="checkmark"></span>
                        </label>
                        <label className="checkbox-container">
                          International Equity
                          <input type="checkbox" />
                          <span className="checkmark"></span>
                        </label>
                        <label className="checkbox-container">
                          Multi Asset Solutions
                          <input type="checkbox" />
                          <span className="checkmark"></span>
                        </label>
                        <label className="checkbox-container">
                          US Equity
                          <input type="checkbox" />
                          <span className="checkmark"></span>
                        </label>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6} xl={4}>
                  <Card>
                    <Card.Body>
                      <div className="title">
                        <div className="left">FUND SERIES</div>
                        <div className="right">
                          <button>Select All Clear</button>
                          <button>| Clear</button>
                        </div>
                      </div>

                      <div className="main">
                        <div className="filter-box-items">
                          <FilterItem>A</FilterItem>
                          <FilterItem>F</FilterItem>
                          <FilterItem>C</FilterItem>
                          <FilterItem>CCA</FilterItem>
                          <FilterItem>CCF</FilterItem>
                          <FilterItem>W</FilterItem>
                          <FilterItem>WF</FilterItem>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </Collapse>

      <div className="short-section mt-50 mt-767-0">
        <div className="list-tabs">
          <button
            className={clsx(tableActive === "daily-nav" && "active")}
            onClick={() => setTableActive("daily-nav")}
          >
            Daily NAV
          </button>
          <button
            className={clsx(tableActive === "perforamance" && "active")}
            onClick={() => setTableActive("perforamance")}
          >
            Performance
          </button>
          <button
            className={clsx(tableActive === "distributions" && "active")}
            onClick={() => setTableActive("distributions")}
          >
            Distributions
          </button>
        </div>

        <div className="table-container mt-30">
          <div
            className={clsx(tableActive === "daily-nav" && "d-block")}
            style={{ display: "none" }}
          >
            <DailyNavTable />
          </div>
          <div
            className={clsx(tableActive === "perforamance" && "d-block")}
            style={{ display: "none" }}
          >
            <PerformanceTable />
          </div>
          <div
            className={clsx(tableActive === "distributions" && "d-block")}
            style={{ display: "none" }}
          >
            <DistrubutionsTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listing;

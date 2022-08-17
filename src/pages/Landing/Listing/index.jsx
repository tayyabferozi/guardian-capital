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
import $ from "jquery";

import FilterItem from "./FilterItem";
import DailyNavMF from "./Tables/MF/DailyNav";
import PerformanceMF from "./Tables/MF/Performance";
import DistributionsMF from "./Tables/MF/Distributions";
import DailyNavETF from "./Tables/ETF/DailyNav";
import PerformanceETF from "./Tables/ETF/Performance";
import DistributionsETF from "./Tables/ETF/Distributions";
import { useEffect } from "react";

const Listing = () => {
  const [filtersActive, setFiltersActive] = useState(false);
  const [tableActive, setTableActive] = useState("mf-daily-nav");
  const [mfTabsActive, setMfTabsActive] = useState(true);

  const onSearch = (e) => {
    const { value } = e.target;
    const dailyNavTable1 = $("#daily-nav-table_mf");
    const performanceTable1 = $("#performance-table_mf");
    const distributionsTable1 = $("#distributions-table_mf");

    const dailyNavTable2 = $("#daily-nav-table_etf");
    const performanceTable2 = $("#performance-table_etf");
    const distributionsTable2 = $("#distributions-table_etf");

    dailyNavTable1.find("tbody tr").each(function (idx, el) {
      const $el = $(el);
      $el.addClass("d-none");

      if ($el.html().toLowerCase().includes(value)) $el.removeClass("d-none");
    });

    performanceTable1.find("tbody tr").each(function (idx, el) {
      const $el = $(el);
      $el.addClass("d-none");

      if ($el.html().toLowerCase().includes(value)) $el.removeClass("d-none");
    });

    distributionsTable1.find("tbody tr").each(function (idx, el) {
      const $el = $(el);
      $el.addClass("d-none");

      if ($el.html().toLowerCase().includes(value)) $el.removeClass("d-none");
    });

    dailyNavTable2.find("tbody tr").each(function (idx, el) {
      const $el = $(el);
      $el.addClass("d-none");

      if ($el.html().toLowerCase().includes(value)) $el.removeClass("d-none");
    });

    performanceTable2.find("tbody tr").each(function (idx, el) {
      const $el = $(el);
      $el.addClass("d-none");

      if ($el.html().toLowerCase().includes(value)) $el.removeClass("d-none");
    });

    distributionsTable2.find("tbody tr").each(function (idx, el) {
      const $el = $(el);
      $el.addClass("d-none");

      if ($el.html().toLowerCase().includes(value)) $el.removeClass("d-none");
    });
  };

  useEffect(() => {
    const dailyNavTable1 = $("#daily-nav-table_mf");
    const performanceTable1 = $("#performance-table_mf");
    const distributionsTable1 = $("#distributions-table_mf");

    const dailyNavTable2 = $("#daily-nav-table_etf");
    const performanceTable2 = $("#performance-table_etf");
    const distributionsTable2 = $("#distributions-table_etf");

    $(".fund-series.filter-box-items > button").click(function () {
      setTimeout(() => {
        let searchQuery = "";
        const activeBtns = $(".fund-series.filter-box-items > button.active");

        if (activeBtns.length > 0) {
          activeBtns.each(function (idx, el) {
            const text = $(el).text().trim();
            searchQuery += "|" + text;
            // searchQuery += "|\\b" + text + "\\b";
          });
          searchQuery = searchQuery.substring(1);
          // searchQuery = "(" + searchQuery + ")";
          searchQuery = "(^" + searchQuery + "$)";

          const searchQueryRexExp = new RegExp(searchQuery);

          // console.log(searchQuery);
          // console.log(dailyNavTable1);

          dailyNavTable1.find("tbody tr").each((idx, row) => {
            const $row = $(row);
            const $el = $($row.find("td:nth-child(3) span"));
            const matches = searchQueryRexExp.test($el.html());
            $row.addClass("d-none");
            if (matches) $row.removeClass("d-none");
          });

          distributionsTable1.find("tbody tr").each((idx, row) => {
            const $row = $(row);
            const $el = $($row.find("td:nth-child(2) span"));
            console.log($el);
            const matches = searchQueryRexExp.test($el.html());
            $row.addClass("d-none");
            if (matches) $row.removeClass("d-none");
          });

          performanceTable1.find("tbody tr").each((idx, row) => {
            const $row = $(row);
            const $el = $($row.find("td:nth-child(15)"));
            const matches = searchQueryRexExp.test($el.html());
            $row.addClass("d-none");
            if (matches) $row.removeClass("d-none");
          });
        } else {
          dailyNavTable1.find("tbody tr").each((idx, row) => {
            const $row = $(row);
            $row.removeClass("d-none");
          });
          distributionsTable1.find("tbody tr").each((idx, row) => {
            const $row = $(row);
            $row.removeClass("d-none");
          });
          performanceTable1.find("tbody tr").each((idx, row) => {
            const $row = $(row);
            $row.removeClass("d-none");
          });
          // dailyNavTable1.columns([2]).search("").draw();
          // distributionsTable1.columns([1]).search("").draw();
          // performanceTable1.columns([14]).search("").draw();
        }
      }, 100);
    });

    // $(".etf-hedged.filter-box-items > button").click(function () {
    //   let searchQuery = "";
    //   const activeBtns = $(".etf-hedged.filter-box-items > button.active");

    //   if (activeBtns.length > 0) {
    //     activeBtns.each(function (idx, el) {
    //       const text = $(el).text().trim();
    //       searchQuery += "|" + text;
    //       // searchQuery += "|\\b" + text + "\\b";
    //     });
    //     searchQuery = searchQuery.substring(1);
    //     // searchQuery = "(" + searchQuery + ")";
    //     searchQuery = "(^" + searchQuery + "$)";

    //     console.log(searchQuery);

    //     dailyNavTable2.columns([7]).search(`${searchQuery}`, true, false).draw();
    //     performanceTable2.columns([4]).search(`${searchQuery}`, true, false).draw();
    //     distributionsTable2
    //       .columns([7])
    //       .search(`${searchQuery}`, true, false)
    //       .draw();
    //   } else {
    //     dailyNavTable2.columns([7]).search("").draw();
    //     performanceTable2.columns([4]).search("").draw();
    //     distributionsTable2.columns([7]).search("").draw();
    //   }
    // });

    $(".journey-list.filter-box-items > button").click(function () {
      setTimeout(() => {
        let searchQuery = "";
        const activeBtns = $(".journey-list.filter-box-items > button.active");

        if (activeBtns.length > 0) {
          activeBtns.each(function (idx, el) {
            const text = $(el).text().trim();
            searchQuery += "|" + text[0];
          });
          searchQuery = searchQuery.substring(1);
          searchQuery = "(^" + searchQuery + "$)";

          // console.log(searchQuery);
          const searchQueryRexExp = new RegExp(searchQuery);

          dailyNavTable1.find("tbody tr").each((idx, row) => {
            const $row = $(row);
            const $el = $($row.find("td:nth-child(2) span"));
            const matches = searchQueryRexExp.test($el.html());
            $row.addClass("d-none");
            if (matches) $row.removeClass("d-none");
          });

          performanceTable1.find("tbody tr").each((idx, row) => {
            const $row = $(row);
            const $el = $($row.find("td:nth-child(14) span"));
            const matches = searchQueryRexExp.test($el.html());
            $row.addClass("d-none");
            if (matches) $row.removeClass("d-none");
          });

          distributionsTable1.find("tbody tr").each((idx, row) => {
            const $row = $(row);
            const $el = $($row.find("td:nth-child(8) span"));
            const matches = searchQueryRexExp.test($el.html());
            $row.addClass("d-none");
            if (matches) $row.removeClass("d-none");
          });

          // dailyNavTable1
          //   .columns([1])
          //   .search(`${searchQuery}`, true, false)
          //   .draw();
          // performanceTable1
          //   .columns([13])
          //   .search(`${searchQuery}`, true, false)
          //   .draw();
          // distributionsTable1
          //   .columns([7])
          //   .search(`${searchQuery}`, true, false)
          //   .draw();
        } else {
          dailyNavTable1.find("tbody tr").each((idx, row) => {
            const $row = $(row);
            $row.removeClass("d-none");
          });
          distributionsTable1.find("tbody tr").each((idx, row) => {
            const $row = $(row);
            $row.removeClass("d-none");
          });
          performanceTable1.find("tbody tr").each((idx, row) => {
            const $row = $(row);
            $row.removeClass("d-none");
          });
          // dailyNavTable1.columns([1]).search("").draw();
          // performanceTable1.columns([13]).search("").draw();
          // distributionsTable1.columns([7]).search("").draw();
        }
      }, 100);
    });

    $(".etf-journey-list.filter-box-items > button").click(function () {
      setTimeout(() => {
        let searchQuery = "";
        const activeBtns = $(
          ".etf-journey-list.filter-box-items > button.active"
        );

        if (activeBtns.length > 0) {
          activeBtns.each(function (idx, el) {
            const text = $(el).text().trim();
            searchQuery += "|" + text[0];
          });
          searchQuery = searchQuery.substring(1);
          searchQuery = "(^" + searchQuery + "$)";

          // console.log(searchQuery);
          const searchQueryRexExp = new RegExp(searchQuery);

          dailyNavTable2.find("tbody tr").each((idx, row) => {
            const $row = $(row);
            const $el = $($row.find("td:nth-child(2) span"));
            const matches = searchQueryRexExp.test($el.html());
            $row.addClass("d-none");
            if (matches) $row.removeClass("d-none");
          });

          performanceTable2.find("tbody tr").each((idx, row) => {
            const $row = $(row);
            const $el = $($row.find("td:nth-child(4) span"));
            const matches = searchQueryRexExp.test($el.html());
            $row.addClass("d-none");
            if (matches) $row.removeClass("d-none");
          });

          distributionsTable2.find("tbody tr").each((idx, row) => {
            const $row = $(row);
            const $el = $($row.find("td:nth-child(3) span"));
            const matches = searchQueryRexExp.test($el.html());
            $row.addClass("d-none");
            if (matches) $row.removeClass("d-none");
          });

          // dailyNavTable2
          //   .columns([1])
          //   .search(`${searchQuery}`, true, false)
          //   .draw();
          // performanceTable2
          //   .columns([3])
          //   .search(`${searchQuery}`, true, false)
          //   .draw();
          // distributionsTable2
          //   .columns([2])
          //   .search(`${searchQuery}`, true, false)
          //   .draw();
        } else {
          dailyNavTable2.find("tbody tr").each((idx, row) => {
            const $row = $(row);
            $row.removeClass("d-none");
          });
          distributionsTable2.find("tbody tr").each((idx, row) => {
            const $row = $(row);
            $row.removeClass("d-none");
          });
          performanceTable2.find("tbody tr").each((idx, row) => {
            const $row = $(row);
            $row.removeClass("d-none");
          });
          // dailyNavTable2.columns([1]).search("").draw();
          // performanceTable2.columns([3]).search("").draw();
          // distributionsTable2.columns([2]).search("").draw();
        }
      }, 100);
    });

    $(".assets-list input").change(function () {
      setTimeout(() => {
        let searchQuery = "";
        const activeInputs = $(".assets-list input:checked");

        if (activeInputs.length > 0) {
          activeInputs.each(function (idx, el) {
            const text = $(el).attr("id").replace(/-/g, " ").replace(/_/g, ".");
            searchQuery += "|" + text;
          });
          searchQuery = searchQuery.substring(1);
          searchQuery = "(^" + searchQuery + "$)";

          const searchQueryRexExp = new RegExp(searchQuery);

          // console.log(searchQuery);

          dailyNavTable1.find("tbody tr").each((idx, row) => {
            const $row = $(row);
            const $el = $($row.find("td:nth-child(5)"));
            const matches = searchQueryRexExp.test($el.html());
            $row.addClass("d-none");
            if (matches) $row.removeClass("d-none");
          });

          performanceTable1.find("tbody tr").each((idx, row) => {
            const $row = $(row);
            const $el = $($row.find("td:nth-child(13)"));
            const matches = searchQueryRexExp.test($el.html());
            $row.addClass("d-none");
            if (matches) $row.removeClass("d-none");
          });

          distributionsTable1.find("tbody tr").each((idx, row) => {
            const $row = $(row);
            const $el = $($row.find("td:nth-child(7)"));
            const matches = searchQueryRexExp.test($el.html());
            $row.addClass("d-none");
            if (matches) $row.removeClass("d-none");
          });

          // dailyNavTable1
          //   .columns([4])
          //   .search(`${searchQuery}`, true, false)
          //   .draw();
          // performanceTable1
          //   .columns([12])
          //   .search(`${searchQuery}`, true, false)
          //   .draw();
          // distributionsTable1
          //   .columns([6])
          //   .search(`${searchQuery}`, true, false)
          //   .draw();
        } else {
          dailyNavTable1.find("tbody tr").each((idx, row) => {
            const $row = $(row);
            $row.removeClass("d-none");
          });
          distributionsTable1.find("tbody tr").each((idx, row) => {
            const $row = $(row);
            $row.removeClass("d-none");
          });
          performanceTable1.find("tbody tr").each((idx, row) => {
            const $row = $(row);
            $row.removeClass("d-none");
          });
          // dailyNavTable1.columns([4]).search("").draw();
          // performanceTable1.columns([12]).search("").draw();
          // distributionsTable1.columns([6]).search("").draw();
        }
      }, 100);
    });

    $(".etf-assets-list input").change(function () {
      setTimeout(() => {
        let searchQuery = "";
        const activeInputs = $(".etf-assets-list input:checked");

        // console.log(activeInputs);

        if (activeInputs.length > 0) {
          activeInputs.each(function (idx, el) {
            const text = $(el)
              .attr("id")
              .replace(/etf-/g, "")
              .replace(/-/g, " ")
              .replace(/_/g, ".");
            searchQuery += "|" + text;
          });
          searchQuery = searchQuery.substring(1);
          searchQuery = "(^" + searchQuery + "$)";

          const searchQueryRexExp = new RegExp(searchQuery);

          // console.log(searchQuery);

          dailyNavTable2.find("tbody tr").each((idx, row) => {
            const $row = $(row);
            const $el = $($row.find("td:nth-child(5)"));
            const matches = searchQueryRexExp.test($el.html());
            $row.addClass("d-none");
            if (matches) $row.removeClass("d-none");
          });

          performanceTable2.find("tbody tr").each((idx, row) => {
            const $row = $(row);
            const $el = $($row.find("td:nth-child(3)"));
            const matches = searchQueryRexExp.test($el.html());
            $row.addClass("d-none");
            if (matches) $row.removeClass("d-none");
          });

          distributionsTable2.find("tbody tr").each((idx, row) => {
            const $row = $(row);
            const $el = $($row.find("td:nth-child(2)"));
            const matches = searchQueryRexExp.test($el.html());
            $row.addClass("d-none");
            if (matches) $row.removeClass("d-none");
          });

          // dailyNavTable2
          //   .columns([4])
          //   .search(`${searchQuery}`, true, false)
          //   .draw();
          // performanceTable2
          //   .columns([2])
          //   .search(`${searchQuery}`, true, false)
          //   .draw();
          // distributionsTable2
          //   .columns([1])
          //   .search(`${searchQuery}`, true, false)
          //   .draw();
        } else {
          dailyNavTable2.find("tbody tr").each((idx, row) => {
            const $row = $(row);
            $row.removeClass("d-none");
          });
          distributionsTable2.find("tbody tr").each((idx, row) => {
            const $row = $(row);
            $row.removeClass("d-none");
          });
          performanceTable2.find("tbody tr").each((idx, row) => {
            const $row = $(row);
            $row.removeClass("d-none");
          });
          // dailyNavTable2.columns([4]).search("").draw();
          // performanceTable2.columns([2]).search("").draw();
          // distributionsTable2.columns([1]).search("").draw();
        }
      }, 100);
    });
    // });

    $(".fund-group-select-all").click(function () {
      const $this = $(this);

      $this
        .parents(".card")
        .find(".filter-box-item")
        .each(function (idx, el) {
          const $this2 = $(el);

          if (!$this2.hasClass("active")) {
            $this2.click();
          }
        });
    });

    $(".fund-group-clear-all").click(function () {
      const $this = $(this);

      $this
        .parents(".card")
        .find(".filter-box-item")
        .each(function (idx, el) {
          const $this2 = $(el);

          if ($this2.hasClass("active")) {
            $this2.click();
          }
        });
    });

    $(".asset-class-select-all").click(function () {
      const $this = $(this);

      $this
        .parents(".card")
        .find("input[type='checkbox']")
        .each(function (idx, el) {
          const $this2 = $(el);

          if (!$this2.is(":checked")) {
            $this2.click();
          }
        });
    });

    $(".asset-class-clear-all").click(function () {
      const $this = $(this);

      $this
        .parents(".card")
        .find("input[type='checkbox']")
        .each(function (idx, el) {
          const $this2 = $(el);
          console.log($this.is(":checked"));

          if ($this2.is(":checked")) {
            $this2.click();
          }
        });
    });

    $(".fund-series-select-all").click(function () {
      const $this = $(this);

      $this
        .parents(".card")
        .find(".filter-box-item")
        .each(function (idx, el) {
          const $this2 = $(el);

          if (!$this2.hasClass("active")) {
            $this2.click();
          }
        });
    });

    $(".fund-series-clear-all").click(function () {
      const $this = $(this);

      $this
        .parents(".card")
        .find(".filter-box-item")
        .each(function (idx, el) {
          const $this2 = $(el);

          if ($this2.hasClass("active")) {
            $this2.click();
          }
        });
    });

    $(".hedged-select-all").click(function () {
      const $this = $(this);

      $this
        .parents(".card")
        .find(".filter-box-item")
        .each(function (idx, el) {
          const $this2 = $(el);

          if (!$this2.hasClass("active")) {
            $this2.click();
          }
        });
    });

    $(".hedged-clear-all").click(function () {
      const $this = $(this);

      $this
        .parents(".card")
        .find(".filter-box-item")
        .each(function (idx, el) {
          const $this2 = $(el);

          if ($this2.hasClass("active")) {
            $this2.click();
          }
        });
    });
  }, []);

  useEffect(() => {
    setTimeout(function () {
      $("th")
        .off("click")
        .on("click", function () {
          var table = $(this).parents("table").eq(0);
          var rows = table
            .find("tr:gt(0)")
            .toArray()
            .sort(comparer($(this).index()));
          this.asc = !this.asc;
          console.log(this.asc);
          if (!this.asc) {
            rows = rows.reverse();
          }
          for (var i = 0; i < rows.length; i++) {
            table.append(rows[i]);
          }
        });
      function comparer(index) {
        return function (a, b) {
          var valA = getCellValue(a, index),
            valB = getCellValue(b, index);
          return $.isNumeric(valA) && $.isNumeric(valB)
            ? valA - valB
            : valA.toString().localeCompare(valB);
        };
      }
      function getCellValue(row, index) {
        return $(row).children("td").eq(index).text();
      }
    }, 500);
  }, []);

  return (
    <div id="listing">
      <div className="filter-container short-section mb-0">
        <div className="tabs">
          <button
            className={clsx(mfTabsActive && "active", "tab")}
            onClick={() => {
              setMfTabsActive(true);
              setTableActive("mf-daily-nav");
            }}
          >
            Mutual Funds
          </button>
          <button
            className={clsx(!mfTabsActive && "active", "tab")}
            onClick={() => {
              setMfTabsActive(false);
              setTableActive("etf-daily-nav");
            }}
          >
            ETFs
          </button>
        </div>
        <div className="filters">
          <div className="search-container">
            <FontAwesomeIcon icon={faSearch} />
            <input
              type="search"
              onChange={onSearch}
              placeholder="Search Funds"
            />
          </div>
          <button
            onClick={() => setFiltersActive(!filtersActive)}
            className="primary-btn"
          >
            <span> Filter</span> <FontAwesomeIcon icon={faChevronDown} />
          </button>
        </div>
      </div>

      <div className={clsx(!mfTabsActive && "d-none")}>
        {" "}
        <Collapse in={filtersActive}>
          <div className="short-section">
            <div className="large-filters">
              <Container fluid>
                <Row>
                  <Col md={6} xl={4}>
                    <Card>
                      <Card.Body>
                        <div className="title">
                          <div className="left">FUND GROUP</div>
                          <div className="right">
                            <button className="fund-group-select-all">
                              Select All
                            </button>
                            <button className="fund-group-clear-all">
                              | Clear
                            </button>
                          </div>
                        </div>

                        <div className="main">
                          <div className="journey-list filter-box-items">
                            {[
                              {
                                title: "Create",
                                className: "create",
                              },
                              {
                                title: "Prosper",
                                className: "prosper",
                              },
                            ].map((el, idx) => {
                              return (
                                <FilterItem
                                  key={el.title}
                                  className={el.className}
                                >
                                  {el.title}
                                </FilterItem>
                              );
                            })}
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
                            <button className="asset-class-select-all">
                              Select All
                            </button>
                            <button className="asset-class-clear-all">
                              | Clear
                            </button>
                          </div>
                        </div>

                        <div className="assets-list main">
                          {[
                            {
                              id: "Alternative",
                              text: "Alternative",
                            },
                            {
                              id: "Canadian-Equity",
                              text: "Canadian Equity",
                            },
                            {
                              id: "Emerging-Equity",
                              text: "Emerging Equity",
                            },
                            {
                              id: "Fixed-Income",
                              text: "Fixed Income",
                            },
                            {
                              id: "Global-Equity",
                              text: "Global Equity",
                            },
                            {
                              id: "International-Equity",
                              text: "International Equity",
                            },
                            {
                              id: "Multi-Asset-Solutions",
                              text: "Multi Asset Solutions",
                            },
                            {
                              id: "US-Equity",
                              text: "U.S. Equity",
                            },
                          ].map((el, idx) => {
                            return (
                              <label
                                key={el.id}
                                htmlFor={el.id}
                                className="checkbox-container"
                              >
                                {el.text}
                                <input id={el.id} type="checkbox" />
                                <span className="checkmark"></span>
                              </label>
                            );
                          })}
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
                            <button className="fund-series-select-all">
                              Select All
                            </button>
                            <button className="fund-series-clear-all">
                              | Clear
                            </button>
                          </div>
                        </div>

                        <div className="main">
                          <div className="fund-series filter-box-items">
                            {[
                              {
                                title: "A",
                              },
                              {
                                title: "F",
                              },
                              {
                                title: "C",
                              },
                              {
                                title: "CCA",
                              },
                              {
                                title: "CCF",
                              },
                              {
                                title: "W",
                              },
                              {
                                title: "WF",
                              },
                            ].map((el, idx) => {
                              return (
                                <FilterItem key={el.title}>
                                  {el.title}
                                </FilterItem>
                              );
                            })}
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
      </div>

      <div className={clsx(mfTabsActive && "d-none")}>
        <Collapse in={filtersActive}>
          <div className="short-section">
            <div className="large-filters">
              <Container fluid>
                <Row>
                  <Col md={6} xl={4}>
                    <Card>
                      <Card.Body>
                        <div className="title">
                          <div className="left">FUND GROUP</div>
                          <div className="right">
                            <button className="fund-group-select-all">
                              Select All
                            </button>
                            <button className="fund-group-clear-all">
                              | Clear
                            </button>
                          </div>
                        </div>

                        <div className="main">
                          <div className="etf-journey-list filter-box-items">
                            {[
                              {
                                title: "Create",
                                className: "create",
                              },
                              {
                                title: "Prosper",
                                className: "prosper",
                              },
                            ].map((el, idx) => {
                              return (
                                <FilterItem
                                  key={"etf" + el.title}
                                  className={el.className}
                                >
                                  {el.title}
                                </FilterItem>
                              );
                            })}
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
                            <button className="asset-class-select-all">
                              Select All
                            </button>
                            <button className="asset-class-clear-all">
                              | Clear
                            </button>
                          </div>
                        </div>

                        <div className="etf-assets-list main">
                          {[
                            {
                              id: "etf-Canada-Equity",
                              text: "Canadian Equity",
                            },
                            {
                              id: "etf-Canada-Fixed-Income",
                              text: "Canada Fixed Income",
                            },
                            {
                              id: "etf-Emerging-Markets-Equity",
                              text: "Emerging Markets Equity",
                            },
                            {
                              id: "etf-Global-Equity",
                              text: "Global Equity",
                            },
                            {
                              id: "etf-U_S_-Equity",
                              text: "U.S. Equity",
                            },
                          ].map((el, idx) => {
                            return (
                              <label
                                key={el.id}
                                htmlFor={el.id}
                                className="checkbox-container"
                              >
                                {el.text}
                                <input id={el.id} type="checkbox" />
                                <span className="checkmark"></span>
                              </label>
                            );
                          })}
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
                            <button className="fund-series-select-all">
                              Select All
                            </button>
                            <button className="fund-series-clear-all">
                              | Clear
                            </button>
                          </div>
                        </div>

                        <div className="main">
                          <div className="filter-box-items">
                            {[
                              {
                                title: "Hedged",
                              },
                              {
                                title: "Unhedged",
                              },
                            ].map((el, idx) => {
                              return (
                                <FilterItem key={el.title}>
                                  {el.title}
                                </FilterItem>
                              );
                            })}
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
      </div>

      <div className="short-section mt-50 mt-767-0">
        {mfTabsActive ? (
          <div className="list-tabs">
            <button
              className={clsx(tableActive === "mf-daily-nav" && "active")}
              onClick={() => setTableActive("mf-daily-nav")}
            >
              Daily NAV
            </button>
            <button
              className={clsx(tableActive === "mf-performance" && "active")}
              onClick={() => setTableActive("mf-performance")}
            >
              Performance
            </button>
            <button
              className={clsx(tableActive === "mf-distributions" && "active")}
              onClick={() => setTableActive("mf-distributions")}
            >
              Distributions
            </button>
          </div>
        ) : (
          <div className="list-tabs">
            <button
              className={clsx(tableActive === "etf-daily-nav" && "active")}
              onClick={() => setTableActive("etf-daily-nav")}
            >
              Daily NAV
            </button>
            <button
              className={clsx(tableActive === "etf-performance" && "active")}
              onClick={() => setTableActive("etf-performance")}
            >
              Performance
            </button>
            <button
              className={clsx(tableActive === "etf-distributions" && "active")}
              onClick={() => setTableActive("etf-distributions")}
            >
              Distributions
            </button>
          </div>
        )}

        <div className="table-container mt-30">
          {
            <div
              className={clsx(
                tableActive === "mf-daily-nav" ? "d-block" : "d-none"
              )}
            >
              <DailyNavMF />
            </div>
          }
          {
            <div
              className={clsx(
                tableActive === "mf-performance" ? "d-block" : "d-none"
              )}
            >
              <PerformanceMF />
            </div>
          }
          {
            <div
              className={clsx(
                tableActive === "mf-distributions" ? "d-block" : "d-none"
              )}
            >
              <DistributionsMF />
            </div>
          }
          {
            <div
              className={clsx(
                tableActive === "etf-daily-nav" ? "d-block" : "d-none"
              )}
            >
              <DailyNavETF />
            </div>
          }
          {
            <div
              className={clsx(
                tableActive === "etf-performance" ? "d-block" : "d-none"
              )}
            >
              <PerformanceETF />
            </div>
          }
          {
            <div
              className={clsx(
                tableActive === "etf-distributions" ? "d-block" : "d-none"
              )}
            >
              <DistributionsETF />
            </div>
          }
        </div>

        {/* <div className="table-container mt-30">
          <div
            className={clsx(tableActive === "daily-nav" && "d-block")}
            style={{ display: "none" }}
          >
            <DailyNavTable />
          </div>
          <div
            className={clsx(tableActive === "performance" && "d-block")}
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
        </div> */}
      </div>
    </div>
  );
};

export default Listing;

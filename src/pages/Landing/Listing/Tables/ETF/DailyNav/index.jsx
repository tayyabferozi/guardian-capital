import React from "react";

const DailyNav = () => {
  return (
    <table className="daily-nav-table w-100" id="daily-nav-table_etf">
      <thead>
        <tr>
          <th>Fund Name</th>
          <th>Type</th>
          <th>ETF Ticker</th>
          <th style={{ display: "none" }}>Custom Asset</th>
          <th>Asset Class</th>
          <th>Nav Date</th>
          <th>NAV</th>
          <th>Percent Change</th>
          <th style={{ display: "none" }}>Type</th>
        </tr>
      </thead>
      <tbody>
        <tr className="odd">
          <td className="sorting_1">
            <a href="https://www.guardiancapital.com/investmentsolutions/funds/GCBD">
              Guardian Canadian Bond ETF
            </a>
          </td>
          <td
            className="tooptipetf"
            title="Guardian Prosperᵀᴹ: Solutions for Decumulation."
          >
            <span className="create-icon">P</span>
          </td>
          <td>GCBD</td>
          <td style={{ display: "none" }}>Canada Fixed Income</td>
          <td>Canada Fixed Income</td>
          <td>08/10/2022</td>
          <td>18.18</td>
          <td>0.34</td>
          <td style={{ display: "none" }}></td>
        </tr>
        <tr className="even">
          <td className="sorting_1">
            <a href="https://www.guardiancapital.com/investmentsolutions/funds/GCSC">
              Guardian Canadian Sector Controlled Equity Fund
            </a>
          </td>
          <td
            className="tooptipetf"
            title="Guardian Createᵀᴹ: Solutions for Accumulation."
          >
            <span className="prosper-icon">C</span>
          </td>
          <td>GCSC</td>
          <td style={{ display: "none" }}>Canada Equity</td>
          <td>Canada Equity</td>
          <td>08/10/2022</td>
          <td>11.08</td>
          <td>1.74</td>
          <td style={{ display: "none" }}></td>
        </tr>
        <tr className="odd">
          <td className="sorting_1">
            <a href="https://www.guardiancapital.com/investmentsolutions/funds/GDEP">
              Guardian Directed Equity Path ETF - Hedged
            </a>
          </td>
          <td
            className="tooptipetf"
            title="Guardian Prosperᵀᴹ: Solutions for Decumulation."
          >
            <span className="create-icon">P</span>
          </td>
          <td>GDEP</td>
          <td style={{ display: "none" }}>Global Equity</td>
          <td>Global Equity</td>
          <td>08/10/2022</td>
          <td>18.63</td>
          <td>0.29</td>
          <td style={{ display: "none" }}></td>
        </tr>
        <tr className="even">
          <td className="sorting_1">
            <a href="https://www.guardiancapital.com/investmentsolutions/funds/GDEP.B">
              Guardian Directed Equity Path ETF - Unhedged
            </a>
          </td>
          <td
            className="tooptipetf"
            title="Guardian Prosperᵀᴹ: Solutions for Decumulation."
          >
            <span className="create-icon">P</span>
          </td>
          <td>GDEP.B</td>
          <td style={{ display: "none" }}>Global Equity</td>
          <td>Global Equity</td>
          <td>08/10/2022</td>
          <td>18.11</td>
          <td>0.14</td>
          <td style={{ display: "none" }}></td>
        </tr>
        <tr className="odd">
          <td className="sorting_1">
            <a href="https://www.guardiancapital.com/investmentsolutions/funds/GDPY">
              Guardian Directed Premium Yield ETF - Hedged
            </a>
          </td>
          <td
            className="tooptipetf"
            title="Guardian Prosperᵀᴹ: Solutions for Decumulation."
          >
            <span className="create-icon">P</span>
          </td>
          <td>GDPY</td>
          <td style={{ display: "none" }}>Global Equity</td>
          <td>Global Equity</td>
          <td>08/10/2022</td>
          <td>20.02</td>
          <td>1.00</td>
          <td style={{ display: "none" }}></td>
        </tr>
        <tr className="even">
          <td className="sorting_1">
            <a href="https://www.guardiancapital.com/investmentsolutions/funds/GDPY.B">
              Guardian Directed Premium Yield ETF - Unhedged
            </a>
          </td>
          <td
            className="tooptipetf"
            title="Guardian Prosperᵀᴹ: Solutions for Decumulation."
          >
            <span className="create-icon">P</span>
          </td>
          <td>GDPY.B</td>
          <td style={{ display: "none" }}>Global Equity</td>
          <td>Global Equity</td>
          <td>08/10/2022</td>
          <td>18.96</td>
          <td>0.68</td>
          <td style={{ display: "none" }}></td>
        </tr>
        <tr className="odd">
          <td className="sorting_1">
            <a href="https://www.guardiancapital.com/investmentsolutions/funds/GGAC">
              Guardian Fundamental All Country Equity ETF
            </a>
          </td>
          <td
            className="tooptipetf"
            title="Guardian Createᵀᴹ: Solutions for Accumulation."
          >
            <span className="prosper-icon">C</span>
          </td>
          <td>GGAC</td>
          <td style={{ display: "none" }}>Global Equity</td>
          <td>Global Equity</td>
          <td>08/10/2022</td>
          <td>18.13</td>
          <td>0.68</td>
          <td style={{ display: "none" }}></td>
        </tr>
        <tr className="even">
          <td className="sorting_1">
            <a href="https://www.guardiancapital.com/investmentsolutions/funds/GGEM">
              Guardian Fundamental Emerging Markets Equity ETF
            </a>
          </td>
          <td
            className="tooptipetf"
            title="Guardian Createᵀᴹ: Solutions for Accumulation."
          >
            <span className="prosper-icon">C</span>
          </td>
          <td>GGEM</td>
          <td style={{ display: "none" }}>Emerging Markets Equity</td>
          <td>Emerging Markets Equity</td>
          <td>08/10/2022</td>
          <td>14.08</td>
          <td>0.31</td>
          <td style={{ display: "none" }}></td>
        </tr>
        <tr className="odd">
          <td className="sorting_1">
            <a href="https://www.guardiancapital.com/investmentsolutions/funds/GIQG">
              Guardian i3 Global Quality Growth ETF - Hedged
            </a>
          </td>
          <td
            className="tooptipetf"
            title="Guardian Createᵀᴹ: Solutions for Accumulation."
          >
            <span className="prosper-icon">C</span>
          </td>
          <td>GIQG</td>
          <td style={{ display: "none" }}>Global Equity</td>
          <td>Global Equity</td>
          <td>08/10/2022</td>
          <td>20.65</td>
          <td>1.68</td>
          <td style={{ display: "none" }}></td>
        </tr>
        <tr className="even">
          <td className="sorting_1">
            <a href="https://www.guardiancapital.com/investmentsolutions/funds/GIQG.B">
              Guardian i3 Global Quality Growth ETF - Unhedged
            </a>
          </td>
          <td
            className="tooptipetf"
            title="Guardian Createᵀᴹ: Solutions for Accumulation."
          >
            <span className="prosper-icon">C</span>
          </td>
          <td>GIQG.B</td>
          <td style={{ display: "none" }}>Global Equity</td>
          <td>Global Equity</td>
          <td>08/10/2022</td>
          <td>20.20</td>
          <td>1.23</td>
          <td style={{ display: "none" }}></td>
        </tr>
        <tr className="odd">
          <td className="sorting_1">
            <a href="https://www.guardiancapital.com/investmentsolutions/funds/GIGR">
              Guardian i3 Global REIT ETF - Hedged
            </a>
          </td>
          <td
            className="tooptipetf"
            title="Guardian Createᵀᴹ: Solutions for Accumulation."
          >
            <span className="prosper-icon">C</span>
          </td>
          <td>GIGR</td>
          <td style={{ display: "none" }}>Global Equity</td>
          <td>Global Equity</td>
          <td>08/10/2022</td>
          <td>20.12</td>
          <td>1.14</td>
          <td style={{ display: "none" }}></td>
        </tr>
        <tr className="even">
          <td className="sorting_1">
            <a href="https://www.guardiancapital.com/investmentsolutions/funds/GIGR.B">
              Guardian i3 Global REIT ETF - Unhedged
            </a>
          </td>
          <td
            className="tooptipetf"
            title="Guardian Createᵀᴹ: Solutions for Accumulation."
          >
            <span className="prosper-icon">C</span>
          </td>
          <td>GIGR.B</td>
          <td style={{ display: "none" }}>Global Equity</td>
          <td>Global Equity</td>
          <td>08/10/2022</td>
          <td>19.59</td>
          <td>0.71</td>
          <td style={{ display: "none" }}></td>
        </tr>
        <tr className="odd">
          <td className="sorting_1">
            <a href="https://www.guardiancapital.com/investmentsolutions/funds/GIQU">
              Guardian i3 US Quality Growth ETF - Hedged
            </a>
          </td>
          <td
            className="tooptipetf"
            title="Guardian Createᵀᴹ: Solutions for Accumulation."
          >
            <span className="prosper-icon">C</span>
          </td>
          <td>GIQU</td>
          <td style={{ display: "none" }}>U.S. Equity</td>
          <td>U.S. Equity</td>
          <td>08/10/2022</td>
          <td>20.99</td>
          <td>1.84</td>
          <td style={{ display: "none" }}></td>
        </tr>
        <tr className="even">
          <td className="sorting_1">
            <a href="https://www.guardiancapital.com/investmentsolutions/funds/GIQU.B">
              Guardian i3 US Quality Growth ETF - Unhedged
            </a>
          </td>
          <td
            className="tooptipetf"
            title="Guardian Createᵀᴹ: Solutions for Accumulation."
          >
            <span className="prosper-icon">C</span>
          </td>
          <td>GIQU.B</td>
          <td style={{ display: "none" }}>U.S. Equity</td>
          <td>U.S. Equity</td>
          <td>08/10/2022</td>
          <td>20.80</td>
          <td>1.35</td>
          <td style={{ display: "none" }}></td>
        </tr>
      </tbody>
    </table>
  );
};

export default DailyNav;

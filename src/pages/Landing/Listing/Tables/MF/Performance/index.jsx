import React from "react";

const Performance = () => {
  return (
    <table className="performance-table w-100" id="performance-table_mf">
      <thead>
        <tr>
          <th>Fund Name</th>
          <th>As of Date</th>
          <th>1M</th>
          <th>3M</th>
          <th>6M</th>
          <th>YTD</th>
          <th>1Y</th>
          <th>3Y</th>
          <th>5Y</th>
          <th>10Y</th>
          <th>SI</th>
          <th>SI Date</th>
          <th style={{ display: "none" }}>Asset</th>
          <th style={{ display: "none" }}>type</th>
          <th style={{ display: "none" }}>Series</th>
        </tr>
      </thead>
      <tbody>
        <tr className="odd">
          <td style={{ width: "35%" }} className="sorting_1">
            <a href="https://www.guardiancapital.com/investmentsolutions/funds/gcg-595/">
              GC One Equity Portfolio A
            </a>
          </td>
          <td>07/31/2022</td>
          <td>5.03</td>
          <td>-1.91</td>
          <td>-7.80</td>
          <td>-11.56</td>
          <td>-4.67</td>
          <td>5.90</td>
          <td>-</td>
          <td>-</td>
          <td>5.36</td>
          <td>01/15/2018</td>
          <td style={{ display: "none" }}>Multi Asset Solutions</td>
          <td style={{ display: "none" }}>
            <span className="prosper-icon">C</span>
          </td>
          <td style={{ display: "none" }}>A</td>
        </tr>
        <tr className="even">
          <td style={{ width: "35%" }} className="sorting_1">
            <a href="https://www.guardiancapital.com/investmentsolutions/funds/gcg-596/">
              GC One Fixed Income Portfolio A
            </a>
          </td>
          <td>07/31/2022</td>
          <td>3.25</td>
          <td>1.07</td>
          <td>-5.47</td>
          <td>-7.77</td>
          <td>-8.53</td>
          <td>-0.70</td>
          <td>-</td>
          <td>-</td>
          <td>1.14</td>
          <td>01/15/2018</td>
          <td style={{ display: "none" }}>Multi Asset Solutions</td>
          <td style={{ display: "none" }}>
            <span className="create-icon">P</span>
          </td>
          <td style={{ display: "none" }}>A</td>
        </tr>
        <tr className="odd">
          <td style={{ width: "35%" }} className="sorting_1">
            <a href="https://www.guardiancapital.com/investmentsolutions/funds/gcg-596/">
              GC One Fixed Income Portfolio A
            </a>
          </td>
          <td>07/31/2022</td>
          <td>3.25</td>
          <td>1.07</td>
          <td>-5.47</td>
          <td>-7.77</td>
          <td>-8.53</td>
          <td>-0.70</td>
          <td>-</td>
          <td>-</td>
          <td>1.14</td>
          <td>01/15/2018</td>
          <td style={{ display: "none" }}>Multi Asset Solutions</td>
          <td style={{ display: "none" }}>
            <span className="create-icon">P</span>
          </td>
          <td style={{ display: "none" }}>A</td>
        </tr>
        <tr className="even">
          <td style={{ width: "35%" }} className="sorting_1">
            <a href="https://www.guardiancapital.com/investmentsolutions/funds/gcg-554/">
              Guardian Canadian Bond Fund A
            </a>
          </td>
          <td>07/31/2022</td>
          <td>4.19</td>
          <td>1.67</td>
          <td>-5.67</td>
          <td>-8.74</td>
          <td>-9.13</td>
          <td>-1.43</td>
          <td>0.81</td>
          <td>-</td>
          <td>1.62</td>
          <td>09/30/2013</td>
          <td style={{ display: "none" }}>Fixed Income</td>
          <td style={{ display: "none" }}>
            <span className="create-icon">P</span>
          </td>
          <td style={{ display: "none" }}>A</td>
        </tr>
        <tr className="odd">
          <td style={{ width: "35%" }} className="sorting_1">
            <a href="https://www.guardiancapital.com/investmentsolutions/funds/gcg-654/">
              Guardian Canadian Bond Fund F
            </a>
          </td>
          <td>07/31/2022</td>
          <td>4.23</td>
          <td>1.83</td>
          <td>-5.40</td>
          <td>-8.43</td>
          <td>-8.61</td>
          <td>-0.74</td>
          <td>-</td>
          <td>-</td>
          <td>-0.97</td>
          <td>09/19/2019</td>
          <td style={{ display: "none" }}>Fixed Income</td>
          <td style={{ display: "none" }}>
            <span className="create-icon">P</span>
          </td>
          <td style={{ display: "none" }}>F</td>
        </tr>
        <tr className="even">
          <td style={{ width: "35%" }} className="sorting_1">
            <a href="https://www.guardiancapital.com/investmentsolutions/funds/gcg-563/">
              Guardian Canadian Equity Income Fund W
            </a>
          </td>
          <td>07/31/2022</td>
          <td>4.09</td>
          <td>-3.42</td>
          <td>-0.88</td>
          <td>2.90</td>
          <td>8.10</td>
          <td>9.09</td>
          <td>5.81</td>
          <td>6.05</td>
          <td>6.21</td>
          <td>05/28/2012</td>
          <td style={{ display: "none" }}>Canadian Equity</td>
          <td style={{ display: "none" }}>
            <span className="create-icon">P</span>
          </td>
          <td style={{ display: "none" }}>W</td>
        </tr>
        <tr className="odd">
          <td style={{ width: "35%" }} className="sorting_1">
            <a href="https://www.guardiancapital.com/investmentsolutions/funds/gcg-592/">
              Guardian Canadian Focused Equity Fund A
            </a>
          </td>
          <td>07/31/2022</td>
          <td>5.01</td>
          <td>-2.53</td>
          <td>-7.57</td>
          <td>-6.73</td>
          <td>-1.59</td>
          <td>3.80</td>
          <td>4.90</td>
          <td>-</td>
          <td>6.23</td>
          <td>04/22/2016</td>
          <td style={{ display: "none" }}>Canadian Equity</td>
          <td style={{ display: "none" }}>
            <span className="prosper-icon">C</span>
          </td>
          <td style={{ display: "none" }}>A</td>
        </tr>
        <tr className="even">
          <td style={{ width: "35%" }} className="sorting_1">
            <a href="https://www.guardiancapital.com/investmentsolutions/funds/gcg-692/">
              Guardian Canadian Focused Equity Fund F
            </a>
          </td>
          <td>07/31/2022</td>
          <td>5.11</td>
          <td>-2.25</td>
          <td>-7.04</td>
          <td>-6.11</td>
          <td>-0.46</td>
          <td>4.98</td>
          <td>-</td>
          <td>-</td>
          <td>4.51</td>
          <td>05/14/2019</td>
          <td style={{ display: "none" }}>Canadian Equity</td>
          <td style={{ display: "none" }}>
            <span className="prosper-icon">C</span>
          </td>
          <td style={{ display: "none" }}>F</td>
        </tr>
        <tr className="odd">
          <td className="sorting_1">
            <a href="https://www.guardiancapital.com/investmentsolutions/funds/gcg-586/">
              Guardian Canadian Sector Controlled Equity Fund A
            </a>
          </td>
          <td colSpan="13">
            In accordance with National Instrument 81-102, performance cannot be
            shown until a fund has 12 months of performance.
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
        </tr>
        <tr className="even">
          <td className="sorting_1">
            <a href="https://www.guardiancapital.com/investmentsolutions/funds/gcg-686/">
              Guardian Canadian Sector Controlled Equity Fund F
            </a>
          </td>
          <td colSpan="13">
            In accordance with National Instrument 81-102, performance cannot be
            shown until a fund has 12 months of performance.
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
        </tr>
        <tr className="odd">
          <td style={{ width: "35%" }} className="sorting_1">
            <a href="https://www.guardiancapital.com/investmentsolutions/funds/gcg-500/">
              Guardian Canadian Short-Term Investment Fund W
            </a>
          </td>
          <td>07/31/2022</td>
          <td>0.10</td>
          <td>0.20</td>
          <td>0.21</td>
          <td>0.21</td>
          <td>0.21</td>
          <td>0.35</td>
          <td>0.62</td>
          <td>-</td>
          <td>0.48</td>
          <td>09/30/2013</td>
          <td style={{ display: "none" }}>Fixed Income</td>
          <td style={{ display: "none" }}>
            <span className="create-icon">P</span>
          </td>
          <td style={{ display: "none" }}>W</td>
        </tr>
        <tr className="even">
          <td style={{ width: "35%" }} className="sorting_1">
            <a href="https://www.guardiancapital.com/investmentsolutions/funds/gcg-597/">
              Guardian Directed Equity Path Portfolio A
            </a>
          </td>
          <td>07/31/2022</td>
          <td>2.27</td>
          <td>-1.76</td>
          <td>-6.40</td>
          <td>-10.57</td>
          <td>-7.37</td>
          <td>0.22</td>
          <td>-</td>
          <td>-</td>
          <td>0.90</td>
          <td>02/28/2019</td>
          <td style={{ display: "none" }}>Global Equity</td>
          <td style={{ display: "none" }}>
            <span className="create-icon">P</span>
          </td>
          <td style={{ display: "none" }}>A</td>
        </tr>
        <tr className="odd">
          <td style={{ width: "35%" }} className="sorting_1">
            <a href="https://www.guardiancapital.com/investmentsolutions/funds/gcg-697/">
              Guardian Directed Equity Path Portfolio F
            </a>
          </td>
          <td>07/31/2022</td>
          <td>2.35</td>
          <td>-1.48</td>
          <td>-5.88</td>
          <td>-9.98</td>
          <td>-6.32</td>
          <td>1.35</td>
          <td>-</td>
          <td>-</td>
          <td>1.09</td>
          <td>06/13/2019</td>
          <td style={{ display: "none" }}>Global Equity</td>
          <td style={{ display: "none" }}>
            <span className="create-icon">P</span>
          </td>
          <td style={{ display: "none" }}>F</td>
        </tr>
        <tr className="even">
          <td style={{ width: "35%" }} className="sorting_1">
            <a href="https://www.guardiancapital.com/investmentsolutions/funds/gcg-598/">
              Guardian Directed Premium Yield Portfolio A
            </a>
          </td>
          <td>07/31/2022</td>
          <td>5.88</td>
          <td>-2.00</td>
          <td>-8.49</td>
          <td>-13.65</td>
          <td>-8.53</td>
          <td>4.53</td>
          <td>-</td>
          <td>-</td>
          <td>5.19</td>
          <td>02/28/2019</td>
          <td style={{ display: "none" }}>Global Equity</td>
          <td style={{ display: "none" }}>
            <span className="create-icon">P</span>
          </td>
          <td style={{ display: "none" }}>A</td>
        </tr>
        <tr className="odd">
          <td style={{ width: "35%" }} className="sorting_1">
            <a href="https://www.guardiancapital.com/investmentsolutions/funds/gcg-698/">
              Guardian Directed Premium Yield Portfolio F
            </a>
          </td>
          <td>07/31/2022</td>
          <td>5.97</td>
          <td>-1.74</td>
          <td>-8.01</td>
          <td>-13.11</td>
          <td>-7.54</td>
          <td>5.69</td>
          <td>-</td>
          <td>-</td>
          <td>5.35</td>
          <td>06/13/2019</td>
          <td style={{ display: "none" }}>Global Equity</td>
          <td style={{ display: "none" }}>
            <span className="create-icon">P</span>
          </td>
          <td style={{ display: "none" }}>F</td>
        </tr>
        <tr className="even">
          <td style={{ width: "35%" }} className="sorting_1">
            <a href="https://www.guardiancapital.com/investmentsolutions/funds/gcg-577/">
              Guardian Emerging Markets Equity Fund A
            </a>
          </td>
          <td>07/31/2022</td>
          <td>0.89</td>
          <td>-2.57</td>
          <td>-18.32</td>
          <td>-20.88</td>
          <td>-25.57</td>
          <td>-3.24</td>
          <td>-0.71</td>
          <td>-</td>
          <td>2.37</td>
          <td>04/22/2016</td>
          <td style={{ display: "none" }}>Emerging Equity</td>
          <td style={{ display: "none" }}>
            <span className="prosper-icon">C</span>
          </td>
          <td style={{ display: "none" }}>A</td>
        </tr>
        <tr className="odd">
          <td className="sorting_1">
            <a href="https://www.guardiancapital.com/investmentsolutions/funds/gcg-677/">
              Guardian Emerging Markets Equity Fund F
            </a>
          </td>
          <td colSpan="13">
            In accordance with National Instrument 81-102, performance cannot be
            shown until a fund has 12 months of performance.
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
        </tr>
        <tr className="even">
          <td className="sorting_1">
            <a href="https://www.guardiancapital.com/investmentsolutions/funds/gcg-501a/">
              Guardian Fixed Income Select Fund A
            </a>
          </td>
          <td colSpan="13">
            In accordance with National Instrument 81-102, performance cannot be
            shown until a fund has 12 months of performance.
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
        </tr>
        <tr className="odd">
          <td className="sorting_1">
            <a href="https://www.guardiancapital.com/investmentsolutions/funds/gcg-601/">
              Guardian Fixed Income Select Fund F
            </a>
          </td>
          <td colSpan="13">
            In accordance with National Instrument 81-102, performance cannot be
            shown until a fund has 12 months of performance.
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
        </tr>
        <tr className="even">
          <td style={{ width: "35%" }} className="sorting_1">
            <a href="https://www.guardiancapital.com/investmentsolutions/funds/gcg-578/">
              Guardian Fundamental Global Equity Fund W
            </a>
          </td>
          <td>07/31/2022</td>
          <td>5.12</td>
          <td>-3.07</td>
          <td>-9.19</td>
          <td>-15.54</td>
          <td>-10.39</td>
          <td>6.54</td>
          <td>10.33</td>
          <td>-</td>
          <td>10.70</td>
          <td>04/22/2015</td>
          <td style={{ display: "none" }}>Global Equity</td>
          <td style={{ display: "none" }}>
            <span className="prosper-icon">C</span>
          </td>
          <td style={{ display: "none" }}>W</td>
        </tr>
        <tr className="odd">
          <td style={{ width: "35%" }} className="sorting_1">
            <a href="https://www.guardiancapital.com/investmentsolutions/funds/gcg-578f/">
              Guardian Fundamental Global Equity Fund WF
            </a>
          </td>
          <td>07/31/2022</td>
          <td>5.21</td>
          <td>-2.81</td>
          <td>-8.71</td>
          <td>-15.02</td>
          <td>-9.41</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>8.06</td>
          <td>04/23/2020</td>
          <td style={{ display: "none" }}>Global Equity</td>
          <td style={{ display: "none" }}>
            <span className="prosper-icon">C</span>
          </td>
          <td style={{ display: "none" }}>WF</td>
        </tr>
        <tr className="even">
          <td className="sorting_1">
            <a href="https://www.guardiancapital.com/investmentsolutions/funds/gcg-591/">
              Guardian Investment Grade Corporate Bond Fund A
            </a>
          </td>
          <td colSpan="13">
            In accordance with National Instrument 81-102, performance cannot be
            shown until a fund has 12 months of performance.
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
        </tr>
        <tr className="odd">
          <td className="sorting_1">
            <a href="https://www.guardiancapital.com/investmentsolutions/funds/gcg-694/">
              Guardian Investment Grade Corporate Bond Fund F
            </a>
          </td>
          <td colSpan="13">
            In accordance with National Instrument 81-102, performance cannot be
            shown until a fund has 12 months of performance.
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
        </tr>
        <tr className="even">
          <td style={{ width: "35%" }} className="sorting_1">
            <a href="https://www.guardiancapital.com/investmentsolutions/funds/gcg-570/">
              Guardian i³ Global Dividend Growth Fund W
            </a>
          </td>
          <td>07/31/2022</td>
          <td>4.88</td>
          <td>-1.59</td>
          <td>-6.67</td>
          <td>-10.90</td>
          <td>0.29</td>
          <td>6.89</td>
          <td>7.48</td>
          <td>8.64</td>
          <td>8.91</td>
          <td>11/24/2011</td>
          <td style={{ display: "none" }}>Global Equity</td>
          <td style={{ display: "none" }}>
            <span className="prosper-icon">C</span>
          </td>
          <td style={{ display: "none" }}>W</td>
        </tr>
        <tr className="odd">
          <td className="sorting_1">
            <a href="https://www.guardiancapital.com/investmentsolutions/funds/gcg-570f/">
              Guardian i³ Global Dividend Growth Fund WF
            </a>
          </td>
          <td colSpan="13">
            In accordance with National Instrument 81-102, performance cannot be
            shown until a fund has 12 months of performance.
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
        </tr>
        <tr className="even">
          <td className="sorting_1">
            <a href="https://www.guardiancapital.com/investmentsolutions/funds/gcg-560/">
              Guardian i³ Global Quality Growth Fund A
            </a>
          </td>
          <td colSpan="13">
            In accordance with National Instrument 81-102, performance cannot be
            shown until a fund has 12 months of performance.
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
        </tr>
        <tr className="odd">
          <td className="sorting_1">
            <a href="https://www.guardiancapital.com/investmentsolutions/funds/gcg-659/">
              Guardian i³ Global Quality Growth Fund F
            </a>
          </td>
          <td colSpan="13">
            In accordance with National Instrument 81-102, performance cannot be
            shown until a fund has 12 months of performance.
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
        </tr>
        <tr className="even">
          <td className="sorting_1">
            <a href="https://www.guardiancapital.com/investmentsolutions/funds/gcg-558/">
              Guardian i³ International Quality Growth Fund A
            </a>
          </td>
          <td colSpan="13">
            In accordance with National Instrument 81-102, performance cannot be
            shown until a fund has 12 months of performance.
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
        </tr>
        <tr className="odd">
          <td className="sorting_1">
            <a href="https://www.guardiancapital.com/investmentsolutions/funds/gcg-657/">
              Guardian i³ International Quality Growth Fund F
            </a>
          </td>
          <td colSpan="13">
            In accordance with National Instrument 81-102, performance cannot be
            shown until a fund has 12 months of performance.
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
        </tr>
        <tr className="even">
          <td style={{ width: "35%" }} className="sorting_1">
            <a href="https://www.guardiancapital.com/investmentsolutions/funds/gcg-551/">
              Guardian Managed Balanced Portfolio W
            </a>
          </td>
          <td>07/31/2022</td>
          <td>5.01</td>
          <td>-1.31</td>
          <td>-7.87</td>
          <td>-11.03</td>
          <td>-6.84</td>
          <td>3.21</td>
          <td>3.97</td>
          <td>-</td>
          <td>5.14</td>
          <td>09/30/2013</td>
          <td style={{ display: "none" }}>Multi Asset Solutions</td>
          <td style={{ display: "none" }}>
            <span className="prosper-icon">C</span>
          </td>
          <td style={{ display: "none" }}>W</td>
        </tr>
        <tr className="odd">
          <td style={{ width: "35%" }} className="sorting_1">
            <a href="https://www.guardiancapital.com/investmentsolutions/funds/gcg-583/">
              Guardian Managed Growth Portfolio W
            </a>
          </td>
          <td>07/31/2022</td>
          <td>6.11</td>
          <td>-1.60</td>
          <td>-9.64</td>
          <td>-14.93</td>
          <td>-10.78</td>
          <td>4.41</td>
          <td>-</td>
          <td>-</td>
          <td>2.45</td>
          <td>09/04/2020</td>
          <td style={{ display: "none" }}>Multi Asset Solutions</td>
          <td style={{ display: "none" }}>
            <span className="prosper-icon">C</span>
          </td>
          <td style={{ display: "none" }}>W</td>
        </tr>
        <tr className="even">
          <td className="sorting_1">
            <a href="https://www.guardiancapital.com/investmentsolutions/funds/gcg-583wf/">
              Guardian Managed Growth Portfolio WF
            </a>
          </td>
          <td colSpan="13">
            In accordance with National Instrument 81-102, performance cannot be
            shown until a fund has 12 months of performance.
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
        </tr>
        <tr className="odd">
          <td style={{ width: "35%" }} className="sorting_1">
            <a href="https://www.guardiancapital.com/investmentsolutions/funds/gcg-781/">
              Guardian Managed Income &amp; Growth Portfolio C
            </a>
          </td>
          <td>07/31/2022</td>
          <td>4.29</td>
          <td>-1.66</td>
          <td>-7.40</td>
          <td>-9.91</td>
          <td>-5.76</td>
          <td>3.35</td>
          <td>4.29</td>
          <td>-</td>
          <td>4.04</td>
          <td>04/22/2015</td>
          <td style={{ display: "none" }}>Multi Asset Solutions</td>
          <td style={{ display: "none" }}>
            <span className="prosper-icon">C</span>
          </td>
          <td style={{ display: "none" }}>C</td>
        </tr>
        <tr className="even">
          <td style={{ width: "35%" }} className="sorting_1">
            <a href="https://www.guardiancapital.com/investmentsolutions/funds/gcg-681/">
              Guardian Managed Income &amp; Growth Portfolio F
            </a>
          </td>
          <td>07/31/2022</td>
          <td>4.37</td>
          <td>-1.41</td>
          <td>-6.94</td>
          <td>-9.38</td>
          <td>-4.77</td>
          <td>4.43</td>
          <td>-</td>
          <td>-</td>
          <td>4.02</td>
          <td>04/25/2019</td>
          <td style={{ display: "none" }}>Multi Asset Solutions</td>
          <td style={{ display: "none" }}>
            <span className="prosper-icon">C</span>
          </td>
          <td style={{ display: "none" }}>F</td>
        </tr>
        <tr className="odd">
          <td style={{ width: "35%" }} className="sorting_1">
            <a href="https://www.guardiancapital.com/investmentsolutions/funds/gcg-681/">
              Guardian Managed Income &amp; Growth Portfolio F
            </a>
          </td>
          <td>07/31/2022</td>
          <td>4.37</td>
          <td>-1.41</td>
          <td>-6.94</td>
          <td>-9.38</td>
          <td>-4.77</td>
          <td>4.43</td>
          <td>-</td>
          <td>-</td>
          <td>4.02</td>
          <td>04/25/2019</td>
          <td style={{ display: "none" }}>Multi Asset Solutions</td>
          <td style={{ display: "none" }}>
            <span className="prosper-icon">C</span>
          </td>
          <td style={{ display: "none" }}>F</td>
        </tr>
        <tr className="even">
          <td style={{ width: "35%" }} className="sorting_1">
            <a href="https://www.guardiancapital.com/investmentsolutions/funds/gcg-780/">
              Guardian Managed Income Portfolio C
            </a>
          </td>
          <td>07/31/2022</td>
          <td>4.01</td>
          <td>-0.66</td>
          <td>-6.49</td>
          <td>-8.87</td>
          <td>-6.04</td>
          <td>2.09</td>
          <td>3.18</td>
          <td>-</td>
          <td>2.88</td>
          <td>04/22/2015</td>
          <td style={{ display: "none" }}>Multi Asset Solutions</td>
          <td style={{ display: "none" }}>
            <span className="create-icon">P</span>
          </td>
          <td style={{ display: "none" }}>C</td>
        </tr>
        <tr className="odd">
          <td style={{ width: "35%" }} className="sorting_1">
            <a href="https://www.guardiancapital.com/investmentsolutions/funds/gcg-680/">
              Guardian Managed Income Portfolio F
            </a>
          </td>
          <td>07/31/2022</td>
          <td>4.10</td>
          <td>-0.40</td>
          <td>-6.00</td>
          <td>-8.32</td>
          <td>-5.05</td>
          <td>3.16</td>
          <td>-</td>
          <td>-</td>
          <td>3.05</td>
          <td>04/25/2019</td>
          <td style={{ display: "none" }}>Multi Asset Solutions</td>
          <td style={{ display: "none" }}>
            <span className="create-icon">P</span>
          </td>
          <td style={{ display: "none" }}>F</td>
        </tr>
        <tr className="even">
          <td style={{ width: "35%" }} className="sorting_1">
            <a href="https://www.guardiancapital.com/investmentsolutions/funds/gcg-584/">
              Guardian Risk Managed Conservative Portfolio A
            </a>
          </td>
          <td>07/31/2022</td>
          <td>3.28</td>
          <td>-1.17</td>
          <td>-6.88</td>
          <td>-10.84</td>
          <td>-8.46</td>
          <td>0.30</td>
          <td>-</td>
          <td>-</td>
          <td>0.03</td>
          <td>07/03/2019</td>
          <td style={{ display: "none" }}>Multi Asset Solutions</td>
          <td style={{ display: "none" }}>
            <span className="create-icon">P</span>
          </td>
          <td style={{ display: "none" }}>A</td>
        </tr>
        <tr className="odd">
          <td style={{ width: "35%" }} className="sorting_1">
            <a href="https://www.guardiancapital.com/investmentsolutions/funds/gcg-684/">
              Guardian Risk Managed Conservative Portfolio F
            </a>
          </td>
          <td>07/31/2022</td>
          <td>3.38</td>
          <td>-0.89</td>
          <td>-6.35</td>
          <td>-10.25</td>
          <td>-7.42</td>
          <td>1.46</td>
          <td>-</td>
          <td>-</td>
          <td>1.55</td>
          <td>06/07/2019</td>
          <td style={{ display: "none" }}>Multi Asset Solutions</td>
          <td style={{ display: "none" }}>
            <span className="create-icon">P</span>
          </td>
          <td style={{ display: "none" }}>F</td>
        </tr>
        <tr className="even">
          <td style={{ width: "35%" }} className="sorting_1">
            <a href="https://www.guardiancapital.com/investmentsolutions/funds/gcg-684/">
              Guardian Risk Managed Conservative Portfolio F
            </a>
          </td>
          <td>07/31/2022</td>
          <td>3.38</td>
          <td>-0.89</td>
          <td>-6.35</td>
          <td>-10.25</td>
          <td>-7.42</td>
          <td>1.46</td>
          <td>-</td>
          <td>-</td>
          <td>1.55</td>
          <td>06/07/2019</td>
          <td style={{ display: "none" }}>Multi Asset Solutions</td>
          <td style={{ display: "none" }}>
            <span className="create-icon">P</span>
          </td>
          <td style={{ display: "none" }}>F</td>
        </tr>
        <tr className="odd">
          <td style={{ width: "35%" }} className="sorting_1">
            <a href="https://www.guardiancapital.com/investmentsolutions/funds/gcg-503/">
              Guardian Short Duration Bond Fund A
            </a>
          </td>
          <td>07/31/2022</td>
          <td>1.27</td>
          <td>0.46</td>
          <td>-3.06</td>
          <td>-4.15</td>
          <td>-5.20</td>
          <td>-0.10</td>
          <td>0.60</td>
          <td>-</td>
          <td>0.75</td>
          <td>04/30/2014</td>
          <td style={{ display: "none" }}>Fixed Income</td>
          <td style={{ display: "none" }}>
            <span className="create-icon">P</span>
          </td>
          <td style={{ display: "none" }}>A</td>
        </tr>
        <tr className="even">
          <td className="sorting_1">
            <a href="https://www.guardiancapital.com/investmentsolutions/funds/gcg-603/">
              Guardian Short Duration Bond Fund F
            </a>
          </td>
          <td colSpan="13">
            In accordance with National Instrument 81-102, performance cannot be
            shown until a fund has 12 months of performance.
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
        </tr>
        <tr className="odd">
          <td style={{ width: "35%" }} className="sorting_1">
            <a href="https://www.guardiancapital.com/investmentsolutions/funds/gcg-102/">
              Guardian Strategic Income Fund A
            </a>
          </td>
          <td>07/31/2022</td>
          <td>1.89</td>
          <td>-1.65</td>
          <td>-4.59</td>
          <td>-5.24</td>
          <td>-3.87</td>
          <td>0.17</td>
          <td>1.65</td>
          <td>-</td>
          <td>3.93</td>
          <td>05/31/2013</td>
          <td style={{ display: "none" }}>Alternative</td>
          <td style={{ display: "none" }}>
            <span className="create-icon">P</span>
          </td>
          <td style={{ display: "none" }}>A</td>
        </tr>
        <tr className="even">
          <td style={{ width: "35%" }} className="sorting_1">
            <a href="https://www.guardiancapital.com/investmentsolutions/funds/gcg-602/">
              Guardian Strategic Income Fund F
            </a>
          </td>
          <td>07/31/2022</td>
          <td>1.97</td>
          <td>-1.37</td>
          <td>-4.07</td>
          <td>-4.64</td>
          <td>-2.83</td>
          <td>1.23</td>
          <td>2.73</td>
          <td>-</td>
          <td>4.94</td>
          <td>05/31/2013</td>
          <td style={{ display: "none" }}>Alternative</td>
          <td style={{ display: "none" }}>
            <span className="create-icon">P</span>
          </td>
          <td style={{ display: "none" }}>F</td>
        </tr>
        <tr className="odd">
          <td className="sorting_1">
            <a href="https://www.guardiancapital.com/investmentsolutions/funds/gcg-553/">
              Guardian U.S. Equity Fund A
            </a>
          </td>
          <td colSpan="13">
            In accordance with National Instrument 81-102, performance cannot be
            shown until a fund has 12 months of performance.
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
        </tr>
        <tr className="even">
          <td className="sorting_1">
            <a href="https://www.guardiancapital.com/investmentsolutions/funds/gcg-652/">
              Guardian U.S. Equity Fund F
            </a>
          </td>
          <td colSpan="13">
            In accordance with National Instrument 81-102, performance cannot be
            shown until a fund has 12 months of performance.
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
        </tr>
        <tr className="odd">
          <td className="sorting_1">
            <a href="https://www.guardiancapital.com/investmentsolutions/funds/gcg-507/">
              Sustainable Balanced 40/60 Fund A
            </a>
          </td>
          <td colSpan="13">
            In accordance with National Instrument 81-102, performance cannot be
            shown until a fund has 12 months of performance.
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
        </tr>
        <tr className="even">
          <td className="sorting_1">
            <a href="https://www.guardiancapital.com/investmentsolutions/funds/gcgcc507/">
              Sustainable Balanced 40/60 Fund CCA
            </a>
          </td>
          <td colSpan="13">
            In accordance with National Instrument 81-102, performance cannot be
            shown until a fund has 12 months of performance.
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
        </tr>
        <tr className="odd">
          <td className="sorting_1">
            <a href="https://www.guardiancapital.com/investmentsolutions/funds/gcgcc607/">
              Sustainable Balanced 40/60 Fund CCF
            </a>
          </td>
          <td colSpan="13">
            In accordance with National Instrument 81-102, performance cannot be
            shown until a fund has 12 months of performance.
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
        </tr>
        <tr className="even">
          <td className="sorting_1">
            <a href="https://www.guardiancapital.com/investmentsolutions/funds/gcg-607/">
              Sustainable Balanced 40/60 Fund F
            </a>
          </td>
          <td colSpan="13">
            In accordance with National Instrument 81-102, performance cannot be
            shown until a fund has 12 months of performance.
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
        </tr>
        <tr className="odd">
          <td className="sorting_1">
            <a href="https://www.guardiancapital.com/investmentsolutions/funds/gcg-506/">
              Sustainable Balanced 60/40 Fund A
            </a>
          </td>
          <td colSpan="13">
            In accordance with National Instrument 81-102, performance cannot be
            shown until a fund has 12 months of performance.
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
        </tr>
        <tr className="even">
          <td className="sorting_1">
            <a href="https://www.guardiancapital.com/investmentsolutions/funds/gcgcc506/">
              Sustainable Balanced 60/40 Fund CCA
            </a>
          </td>
          <td colSpan="13">
            In accordance with National Instrument 81-102, performance cannot be
            shown until a fund has 12 months of performance.
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
        </tr>
        <tr className="odd">
          <td className="sorting_1">
            <a href="https://www.guardiancapital.com/investmentsolutions/funds/gcgcc606/">
              Sustainable Balanced 60/40 Fund CCF
            </a>
          </td>
          <td colSpan="13">
            In accordance with National Instrument 81-102, performance cannot be
            shown until a fund has 12 months of performance.
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
        </tr>
        <tr className="even">
          <td className="sorting_1">
            <a href="https://www.guardiancapital.com/investmentsolutions/funds/gcg-606/">
              Sustainable Balanced 60/40 Fund F
            </a>
          </td>
          <td colSpan="13">
            In accordance with National Instrument 81-102, performance cannot be
            shown until a fund has 12 months of performance.
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
        </tr>
        <tr className="odd">
          <td className="sorting_1">
            <a href="https://www.guardiancapital.com/investmentsolutions/funds/gcg-504/">
              Sustainable Growth 100 Fund A
            </a>
          </td>
          <td colSpan="13">
            In accordance with National Instrument 81-102, performance cannot be
            shown until a fund has 12 months of performance.
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
        </tr>
        <tr className="even">
          <td className="sorting_1">
            <a href="https://www.guardiancapital.com/investmentsolutions/funds/gcgcc504/">
              Sustainable Growth 100 Fund CCA
            </a>
          </td>
          <td colSpan="13">
            In accordance with National Instrument 81-102, performance cannot be
            shown until a fund has 12 months of performance.
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
        </tr>
        <tr className="odd">
          <td className="sorting_1">
            <a href="https://www.guardiancapital.com/investmentsolutions/funds/gcgcc604/">
              Sustainable Growth 100 Fund CCF
            </a>
          </td>
          <td colSpan="13">
            In accordance with National Instrument 81-102, performance cannot be
            shown until a fund has 12 months of performance.
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
        </tr>
        <tr className="even">
          <td className="sorting_1">
            <a href="https://www.guardiancapital.com/investmentsolutions/funds/gcg-604/">
              Sustainable Growth 100 Fund F
            </a>
          </td>
          <td colSpan="13">
            In accordance with National Instrument 81-102, performance cannot be
            shown until a fund has 12 months of performance.
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
        </tr>
        <tr className="odd">
          <td className="sorting_1">
            <a href="https://www.guardiancapital.com/investmentsolutions/funds/gcg-505/">
              Sustainable Growth 80/20 Fund A
            </a>
          </td>
          <td colSpan="13">
            In accordance with National Instrument 81-102, performance cannot be
            shown until a fund has 12 months of performance.
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
        </tr>
        <tr className="even">
          <td className="sorting_1">
            <a href="https://www.guardiancapital.com/investmentsolutions/funds/gcgcc505/">
              Sustainable Growth 80/20 Fund CCA
            </a>
          </td>
          <td colSpan="13">
            In accordance with National Instrument 81-102, performance cannot be
            shown until a fund has 12 months of performance.
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
        </tr>
        <tr className="odd">
          <td className="sorting_1">
            <a href="https://www.guardiancapital.com/investmentsolutions/funds/gcgcc605/">
              Sustainable Growth 80/20 Fund CCF
            </a>
          </td>
          <td colSpan="13">
            In accordance with National Instrument 81-102, performance cannot be
            shown until a fund has 12 months of performance.
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
        </tr>
        <tr className="even">
          <td className="sorting_1">
            <a href="https://www.guardiancapital.com/investmentsolutions/funds/gcg-605/">
              Sustainable Growth 80/20 Fund F
            </a>
          </td>
          <td colSpan="13">
            In accordance with National Instrument 81-102, performance cannot be
            shown until a fund has 12 months of performance.
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
        </tr>
        <tr className="odd">
          <td className="sorting_1">
            <a href="https://www.guardiancapital.com/investmentsolutions/funds/gcg-509/">
              Sustainable Income 100 Fund A
            </a>
          </td>
          <td colSpan="13">
            In accordance with National Instrument 81-102, performance cannot be
            shown until a fund has 12 months of performance.
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
        </tr>
        <tr className="even">
          <td className="sorting_1">
            <a href="https://www.guardiancapital.com/investmentsolutions/funds/gcgcc509/">
              Sustainable Income 100 Fund CCA
            </a>
          </td>
          <td colSpan="13">
            In accordance with National Instrument 81-102, performance cannot be
            shown until a fund has 12 months of performance.
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
        </tr>
        <tr className="odd">
          <td className="sorting_1">
            <a href="https://www.guardiancapital.com/investmentsolutions/funds/gcgcc609/">
              Sustainable Income 100 Fund CCF
            </a>
          </td>
          <td colSpan="13">
            In accordance with National Instrument 81-102, performance cannot be
            shown until a fund has 12 months of performance.
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
        </tr>
        <tr className="even">
          <td className="sorting_1">
            <a href="https://www.guardiancapital.com/investmentsolutions/funds/gcg-609/">
              Sustainable Income 100 Fund F
            </a>
          </td>
          <td colSpan="13">
            In accordance with National Instrument 81-102, performance cannot be
            shown until a fund has 12 months of performance.
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
        </tr>
        <tr className="odd">
          <td className="sorting_1">
            <a href="https://www.guardiancapital.com/investmentsolutions/funds/gcg-508/">
              Sustainable Income 20/80 Fund A
            </a>
          </td>
          <td colSpan="13">
            In accordance with National Instrument 81-102, performance cannot be
            shown until a fund has 12 months of performance.
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
        </tr>
        <tr className="even">
          <td className="sorting_1">
            <a href="https://www.guardiancapital.com/investmentsolutions/funds/gcgcc508/">
              Sustainable Income 20/80 Fund CCA
            </a>
          </td>
          <td colSpan="13">
            In accordance with National Instrument 81-102, performance cannot be
            shown until a fund has 12 months of performance.
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
        </tr>
        <tr className="odd">
          <td className="sorting_1">
            <a href="https://www.guardiancapital.com/investmentsolutions/funds/gcgcc608/">
              Sustainable Income 20/80 Fund CCF
            </a>
          </td>
          <td colSpan="13">
            In accordance with National Instrument 81-102, performance cannot be
            shown until a fund has 12 months of performance.
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
        </tr>
        <tr className="even">
          <td className="sorting_1">
            <a href="https://www.guardiancapital.com/investmentsolutions/funds/gcg-608/">
              Sustainable Income 20/80 Fund F
            </a>
          </td>
          <td colSpan="13">
            In accordance with National Instrument 81-102, performance cannot be
            shown until a fund has 12 months of performance.
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
          <td style={{ display: "none" }} className="custom_index">
            -
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Performance;

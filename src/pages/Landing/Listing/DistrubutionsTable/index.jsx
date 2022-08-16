import React, { useEffect, useRef } from "react";
import $ from "jquery";
import "datatables.net-dt/css/jquery.dataTables.min.css";

$.DataTable = require("datatables.net");

const data = [
  {
    name: "GC One Equity Portfolio A	",
    series: "A",
    freq: "Quarterly",
    date: "12/31/2021",
    amount: "0.32",
    ytd: "-",
  },
  {
    name: "GC One Fixed Income Portfolio A",
    series: "A",
    freq: "Quarterly",
    date: "12/31/2021",
    amount: "0.22",
    ytd: "-",
  },
  {
    name: "Guardian Canadian Bond Fund A",
    series: "A",
    freq: "Quarterly",
    date: "12/31/2021",
    amount: "0.05",
    ytd: "0.10",
  },
  {
    name: "Guardian Canadian Bond Fund F",
    series: "A",
    freq: "Quarterly",
    date: "12/31/2021",
    amount: "0.22",
    ytd: "0.12",
  },
  {
    name: "GC One Equity Portfolio A	",
    series: "A",
    freq: "Quarterly",
    date: "12/31/2021",
    amount: "0.22",
    ytd: "-",
  },
  {
    name: "GC One Equity Portfolio A	",
    series: "A",
    freq: "Quarterly",
    date: "12/31/2021",
    amount: "0.22",
    ytd: "-",
  },
  {
    name: "GC One Equity Portfolio A	",
    series: "A",
    freq: "Quarterly",
    date: "12/31/2021",
    amount: "0.22",
    ytd: "-",
  },
  {
    name: "GC One Equity Portfolio A	",
    series: "A",
    freq: "Quarterly",
    date: "12/31/2021",
    amount: "0.22",
    ytd: "-",
  },
  {
    name: "GC One Equity Portfolio A	",
    series: "A",
    freq: "Quarterly",
    date: "12/31/2021",
    amount: "0.22",
    ytd: "-",
  },
  {
    name: "GC One Equity Portfolio A	",
    series: "A",
    freq: "Quarterly",
    date: "12/31/2021",
    amount: "0.22",
    ytd: "-",
  },
  {
    name: "GC One Equity Portfolio A	",
    series: "A",
    freq: "Quarterly",
    date: "12/31/2021",
    amount: "0.22",
    ytd: "-",
  },
  {
    name: "GC One Equity Portfolio A	",
    series: "A",
    freq: "Quarterly",
    date: "12/31/2021",
    amount: "0.22",
    ytd: "-",
  },
  {
    name: "GC One Equity Portfolio A	",
    series: "A",
    freq: "Quarterly",
    date: "12/31/2021",
    amount: "0.22",
    ytd: "-",
  },
  {
    name: "GC One Equity Portfolio A	",
    series: "A",
    freq: "Quarterly",
    date: "12/31/2021",
    amount: "0.22",
    ytd: "-",
  },
  {
    name: "GC One Equity Portfolio A	",
    series: "A",
    freq: "Quarterly",
    date: "12/31/2021",
    amount: "0.22",
    ytd: "-",
  },
  {
    name: "GC One Equity Portfolio A	",
    series: "A",
    freq: "Quarterly",
    date: "12/31/2021",
    amount: "0.22",
    ytd: "-",
  },
  {
    name: "GC One Equity Portfolio A	",
    series: "A",
    freq: "Quarterly",
    date: "12/31/2021",
    amount: "0.22",
    ytd: "-",
  },
  {
    name: "GC One Equity Portfolio A	",
    series: "A",
    freq: "Quarterly",
    date: "12/31/2021",
    amount: "0.22",
    ytd: "-",
  },
  {
    name: "GC One Equity Portfolio A	",
    series: "A",
    freq: "Quarterly",
    date: "12/31/2021",
    amount: "0.22",
    ytd: "-",
  },
  {
    name: "GC One Equity Portfolio A	",
    series: "A",
    freq: "Quarterly",
    date: "12/31/2021",
    amount: "0.22",
    ytd: "-",
  },
  {
    name: "GC One Equity Portfolio A	",
    series: "A",
    freq: "Quarterly",
    date: "12/31/2021",
    amount: "0.22",
    ytd: "-",
  },
];

const DailyNavTable = () => {
  const tableRef = useRef(null);

  useEffect(() => {
    if (!$.fn.DataTable.isDataTable(tableRef.current))
      $(tableRef.current).DataTable({ paging: false });
  }, [tableRef]);

  return (
    <table ref={tableRef}>
      <thead>
        <tr>
          <th>Fund Name</th>
          <th>Type</th>
          <th>Series</th>
          <th>Nav Date</th>
          <th>Asset Class</th>
          <th>NAV Per Unit</th>
        </tr>
      </thead>
      <tbody>
        {data.map((el, idx) => {
          const { name, series, freq, date, amount, ytd } = el;

          return (
            <tr key={"daily-table" + idx}>
              <td>{name}</td>
              <td>
                <div className="tag">{series}</div>
              </td>
              <td>{freq}</td>
              <td>{date}</td>
              <td>{amount}</td>
              <td>{ytd}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default React.memo(DailyNavTable, () => true);

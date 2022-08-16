import React, { useEffect, useRef } from "react";
import $ from "jquery";
import "datatables.net-dt/css/jquery.dataTables.min.css";

$.DataTable = require("datatables.net");

const data = [
  {
    name: "GC One Equity Portfolio A",
    date: "07/31/2022",
    m1: "5.03",
    m3: "-1.91",
    m6: "-7.80",
    ytd: "-11.56",
    y1: "-4.67",
    y3: "5.90	",
    y5: "-",
    y10: "-",
    si: "5.36",
    siDate: "	01/15/2018",
  },
  {
    name: "GC One Equity Portfolio A",
    date: "07/31/2022",
    m1: "5.03",
    m3: "-1.91",
    m6: "-7.80",
    ytd: "-11.56",
    y1: "-4.67",
    y3: "5.90	",
    y5: "-",
    y10: "-",
    si: "5.36",
    siDate: "	01/15/2018",
  },
  {
    name: "GC One Equity Portfolio A",
    date: "07/31/2022",
    m1: "5.03",
    m3: "-1.91",
    m6: "-7.80",
    ytd: "-11.56",
    y1: "-4.67",
    y3: "5.90	",
    y5: "-",
    y10: "-",
    si: "5.36",
    siDate: "	01/15/2018",
  },
  {
    name: "GC One Equity Portfolio A",
    date: "07/31/2022",
    m1: "5.03",
    m3: "-1.91",
    m6: "-7.80",
    ytd: "-11.56",
    y1: "-4.67",
    y3: "5.90	",
    y5: "-",
    y10: "-",
    si: "5.36",
    siDate: "	01/15/2018",
  },
  {
    name: "GC One Equity Portfolio A",
    date: "07/31/2022",
    m1: "5.03",
    m3: "-1.91",
    m6: "-7.80",
    ytd: "-11.56",
    y1: "-4.67",
    y3: "5.90	",
    y5: "-",
    y10: "-",
    si: "5.36",
    siDate: "	01/15/2018",
  },
  {
    name: "GC One Equity Portfolio A",
    date: "07/31/2022",
    m1: "5.03",
    m3: "-1.91",
    m6: "-7.80",
    ytd: "-11.56",
    y1: "-4.67",
    y3: "5.90	",
    y5: "-",
    y10: "-",
    si: "5.36",
    siDate: "	01/15/2018",
  },
  {
    name: "GC One Equity Portfolio A",
    date: "07/31/2022",
    m1: "5.03",
    m3: "-1.91",
    m6: "-7.80",
    ytd: "-11.56",
    y1: "-4.67",
    y3: "5.90	",
    y5: "-",
    y10: "-",
    si: "5.36",
    siDate: "	01/15/2018",
  },
  {
    name: "GC One Equity Portfolio A",
    date: "07/31/2022",
    m1: "5.03",
    m3: "-1.91",
    m6: "-7.80",
    ytd: "-11.56",
    y1: "-4.67",
    y3: "5.90	",
    y5: "-",
    y10: "-",
    si: "5.36",
    siDate: "	01/15/2018",
  },
  {
    name: "GC One Equity Portfolio A",
    date: "07/31/2022",
    m1: "5.03",
    m3: "-1.91",
    m6: "-7.80",
    ytd: "-11.56",
    y1: "-4.67",
    y3: "5.90	",
    y5: "-",
    y10: "-",
    si: "5.36",
    siDate: "	01/15/2018",
  },
  {
    name: "GC One Equity Portfolio A",
    date: "07/31/2022",
    m1: "5.03",
    m3: "-1.91",
    m6: "-7.80",
    ytd: "-11.56",
    y1: "-4.67",
    y3: "5.90	",
    y5: "-",
    y10: "-",
    si: "5.36",
    siDate: "	01/15/2018",
  },
  {
    name: "GC One Equity Portfolio A",
    date: "07/31/2022",
    m1: "5.03",
    m3: "-1.91",
    m6: "-7.80",
    ytd: "-11.56",
    y1: "-4.67",
    y3: "5.90	",
    y5: "-",
    y10: "-",
    si: "5.36",
    siDate: "	01/15/2018",
  },
  {
    name: "GC One Equity Portfolio A",
    date: "07/31/2022",
    m1: "5.03",
    m3: "-1.91",
    m6: "-7.80",
    ytd: "-11.56",
    y1: "-4.67",
    y3: "5.90	",
    y5: "-",
    y10: "-",
    si: "5.36",
    siDate: "	01/15/2018",
  },
  {
    name: "GC One Equity Portfolio A",
    date: "07/31/2022",
    m1: "5.03",
    m3: "-1.91",
    m6: "-7.80",
    ytd: "-11.56",
    y1: "-4.67",
    y3: "5.90	",
    y5: "-",
    y10: "-",
    si: "5.36",
    siDate: "	01/15/2018",
  },
  {
    name: "GC One Equity Portfolio A",
    date: "07/31/2022",
    m1: "5.03",
    m3: "-1.91",
    m6: "-7.80",
    ytd: "-11.56",
    y1: "-4.67",
    y3: "5.90	",
    y5: "-",
    y10: "-",
    si: "5.36",
    siDate: "	01/15/2018",
  },
  {
    name: "GC One Equity Portfolio A",
    date: "07/31/2022",
    m1: "5.03",
    m3: "-1.91",
    m6: "-7.80",
    ytd: "-11.56",
    y1: "-4.67",
    y3: "5.90	",
    y5: "-",
    y10: "-",
    si: "5.36",
    siDate: "	01/15/2018",
  },
  {
    name: "GC One Equity Portfolio A",
    date: "07/31/2022",
    m1: "5.03",
    m3: "-1.91",
    m6: "-7.80",
    ytd: "-11.56",
    y1: "-4.67",
    y3: "5.90	",
    y5: "-",
    y10: "-",
    si: "5.36",
    siDate: "	01/15/2018",
  },
  {
    name: "GC One Equity Portfolio A",
    date: "07/31/2022",
    m1: "5.03",
    m3: "-1.91",
    m6: "-7.80",
    ytd: "-11.56",
    y1: "-4.67",
    y3: "5.90	",
    y5: "-",
    y10: "-",
    si: "5.36",
    siDate: "	01/15/2018",
  },
  {
    name: "GC One Equity Portfolio A",
    date: "07/31/2022",
    m1: "5.03",
    m3: "-1.91",
    m6: "-7.80",
    ytd: "-11.56",
    y1: "-4.67",
    y3: "5.90	",
    y5: "-",
    y10: "-",
    si: "5.36",
    siDate: "	01/15/2018",
  },
  {
    name: "GC One Equity Portfolio A",
    date: "07/31/2022",
    m1: "5.03",
    m3: "-1.91",
    m6: "-7.80",
    ytd: "-11.56",
    y1: "-4.67",
    y3: "5.90	",
    y5: "-",
    y10: "-",
    si: "5.36",
    siDate: "	01/15/2018",
  },
];

const PerformanceTable = () => {
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
          <th>As of Date</th>
          <th>1M</th>
          <th>3M</th>
          <th>6M</th>
          <th>Y TD</th>
          <th>1Y</th>
          <th>3Y</th>
          <th>5Y</th>
          <th>10Y</th>
          <th>SI</th>
          <th>SI Date</th>
        </tr>
      </thead>
      <tbody>
        {data.map((el, idx) => {
          const { name, date, m1, m3, m6, ytd, y1, y3, y5, y10, si, siDate } =
            el;

          return (
            <tr key={"p-table" + idx}>
              <td>{name}</td>
              <td>{date}</td>
              <td>{m1}</td>
              <td>{m3}</td>
              <td>{m6}</td>
              <td>{ytd}</td>
              <td>{y1}</td>
              <td>{y3}</td>
              <td>{y5}</td>
              <td>{y10}</td>
              <td>{si}</td>
              <td>{siDate}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default React.memo(PerformanceTable, () => true);

import clsx from "clsx";
import React, { useState } from "react";

const FilterItem = ({ className, children, ...rest }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <button
      onClick={() => setIsActive((prevState) => !prevState)}
      className={clsx(className, "filter-box-item", isActive && "active")}
      {...rest}
    >
      {children}{" "}
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 8.34465e-07V6H0V8H6V14H8V8H14V6H8V8.34465e-07H6Z"
          fill="#fff"
        ></path>
      </svg>
    </button>
  );
};

export default FilterItem;

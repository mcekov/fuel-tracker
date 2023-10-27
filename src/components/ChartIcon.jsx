import React from "react";

const ChartIcon = ({ className, variant }) => {
  return (
    <>
      {/* "rotate(0)matrix(-1, 0, 0, 1, 0, 0)"  */}
      <svg
        className={`shadow-md border rounded-full p-[2px] ${className}`}
        width="25px"
        height="25px"
        viewBox="-2.4 -2.4 28.80 28.80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        transform={
          variant == "priceUp"
            ? "rotate(0)"
            : "rotate(0)matrix(-1, 0, 0, 1, 0, 0)"
        }
        stroke="#000000"
        strokeWidth="0.00024000000000000003"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0" />
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <g id="SVGRepo_iconCarrier">
          <path d="M7.71429 17.102V19.1429C7.71429 20.6735 6.4898 22 4.85714 22C3.22449 22 2 20.6735 2 19.1429V17.102C2 15.5714 3.22449 14.2449 4.85714 14.2449C6.4898 14.2449 7.71429 15.5714 7.71429 17.102Z" />
          <path d="M14.8571 10.9796V19.1429C14.8571 20.6735 13.6327 22 12 22C10.3673 22 9.14286 20.6735 9.14286 19.1429V10.9796C9.14286 9.44898 10.3673 8.12245 12 8.12245C13.6327 8.12245 14.8571 9.44898 14.8571 10.9796Z" />
          <path d="M22 4.85714V19.1429C22 20.6735 20.7755 22 19.1429 22C17.5102 22 16.2857 20.7755 16.2857 19.1429V4.85714C16.2857 3.32653 17.5102 2 19.1429 2C20.7755 2 22 3.32653 22 4.85714Z" />
        </g>
      </svg>
    </>
  );
};

export default ChartIcon;
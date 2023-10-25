import React, { useContext } from "react";
import FuelExpenseContext from "../context/fuelExpenseContext";

import SvgUp from "../assets/up.svg";

const Price = () => {
  const { fuelData } = useContext(FuelExpenseContext);

  return (
    <>
      <div className="relative h-[90px] flex rounded-md border-gray-200 bg-white bg-clip-border shadow-md dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none">
        <div className="h-50 ml-4 flex w-auto flex-col mt-2">
          <p className="text-slate-700 font-dm text-sm font-medium text-gray-600">
            {fuelData.fuel} price
          </p>
          <p className="text-slate-700 text-3xl font-bold text-navy-700 dark:text-white">
            {`${fuelData ? fuelData.price : "N/A"} ${
              fuelData ? fuelData.dimension : ""
            }`}
          </p>
        </div>
        <div className="ml-auto flex w-auto items-top pt-2 pr-2">
          <svg
            width="25px"
            height="25px"
            viewBox="-2.4 -2.4 28.80 28.80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#15d189"
            transform="rotate(0)matrix(1, 0, 0, 1, 0, 0)"
          >
            <g
              id="SVGRepo_bgCarrier"
              strokeWidth="0"
              transform="translate(0,0), scale(1)"
            >
              <rect
                x="-2.4"
                y="-2.4"
                width="28.80"
                height="28.80"
                rx="14.4"
                fill=""
                strokeWidth="0"
              />
            </g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke="#299e5cCCCCCC"
              strokeWidth="0.288"
            />
            <g id="SVGRepo_iconCarrier">
              <path
                d="M4 16.937L10 9.43701L15 13.437L20.5 6.93701"
                stroke="#299e5c"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="10" cy="8.93701" r="2" fill="#299e5c" />
              <path
                d="M16.8125 14C16.8125 15.1046 15.9171 16 14.8125 16C13.7079 16 12.8125 15.1046 12.8125 14C12.8125 12.8954 13.7079 12 14.8125 12C15.9171 12 16.8125 12.8954 16.8125 14Z"
                fill="#299e5c"
              />
              <circle cx="4" cy="16.937" r="2" fill="#299e5c" />
              <path
                d="M22.5 7.00002C22.5 8.10459 21.6046 9.00002 20.5 9.00002C19.3954 9.00002 18.5 8.10459 18.5 7.00002C18.5 5.89545 19.3954 5.00002 20.5 5.00002C21.6046 5.00002 22.5 5.89545 22.5 7.00002Z"
                fill="#299e5c"
              />
            </g>
          </svg>
        </div>
      </div>
    </>
  );
};

export default Price;

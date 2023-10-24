import React, { useContext } from "react";
import FuelExpenseContext from "../context/fuelExpenseContext";

const Price = () => {
  const { fuelData } = useContext(FuelExpenseContext);

  return (
    <>
      {/*  <h4>Current {fuelData.fuel} Price</h4>
      <h1 id="balance">{`${fuelData ? fuelData.price : "N/A"}${
        fuelData ? fuelData.dimension : ""
      }`}</h1> */}

      <div className="relative h-[90px] flex rounded-md border-gray-200 bg-white bg-clip-border shadow-md shadow-[#e9e9e9] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none">
        <div className="h-50 ml-4 flex w-auto flex-col mt-2">
          <p className="font-dm text-sm font-medium text-gray-600">
            Fuel price
          </p>
          <h2 className="text-xl font-bold text-navy-700 dark:text-white">
            $340.5
          </h2>
        </div>
        <div className="ml-auto flex w-auto items-top pt-2 pr-2">
          <span className="text-red-500 dark:text-white">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              className="h-7 w-7"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M4 9h4v11H4zM16 13h4v7h-4zM10 4h4v16h-4z"></path>
            </svg>
          </span>
        </div>
      </div>
    </>
  );
};

export default Price;

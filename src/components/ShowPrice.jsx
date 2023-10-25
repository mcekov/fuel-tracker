import React, { useContext } from "react";
import FuelExpenseContext from "../context/fuelExpenseContext";

import SvgUp from "../assets/up.svg";

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
          <p className="text-3xl font-bold text-navy-700 dark:text-white">
            340.5 litter
          </p>
        </div>
        <div className="ml-auto flex w-auto items-top pt-2 pr-2">
          <span className="text-red-500 dark:text-white">
            <img src={SvgUp} className="shadow-md" alt="price up" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Price;

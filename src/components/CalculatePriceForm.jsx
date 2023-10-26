import React, { useContext, useState } from "react";
import FuelExpenseContext from "../context/fuelExpenseContext";
import { Button } from "@/components/ui/button";

const CalculatePriceForm = () => {
  const { calculateExpenses } = useContext(FuelExpenseContext);

  const [distance, setDistance] = useState(0);
  const [efficiency, setEfficiency] = useState(0);

  const handleCalculate = (e) => {
    e.preventDefault();

    calculateExpenses(efficiency, distance);
  };

  return (
    <>
      <div className="w-full">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="distance"
            >
              Trip Distance
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-blue-500 focus:shadow-outline"
              id="distance"
              type="number"
              placeholder="Add distance (km)"
              pattern="[0-9]*"
              inputMode="numeric"
              value={distance || ""}
              onChange={(e) => setDistance(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="efficiency"
            >
              Fuel Efficiency (L/100km)
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-blue-500 focus:shadow-outline"
              id="efficiency"
              type="number"
              pattern="[0-9]*"
              inputMode="numeric"
              value={efficiency || ""}
              onChange={(e) => setEfficiency(e.target.value)}
              placeholder="Add Efficiency (km)"
            />
          </div>
          <div className="flex items-center justify-between">
            <Button
              onClick={handleCalculate}
              className="bg-green-400 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Calculate
            </Button>
            <a
              className="cursor-pointer inline-block align-baseline font-bold text-sm text-red-300 hover:text-red-500"
              onClick={() => {
                setDistance(0);
                setEfficiency(0);
              }}
            >
              Cancel
            </a>
          </div>
        </form>
        <p className="text-center text-gray-500 text-xs">
          &copy;2023 All rights reserved.
        </p>
      </div>
    </>
  );
};

export default CalculatePriceForm;

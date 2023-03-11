import React, { useContext, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import FuelExpenseContext from "../context/fuelExpenseContext";

const CalculatePriceForm = () => {
  const { calculateExpenses } = useContext(FuelExpenseContext);

  const [distance, setDistance] = useState(0);
  const [efficiency, setEfficiency] = useState(0);

  const handleCalculate = (e) => {
    e.preventDefault();

    calculateExpenses(efficiency, distance);

    /* toast.success("Here is your toast.", {
      duration: 4000,
      position: "top-center",
    }); */
  };

  return (
    <>
      <h3>Calculate Price</h3>
      <form>
        <div className="form-control">
          <label htmlFor="text">Trip Distance</label>
          <input
            type="number"
            pattern="[0-9]*"
            inputMode="numeric"
            value={distance || ""}
            onChange={(e) => setDistance(e.target.value)}
            placeholder="Add distance (km)"
          />
        </div>
        <div className="form-control">
          <label htmlFor="text">Fuel Efficiency (L/100km)</label>
          <input
            type="number"
            pattern="[0-9]*"
            inputMode="numeric"
            value={efficiency || ""}
            onChange={(e) => setEfficiency(e.target.value)}
            placeholder="Add Efficiency (km)"
          />
        </div>
        <button
          className="btn button-background-move"
          onClick={handleCalculate}
        >
          Calculate
        </button>
      </form>
      <Toaster />
    </>
  );
};

export default CalculatePriceForm;

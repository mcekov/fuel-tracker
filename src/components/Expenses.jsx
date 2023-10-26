import React, { useContext } from "react";

import FuelExpenseContext from "../context/fuelExpenseContext";

const Expenses = () => {
  const { fuelTrip, fuelLitters } = useContext(FuelExpenseContext);
  return (
    <div>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h4>Fuel</h4>
        <p id="money-plus" className="money plus">
          {fuelLitters.toFixed(2)}литра
        </p>
      </div>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h4>Expense</h4>
        <p id="money-minus" className="money minus">
          {fuelTrip.toFixed(2)}лв.
        </p>
      </div>
    </div>
  );
};

export default Expenses;

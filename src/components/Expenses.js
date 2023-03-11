import React, { useContext } from "react";

import FuelExpenseContext from "../context/fuelExpenseContext";

const Expenses = () => {
  const { fuelTrip, fuelLitters } = useContext(FuelExpenseContext);
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Fuel</h4>
        <p id="money-plus" className="money plus">
          {fuelLitters}L
        </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p id="money-minus" className="money minus">
          {fuelTrip.toFixed(2)}лв.
        </p>
      </div>
    </div>
  );
};

export default Expenses;

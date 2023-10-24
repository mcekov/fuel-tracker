import React, { useContext } from "react";
import FuelExpenseContext from "../context/fuelExpenseContext";

const Price = () => {
  const { fuelData } = useContext(FuelExpenseContext);

  return (
    <>
      <h4>Current {fuelData.fuel} Price</h4>
      <h1 id="balance">{`${fuelData ? fuelData.price : "N/A"}${
        fuelData ? fuelData.dimension : ""
      }`}</h1>
    </>
  );
};

export default Price;

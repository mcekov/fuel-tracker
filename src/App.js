import { useContext, useEffect } from "react";
import "./App.css";
import CalculatePriceForm from "./components/CalculatePriceForm";
import Expenses from "./components/Expenses";
import GasNews from "./components/GasNews";
import Header from "./components/Header";
import ShowPrice from "./components/ShowPrice";

import FuelExpenseContext from "./context/fuelExpenseContext";

function App() {
  const { fetchFuelPrice } = useContext(FuelExpenseContext);

  useEffect(() => {
    fetchFuelPrice();
  }, []);

  return (
    <>
      <Header />
      <div className="container">
        <ShowPrice />
        <Expenses />
        <GasNews />
        <CalculatePriceForm />
      </div>
    </>
  );
}

export default App;

import { useContext, useEffect } from "react";
import "./App.css";

import CalculatePriceForm from "./components/CalculatePriceForm";
import Expenses from "./components/Expenses";
import ShowNews from "./components/ShowNews";
import Header from "./components/Header";
import ShowPrice from "./components/ShowPrice";

import FuelExpenseContext from "./context/fuelExpenseContext";

function App() {
  const { fetchFuelPrice, fetchNews } = useContext(FuelExpenseContext);

  useEffect(() => {
    fetchFuelPrice();
    // fetchNews();
  }, []);

  return (
    <div className="container mx-auto w-[400px] mt-10">
      <Header />
      <ShowPrice />
      <Expenses />
      <ShowNews />
      <CalculatePriceForm />
    </div>
  );
}

export default App;

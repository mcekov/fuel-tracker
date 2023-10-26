import { useContext, useEffect } from "react";
import "./App.css";

import CalculatePriceForm from "./components/CalculatePriceForm";
import Expenses from "./components/Expenses";
import ShowNews from "./components/ShowNews";
import Header from "./components/Header";
import ShowPrice from "./components/ShowPrice";

import FuelExpenseContext from "./context/fuelExpenseContext";

function App() {
  const { fetchFuelPrice, fetchNews, fetchGasStation } =
    useContext(FuelExpenseContext);

  useEffect(() => {
    fetchFuelPrice();
    fetchNews();
    fetchGasStation();
  }, []);

  return (
    <div className="container mx-auto w-[400px] mt-10">
      <Header />
      <ShowPrice />
      {/* <ShowNews /> */}
      <h3 className="text-xl font-bold text-slate-700 mt-5">Calculate Price</h3>
      <Expenses />
      <CalculatePriceForm />
    </div>
  );
}

export default App;

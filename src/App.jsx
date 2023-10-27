import { useContext, useEffect } from "react";
import "./App.css";

import CalculatePriceForm from "./components/CalculatePriceForm";
import Expenses from "./components/Expenses";
import ShowNews from "./components/ShowNews";
import Header from "./components/Header";
import ShowPrice from "./components/ShowPrice";

import FuelExpenseContext from "./context/FuelExpenseContext";
import { ThemeProvider } from "./context/ThemeProvider";

import { ModeToggle } from "./components/ModeToggle";

function App() {
  const { fetchFuelPrice, fetchNews, fetchGasStation } =
    useContext(FuelExpenseContext);

  useEffect(() => {
    fetchFuelPrice("diesel");
    fetchFuelPrice("gasoline");
    fetchFuelPrice("lpg");
    fetchFuelPrice("methane");
    fetchNews();
    fetchGasStation();
  }, []);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="container mx-auto w-full md:w-auto mt-10">
        <ModeToggle />
        <Header />
        <ShowPrice />
        {/* <ShowNews /> */}
        <Expenses />
        <CalculatePriceForm />
      </div>
    </ThemeProvider>
  );
}

export default App;

import { useContext, useEffect } from "react";
import "./App.css";

import CalculatePriceForm from "./components/CalculatePriceForm";
import Expenses from "./components/Expenses";
import ShowNews from "./components/ShowNews";
import Header from "./components/Header";
import ShowPrice from "./components/ShowPrice";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
      <DropdownMenu className="flex justify-center align-items: flex-end">
        <DropdownMenuTrigger
          className="rounded-full w-[35px] h-[35px] inline-flex items-center justify-center text-violet11 bg-white shadow-xl outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black"
          aria-label="Customise options"
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.49998 4.09998C2.27906 4.09998 2.09998 4.27906 2.09998 4.49998C2.09998 4.72089 2.27906 4.89998 2.49998 4.89998H12.5C12.7209 4.89998 12.9 4.72089 12.9 4.49998C12.9 4.27906 12.7209 4.09998 12.5 4.09998H2.49998ZM2.49998 6.09998C2.27906 6.09998 2.09998 6.27906 2.09998 6.49998C2.09998 6.72089 2.27906 6.89998 2.49998 6.89998H12.5C12.7209 6.89998 12.9 6.72089 12.9 6.49998C12.9 6.27906 12.7209 6.09998 12.5 6.09998H2.49998ZM2.09998 8.49998C2.09998 8.27906 2.27906 8.09998 2.49998 8.09998H12.5C12.7209 8.09998 12.9 8.27906 12.9 8.49998C12.9 8.72089 12.7209 8.89998 12.5 8.89998H2.49998C2.27906 8.89998 2.09998 8.72089 2.09998 8.49998ZM2.49998 10.1C2.27906 10.1 2.09998 10.2791 2.09998 10.5C2.09998 10.7209 2.27906 10.9 2.49998 10.9H12.5C12.7209 10.9 12.9 10.7209 12.9 10.5C12.9 10.2791 12.7209 10.1 12.5 10.1H2.49998Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Menu</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Dashboard</DropdownMenuItem>
          <DropdownMenuItem>News</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

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

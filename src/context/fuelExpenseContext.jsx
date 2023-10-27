import { createContext, useState } from "react";
import axios from "axios";

const FuelExpenseContext = createContext();

function FuelExpenseProvider({ children }) {
  const [fuelData, setFuelData] = useState([]);

  const [fuelTrip, setFuelTrip] = useState(0);
  const [fuelLitters, setFuelLitters] = useState(0);

  const [news, setNews] = useState([]);
  const [gasStation, setGasStation] = useState([]);

  const fetchFuelPrice = async (fuel) => {
    const { data } = await axios(`${import.meta.env.VITE_BASEURL}/price`, {
      params: {
        key: import.meta.env.VITE_APP_KEY,
        fuel,
      },
      headers: {
        "Content-Type": "application/json",
      },
    });

    setFuelData((prevData) => [...prevData, data]);
  };

  const fetchGasStation = async () => {
    const { data } = await axios(`${import.meta.env.VITE_BASEURL}/gasstation`, {
      params: {
        key: import.meta.env.VITE_APP_KEY,
        id: 5,
      },
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!gasStation.length) {
      setGasStation(data);
    }
  };

  const fetchNews = async () => {
    const { data } = await axios(`${import.meta.env.VITE_BASEURL}/news`, {
      params: {
        key: import.meta.env.VITE_APP_KEY,
        fuel: "diesel",
        count: 5,
      },
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!news.length) {
      setNews(data.news);
    }
  };

  const calculateExpenses = (efficiency, distance) => {
    const littersForTrip = (efficiency * distance) / 100;

    setFuelTrip(littersForTrip * fuelData.price);
    setFuelLitters((efficiency * distance) / 100);
  };

  const sharedState = {
    fuelData,
    fetchFuelPrice,
    calculateExpenses,
    fetchGasStation,
    fuelTrip,
    fuelLitters,
    fetchNews,
    news,
  };

  return (
    <FuelExpenseContext.Provider value={sharedState}>
      {children}
    </FuelExpenseContext.Provider>
  );
}

export { FuelExpenseProvider };
export default FuelExpenseContext;

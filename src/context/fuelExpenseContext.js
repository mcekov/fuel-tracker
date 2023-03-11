import axios from "axios";
import { createContext, useState } from "react";

const FuelExpenseContext = createContext();

function Provider({ children }) {
  const [fuelData, setFuelData] = useState("");
  const [fuelTrip, setFuelTrip] = useState(0);
  const [fuelLitters, setFuelLitters] = useState(0);

  const [news, setNews] = useState([]);

  const fetchFuelPrice = async () => {
    const { data } = await axios(`${process.env.REACT_APP_BASEURL}/price`, {
      params: {
        key: process.env.REACT_APP_KEY,
        fuel: "diesel",
      },
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!fuelData) {
      setFuelData(data);
    }
  };

  const fetchNews = async () => {
    const { data } = await axios(`${process.env.REACT_APP_BASEURL}/news`, {
      params: {
        key: process.env.REACT_APP_KEY,
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

    console.log(data);
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

export { Provider };
export default FuelExpenseContext;

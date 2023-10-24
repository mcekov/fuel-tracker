import { useContext } from "react";

import FuelExpenseContext from "../context/fuelExpenseContext";

const GasNews = () => {
  const { news } = useContext(FuelExpenseContext);

  const renderedNews = news.map((item) => {
    const [date, hour] = item.date.split(" ");
    return (
      <li
        key={item.id}
        className={item.text.includes("поскъпна") ? "minus" : "plus"}
      >
        <span>
          {date} <br></br>
          <b>{item.text}</b>
        </span>
      </li>
    );
  });

  return (
    <>
      <h3>Fuel Price News</h3>
      <ul id="list" className="list">
        {"renderedNews"}
      </ul>
    </>
  );
};

export default GasNews;

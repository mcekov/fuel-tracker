import { useContext } from "react";

import FuelExpenseContext from "../context/FuelExpenseContext";

const GasNews = () => {
  const { news } = useContext(FuelExpenseContext);

  console.log("n: ", news);

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
        {renderedNews}
      </ul>
    </>
  );
};

export default GasNews;

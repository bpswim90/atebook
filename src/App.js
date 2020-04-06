import React from "react";
import "./App.css";
import MonthNav from "./components/monthNav";
import MonthLog from "./components/monthLog";
import "bulma/css/bulma.css";

function App() {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  const today = new Date();
  let currentMonth = today.getMonth();
  const currentYear = today.getYear();

  function daysInCurrentMonth() {
    return new Date(currentYear, currentMonth, 0).getDate();
  }

  return (
    <>
      <nav className="level is-mobile" style={{ paddingTop: "1rem" }}>
        <div className="level-item has-text-centered">
          <span
            className="icon"
            onClick={() => (currentMonth = currentMonth - 1)}
          >
            <i className="fas fa-chevron-left" />
          </span>
        </div>
        <div className="level-item has-text-centered">
          <p className="title">{months[currentMonth]}</p>
        </div>
        <div className="level-item has-text-centered">
          <span
            className="icon"
            onClick={() => (currentMonth = currentMonth + 1)}
          >
            <i className="fas fa-chevron-right" />
          </span>
        </div>
      </nav>
      <MonthLog days={daysInCurrentMonth()} />
    </>
  );
}

export default App;

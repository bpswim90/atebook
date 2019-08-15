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
  const currentMonth = today.getMonth();
  const currentYear = today.getYear();

  function daysInCurrentMonth() {
    return new Date(currentYear, currentMonth, 0).getDate();
  }

  return (
    <>
      <MonthNav month={months[currentMonth]} />
      <MonthLog days={daysInCurrentMonth()} />
    </>
  );
}

export default App;

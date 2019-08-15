import React from "react";
import DayLog from "./dayLog";

function MonthLog({ days }) {
  function renderDayLogs(days) {
    let dayLogs = [];
    for (let i = 1; i <= days; i++) {
      dayLogs.push(<DayLog day={i} key={i} />);
    }
    return dayLogs;
  }

  const dayLogs = renderDayLogs(days);

  return <div>{dayLogs}</div>;
}

export default MonthLog;

import React from "react";

function MonthNav({ month }) {
  return (
    <nav className="level is-mobile" style={{ paddingTop: "1rem" }}>
      <div className="level-item has-text-centered">
        <span className="icon">
          <i className="fas fa-chevron-left" />
        </span>
      </div>
      <div className="level-item has-text-centered">
        <p className="title">{month}</p>
      </div>
      <div className="level-item has-text-centered">
        <span className="icon">
          <i className="fas fa-chevron-right" />
        </span>
      </div>
    </nav>
  );
}

export default MonthNav;

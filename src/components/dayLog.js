import React, { useState } from "react";

function DayLog({ day }) {
  const [editable, setEditable] = useState(false);

  return (
    <>
      <div className="level is-mobile" style={{ marginBottom: "1rem" }}>
        <div className="level-left">
          <div className="level-item" style={{ padding: "0 1rem 0 1rem" }}>
            {day}
          </div>
        </div>
        <div
          className="level-item"
          style={{ paddingRight: "1rem" }}
          onClick={() => setEditable(true)}
        >
          {editable ? (
            <input
              className="input is-rounded"
              type="text"
              placeholder="Add text"
              onKeyPress={e => {
                if (e.key === "Enter") {
                  setEditable(false);
                }
              }}
              onBlur={() => setEditable(false)}
            />
          ) : (
            <input
              className="input is-rounded"
              type="text"
              placeholder="Add text"
              disabled
            />
          )}
        </div>
      </div>
    </>
  );
}

export default DayLog;

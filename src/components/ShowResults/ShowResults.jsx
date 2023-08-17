import React from 'react'

function ShowResults({years, months, days, validation}) {
    return (
      <div className="result">
        <div>
          <span className="resultState">{validation ? years : "--"}</span>{" "}
          <span>years</span>
        </div>
        <div>
          <span className="resultState">{validation ? months : "--"}</span>{" "}
          <span>months</span>
        </div>
        <div>
          <span className="resultState">{validation ? days : "--"}</span>{" "}
          <span>days</span>
        </div>
      </div>
    );
}

export default ShowResults
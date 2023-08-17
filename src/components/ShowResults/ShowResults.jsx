import React from 'react'

function ShowResults({years, months, days}) {
    return (
      <div className="result">
        <div>
          <span className="resultState">{years === "" ? "--" : years}</span>{" "}
          <span>years</span>
        </div>
        <div>
          <span className="resultState">{months === "" ? "--" : months}</span>{" "}
          <span>months</span>
        </div>
        <div>
          <span className="resultState">{days === "" ? "--" : days}</span>{" "}
          <span>days</span>
        </div>
      </div>
    );
}

export default ShowResults
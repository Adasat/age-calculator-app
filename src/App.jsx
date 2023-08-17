import { useState } from "react";

import "./App.css";
import Attribution from "./components/Attribution/Attribution";
import InputForm from "./components/InputForm/InputForm";
import ShowResults from "./components/ShowResults/ShowResults";

function App() {
  const [year, setYear] = useState("--");
  const [month, setMonth] = useState("--");
  const [day, setDay] = useState("--");

  const handleDayChange = (value) => {
    setDay(value);
  };

  const handleMonthChange = (value) => {
    setMonth(value);
  };

  const handleYearChange = (value) => {
    setYear(value);
  };

  return (
    <>
      <div className="container">
        <div className="card">
          <InputForm
            onDayChange={handleDayChange}
            onMonthChange={handleMonthChange}
            onYearChange={handleYearChange}
          />
          <div className="divider">
            <div className="boundaries"></div>
            <div className="button" onClick={"hola"}>
              <img src="../public/assets/images/icon-arrow.svg" />
            </div>
          </div>
          <ShowResults years={year} months={month} days={day} />
        </div>
      </div>
      <Attribution />
    </>
  );
}

export default App;

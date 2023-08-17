import {
  differenceInYears,
  differenceInMonths,
  differenceInDays,
} from "date-fns";

import { useState } from "react";

import "./App.css";
import Attribution from "./components/Attribution/Attribution";
import InputForm from "./components/InputForm/InputForm";
import ShowResults from "./components/ShowResults/ShowResults";

function App() {
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [validationForm, setValidationForm] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});

  const handleSubmit = () => {
    const errors = {};

    if (!year || !month || !day) {
      errors.emptyFields = "Please fill in all fields.";
    } else if (
      day < 1 ||
      day > 31 ||
      month < 1 ||
      month > 12 ||
      year > new Date().getFullYear() ||
      !isValidDate(day, month, year)
    ) {
      errors.invalidDate = "Invalid date.";
    }

    if (Object.keys(errors).length === 0) {
      setValidationForm(true);
       const birthDate = new Date(year, month - 1, day);
       const currentDate = new Date();
       const ageYears = differenceInYears(currentDate, birthDate);
       const ageMonths = differenceInMonths(currentDate, birthDate) % 12;
       const ageDays = differenceInDays(currentDate, birthDate) % 30; 

       setYear(ageYears);
       setMonth(ageMonths);
       setDay(ageDays);
    } else {
      setValidationErrors(errors);
    }
  };

  const isValidDate = (d, m, y) => {
    const day = parseInt(d, 10);
    const month = parseInt(m, 10);
    const year = parseInt(y, 10);

    if (isNaN(day) || isNaN(month) || isNaN(year)) {
      return false;
    }

    if (year < 1 || year > new Date().getFullYear()) {
      return false;
    }

    if (month < 1 || month > 12) {
      return false;
    }

    const daysInMonth = new Date(year, month, 0).getDate();
    if (day < 1 || day > daysInMonth) {
      return false;
    }

    return true;
  };

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
            <div className="button" onClick={handleSubmit}>
              <img src="../public/assets/images/icon-arrow.svg" />
            </div>
          </div>
          <ShowResults
            years={year}
            months={month}
            days={day}
            validation={validationForm}
          />
        </div>
      </div>
      <Attribution />
    </>
  );
}

export default App;

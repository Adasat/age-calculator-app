
function InputForm(props) {
  return (
    <div className="inputs">
      <div className="dayInput">
        <label className="label">DAY</label>
        <input
          type="number"
          id="day"
          placeholder="DD"
          className="inputFormat"
          onChange={(e) => props.onDayChange(e.target.value)}
        />
      </div>
      <div className="monthInput">
        <label className="label">MONTH</label>
        <input
          type="number"
          id="month"
          placeholder="MM"
          className="inputFormat"
          onChange={(e) => props.onMonthChange(e.target.value)}
        />
      </div>
      <div className="yearInput">
        <label className="label">YEAR</label>
        <input
          type="number"
          id="year"
          placeholder="YYYY"
          className="inputFormat"
          onChange={(e) => props.onYearChange(e.target.value)}
        />
      </div>
    </div>
  );
}

export default InputForm
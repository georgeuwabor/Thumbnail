import "../Style/Time.css";

const Time = () => {
  let date = new Date();
  let today = date.toDateString().split(" ");
  let dayWord = today[0];
  let dayNumber = today[2];
  let time = date.toLocaleTimeString();

  return (
    <>
      <div id="time-container">
        <div className="time_date_container">
          <p className="time1">{`${dayWord} ${dayNumber}`}</p>
          <p className="time2">{time}</p>
        </div>
      </div>
    </>
  );
};

export default Time;

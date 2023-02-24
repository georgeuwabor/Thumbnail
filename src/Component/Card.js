import "../Style/Card.css";
import axios from "axios";
import { useState } from "react";

const Card = () => {
  const [Task, setTask] = useState(" ");
  const update = async (e) => {
    e.preventDefault();
    setTask(" ");

    const form = {
      name: Task,
      date: new Date(),
      isCompleted: false,
    };

    const res = await axios.post(
      "https://uptight-teal-walrus.cyclic.app/task",
      form
    );

    console.log(res);
  };

  return (
    <>
      <form id="form-container" onSubmit={update}>
        <div id="input-container">
          <input
            value={Task}
            onChange={(e) => {
              setTask(e.target.value);
            }}
            className="input"
            type="text"
            placeholder="Note"
          />
        </div>
        <div id="button-container">
          <button className="symbol">+</button>
        </div>
      </form>
    </>
  );
};

export default Card;

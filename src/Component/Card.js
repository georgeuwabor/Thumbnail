import "../Style/Card.css";

import { useState, useContext } from "react";
import PostTask from "../Context/PostTask";

const Card = () => {
  const [Task, setTask] = useState(" ");
  const { update } = useContext(PostTask);

  return (
    <>
      <form
        id="form-container"
        onSubmit={(e) => {
          update(e, setTask, Task);
        }}
      >
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

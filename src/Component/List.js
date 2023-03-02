import Vector from "../Asset/Vector.png";
import "../Style/List.css";
import { useContext } from "react";
import UpdateTask from "../Context/UpdateTask";
import DeleteTask from "../Context/DeleteTask";

const List = (props) => {
  const { check } = useContext(UpdateTask);
  const { del } = useContext(DeleteTask);
  return (
    <>
      <div id="List-container">
        <div id="dinner-container">
          <h3 id="dinner">{props.name}</h3>
          <p id="time">{props.date}</p>
        </div>
        <div id="checkbox-container">
          <input
            type="checkbox"
            className="checkbox"
            onChange={(e) => check(e, props.id)}
            checked={props.isCompleted}
          />
          <img src={Vector} alt="" onClick={() => del(props.id)} />
        </div>
      </div>
    </>
  );
};

export default List;

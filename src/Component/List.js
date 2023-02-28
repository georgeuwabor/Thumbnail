import Vector from "../Asset/Vector.png";
import "../Style/List.css";
import axios from "axios";

const List = (props) => {
  const check = async (e) => {
    const body = {
      isCompleted: e.target.checked,
    };

    const data = await axios.put(
      `${process.env.REACT_APP_API_URL}/${props.id}`,
      body
    );
  };

  const del = () => {
    axios.delete(`${process.env.REACT_APP_API_URL}/${props.id}`);
  };
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
            onChange={check}
            checked={props.isCompleted}
          />
          <img src={Vector} alt="" onClick={del} />
        </div>
      </div>
    </>
  );
};

export default List;

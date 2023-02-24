import Vector from "../Asset/Vector.png";
import "../Style/List.css";
const List = (props) => {
  return (
    <>
      <div id="List-container">
        <div id="dinner-container">
          <h3 id="dinner">{props.name}</h3>
          <p id="time">{props.date}</p>
        </div>
        <div id="checkbox-container">
          <input type="checkbox" className="checkbox" />
          <img src={Vector} alt="" />
        </div>
      </div>
    </>
  );
};

export default List;

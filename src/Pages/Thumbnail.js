import Card from "../Component/Card";
import List from "../Component/List";
import Task from "../Component/Task";
import Time from "../Component/Time";
import { useEffect, useState } from "react";
import axios from "axios";

const Thumbnail = () => {
  const [list, setList] = useState([]);
  const baseUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const x = async () => {
      const data = await axios.get(baseUrl);
      setList(data.data);
    };
    x();
  });

  return (
    <div id="thumbnail-container">
      <Task />
      <div id="thumbnail">
        <Time />
        <Card />
        <div id="details">
          {list.map((item) => (
            <List
              name={item.name ? item.name : "No Task"}
              date={item.date ? item.date : "No Date"}
              isCompleted={item.isCompleted}
              id={item._id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Thumbnail;

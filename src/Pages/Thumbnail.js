import Card from "../Component/Card";
import List from "../Component/List";
import Time from "../Component/Time";
import { useEffect } from "react";
import GetTask from "../Context/GetTask";
import { useContext } from "react";
import { PostTaskProvider } from "../Context/PostTask";
import { UpdateTaskProvider } from "../Context/UpdateTask";
import { DeleteTaskProvider } from "../Context/DeleteTask";

const Thumbnail = () => {
  const { getFunction, list } = useContext(GetTask);

  useEffect(() => {
    getFunction();
  });

  return (
    <div id="thumbnail-container">
      <div id="thumbnail">
        <Time />
        <PostTaskProvider>
          <Card />
        </PostTaskProvider>
        <DeleteTaskProvider>
          <UpdateTaskProvider>
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
          </UpdateTaskProvider>
        </DeleteTaskProvider>
      </div>
    </div>
  );
};

export default Thumbnail;

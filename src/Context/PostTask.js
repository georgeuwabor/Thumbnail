import { createContext } from "react";
import axios from "axios";

const PostTask = createContext();

export const PostTaskProvider = ({ children }) => {
  const update = async (e, setTask, Task) => {
    e.preventDefault();
    setTask(" ");

    const form = {
      name: Task,
      date: new Date(),
      isCompleted: false,
    };

    const res = await axios.post(process.env.REACT_APP_API_URL, form);
  };

  return <PostTask.Provider value={{ update }}>{children}</PostTask.Provider>;
};

export default PostTask;

import { createContext } from "react";
import axios from "axios";

const UpdateTask = createContext();

export const UpdateTaskProvider = ({ children }) => {
  const check = async (e, id) => {
    const body = {
      isCompleted: e.target.checked,
    };

    const data = await axios.put(
      `${process.env.REACT_APP_API_URL}/${id}`,
      body
    );
  };

  return (
    <UpdateTask.Provider value={{ check }}>{children}</UpdateTask.Provider>
  );
};

export default UpdateTask;

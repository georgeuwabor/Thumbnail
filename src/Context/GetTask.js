import { createContext, useState } from "react";
import axios from "axios";

const GetTask = createContext();

export const GetTaskProvider = ({ children }) => {
  const [list, setList] = useState([]);
  const baseUrl = process.env.REACT_APP_API_URL;

  const getFunction = async () => {
    const data = await axios.get(baseUrl);
    setList(data.data);
  };

  return (
    <GetTask.Provider value={{ getFunction, list }}>
      {children}
    </GetTask.Provider>
  );
};

export default GetTask;

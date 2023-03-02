import { createContext } from "react";
import axios from "axios";

const DeleteTask = createContext();

export const DeleteTaskProvider = ({ children }) => {
  const del = (id) => {
    axios.delete(`${process.env.REACT_APP_API_URL}/${id}`);
  };
  return <DeleteTaskProvider value={{ del }}>{children}</DeleteTaskProvider>;
};

export default DeleteTask;

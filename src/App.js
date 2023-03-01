import "./App.css";
import Thumbnail from "./Pages/Thumbnail";
import Task from "./Component/Task";
import { GetTaskProvider } from "./Context/GetTask";

function App() {
  return (
    <div>
      <GetTaskProvider>
        <Task />
        <Thumbnail />
      </GetTaskProvider>
    </div>
  );
}

export default App;

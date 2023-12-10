import "./App.css";
import ProjectsShowCard from "./Components/Project_Display_Card/ProjectsShowCard";
import { Proj_Data } from "./Components/Project_Display_Card/Data";

function App(props) {
  return (
    <div className="App">
      {Proj_Data.map((Proj_Data, index) => (
        <ProjectsShowCard key={index} Proj_Data={Proj_Data} />
      ))}
    </div>
  );
}

export default App;

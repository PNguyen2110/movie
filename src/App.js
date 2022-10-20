import { BrowserRouter } from "react-router-dom";
import "./App.css";
import DemoSpring from "./Demo/DemoSpring";
import Routers from "./routers/Routers";

function App() {
  return (
    // <div>
    //   <DemoSpring />
    // </div>
    <div>
      <BrowserRouter>
        {/* <Header /> */}
        <Routers />
      </BrowserRouter>
    </div>
  );
}

export default App;

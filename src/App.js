import "./App.css";
import { Switch, Route, Router } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={HomePage} />
    </div>
  );
}

export default App;
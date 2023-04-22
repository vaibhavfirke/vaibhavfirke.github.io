import "./App.css";
import Home from "./Conponents/Home";

import { Route, Routes } from "react-router";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;

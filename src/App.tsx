import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Home.tsx";
import How from "./How.tsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/how" element={<How />} />
    </Routes>
  );
}

export default App;
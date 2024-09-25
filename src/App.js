import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Note1 from "./component/Note1";
import Note2 from "./component/Note2";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Note1 />} />
        <Route path="/two" element={<Note2 />} />
      </Routes>
    </div>
  );
}

export default App;

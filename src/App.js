import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./components/homepage/Homepage";
import Watches from "./components/watches/Watches";
import Bats from "./components/bats/Bats";
import Shoes from "./components/shoes/Shoes";
import Itembuy from "./components/buyitem/Itembuy";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/watches" element={<Watches />} />
          <Route path="/bats" element={<Bats />} />
          <Route path="/shoes" element={<Shoes />} />
          <Route path="/Itembuy/:title" element={<Itembuy />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

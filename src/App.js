import { useState } from "react";
import "./styles/App.css";

import Header from "./components/Header";
import TopMenu from "./components/TopMenu";

import Home from "./pages/Home";

function App() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="App">
      <Header />
      <TopMenu setOpenModal={setOpenModal} />
      <Home openModal={openModal} setOpenModal={setOpenModal} />
    </div>
  );
}

export default App;

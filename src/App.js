import {useState} from 'react'
import './styles/App.css';

import Header from "./components/Header";
import TopMenu from "./components/TopMenu";

import Home from "./pages/Home";

import Tasks from "./data/tasks.json";

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [tasksList, setTasksList] = useState(Tasks);
  console.log(tasksList);
  return (
    <div className="App">
      <Header />
      <TopMenu setOpenModal={setOpenModal} />
      <Home
        openModal={openModal}
        tasksList={tasksList}
        setTasksList={setTasksList}
        setOpenModal={setOpenModal}
      />
    </div>
  );
}

export default App;

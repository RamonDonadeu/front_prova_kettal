import axios from "axios";
import "./App.css";
import CochesList from "./Pages/CochesList/CochesList";
import Header from "./Components/Header/Header";
import url from "./config/backendConfig";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EditCoche from "./Pages/EditCoche/EditCoche";
import CreateCoche from "./Pages/CreateCoche/CreateCoche";
import Message from "./Components/Message/Message";

axios.defaults.baseURL = url;
axios.defaults.withCredentials = true;

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<CochesList />}></Route>
        <Route path="/edit/:id" element={<EditCoche />}></Route>
        <Route path="/create" element={<CreateCoche />}></Route>
      </Routes>
      <Message></Message>
    </div>
  );
}

export default App;

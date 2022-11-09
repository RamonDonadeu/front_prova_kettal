import axios from "axios";
import "./App.css";
import CochesList from "./Components/CochesList/CochesList";
import Header from "./Components/Header/Header";
import url from "./config/backendConfig";

axios.defaults.baseURL = url;
axios.defaults.withCredentials = true;

function App() {
  return (
    <div className="App">
      <Header></Header>
      <CochesList></CochesList>
    </div>
  );
}

export default App;

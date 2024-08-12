import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import BackGround1 from "./views/BackGround1";
import Header from './views/Headers';
import Main from "./views/Main";
import Search from "./views/Search";

function App() {
  return (
    <div>
    <Header/>
    <BackGround1/>
    <Routes>
      <Route exact path='/' element={<Main/>}/>
    </Routes>
    </div>
  );
}

export default App;

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import BackGround from "./views/BackGround";
import Header from './views/Headers';
import Main from "./views/Main";
import Search from "./views/Search";
import SelfIntro from "./views/SelfIntroduce";

function App() {
  return (
    <div>
    <Header/>
    {/* <BackGround/> */}
    <Routes>
      <Route exact path='/' element={<Main/>}/>
      <Route exact path='/IntroModify' element={<SelfIntro/>}/>
    </Routes>
    </div>
  );
}

export default App;

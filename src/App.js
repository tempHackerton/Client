import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import BackGround from "./views/BackGround";
import Header from "./views/Headers";
import Main from "./views/Main";
import Search from "./views/Search";
import SelfIntro from "./views/SelfIntroduce";
import Interview from "./views/Interview";
import Login from "./views/Login";
import Signup from "./views/Signup";

function App() {
    return (
        <div>
            <Header />
            <BackGround />
            <Routes>
                <Route exact path="/" element={<Main />} />
                <Route exact path="/Login" element={<Login/>}/>
                <Route exact path="/Signup" element={<Signup/>}/>
                <Route exact path="/Search" element={<Search />} />
                <Route exact path="/Interview" element={<Interview />} />
                <Route exact path="/IntroModify" element={<SelfIntro />} />
            </Routes>
        </div>
    );
}

export default App;

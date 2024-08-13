import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import BackGround from "./views/BackGround";
import Header from "./views/Header";
import Main from "./views/Main";
import Search from "./views/Search";
import Interview from "./views/Interview";

function App() {
    return (
        <div>
            <Header />
            <BackGround />
            <Routes>
                <Route exact path="/" element={<Main />} />
                <Route exact path="/search" element={<Search />} />
                <Route exact path="/interview" element={<Interview />} />
            </Routes>
        </div>
    );
}

export default App;

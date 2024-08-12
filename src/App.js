import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Main from "./views/Main";
import Search from "./views/Search";

function App() {
    return (
        <Routes>
            <Route exact path="/" element={<Main />} />
            <Route exact path="/search" element={<Search />} />
        </Routes>
    );
}

export default App;

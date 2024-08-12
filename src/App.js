import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import BackGround from "./views/BackGround";
import Header from './views/Header';
import Main from "./views/Main";

function App() {
  return (
    <div>
    <Header/>
    <BackGround/>
    <Routes>
      <Route exact path='/' element={<Main/>}/>
    </Routes>
    </div>
  );
}

export default App;

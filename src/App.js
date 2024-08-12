import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Main from "./views/Main";
import Header from './views/Header';

function App() {
  return (
    <div>
    <Header/>
    <Routes>
      <Route exact path='/' element={<Main/>}/>
    </Routes>
    </div>
  );
}

export default App;

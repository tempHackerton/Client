import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Main from "./views/Main";

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Main/>}/>
    </Routes>
  );
}

export default App;

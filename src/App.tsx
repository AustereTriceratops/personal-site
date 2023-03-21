import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import EscapeFractal from "./escape-fractal/EscapeFractal";
import Counter from './home/home'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Counter/>} />
        <Route path="/escapefractal" element={<EscapeFractal/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;

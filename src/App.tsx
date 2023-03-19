import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Counter = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1)
  }

  return (
    <div className="App" onClick={incrementCount}>
      {count}
    </div>
  );
}

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" />
        <Route path="/test" element={<Counter/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;

import React, { useState } from "react";

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

  export default Counter;
  
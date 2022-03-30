import React, { useState } from 'react';
import "./index.css"


export default function Counter() {
const [count, setCount] = useState(0);

    return (
      <div className="counter">
          <h1 className="result" data-testid="value">{count}</h1>
          <button className="increment" onClick={() => setCount(count +1 )}>+</button>
          <button className="decrement" onClick={() => setCount(count -1 )}>-</button>
      </div>
      
    );
  }
  
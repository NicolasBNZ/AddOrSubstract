import React, { useState } from 'react';


export default function Counter() {
const [count, setCount] = useState(0);

    return (
      <div className="Counter">
          <p data-testid="value">{count}</p>
          <button id="increment" onClick={() => setCount(count +1 )}>+</button>
          <button id="decrement" onClick={() => setCount(count -1 )}>-</button>
      </div>
      
    );
  }
  
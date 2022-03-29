import React from 'react';


export default function Counter() {

    return (
      <div className="Counter">
          <p id="value">100</p>
          <button id="increment" onClick>+</button>
          <button id="decrement" onClick>-</button>
      </div>
      
    );
  }
  
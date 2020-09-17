import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = React.useState(0)

  return (
    <div className="App">
      <div className='header' data-test='header'>
        <h1>Counter</h1>
      </div>

      <div className='buttons'>
        <span data-test='increase'>
          <button onClick={() => setCount(count + 1)}>click to increase count</button>
        </span>
        &nbsp;
        <span data-test='decrease'>
          <button onClick={() => setCount(count - 1)}>click to decrease count</button>
        </span>
      </div>

      <div>
        <span data-test='counter-display'><h2>The current count is {count}</h2></span>
      </div>
    </div>
  );
}

export default App;

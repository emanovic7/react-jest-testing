import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = React.useState(0)

  return (
    <div className="App">
      <div className='header'>
        <h1>Counter</h1>
      </div>

      <div className='buttons'>
        <span><button>click to increase count</button></span>
        &nbsp;
        <span><button>click to decrease count</button></span>
      </div>

      <div>
        <h2>The current count is {count}</h2>
      </div>
    </div>
  );
}

export default App;

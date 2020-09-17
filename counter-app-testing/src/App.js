import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = React.useState(0);
  const [error, setError] = React.useState(false);

  const decreaseCount = () => {

  }

  return (
    <div className="App">
      <div className='header' data-test='header'>
        <h1>Counter</h1>
      </div>

      <div className='buttons'>
        <span>
          <button 
            data-test='increase'
            onClick={() => {
              if (error) { setError(false); }
              setCount(count + 1)
              }
            }
            >
              click to increase count
          </button>
        </span>
        &nbsp;
        <span>
          <button 
            data-test='decrease'
            onClick={() => {
              if(count > 0){
                setCount(count - 1);
              }else {
                setError(true);
                }
              }
            }
            >
              click to decrease count
          </button>
        </span>
      </div>

      <div>
        <h2 data-test='counter-display'>
          The current count is <span data-test='count'>{count}</span>
        </h2>
      </div>
      <div data-test='error-display' className={`error ${error ? '' : 'hidden'}`}>
        The counter can not go below 0
      </div>
    </div>
  );
}

export default App;

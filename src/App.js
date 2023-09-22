import React, {useState} from 'react';
import './App.css';

function App() {
  let [count, setCount] = useState(0)
  return (
    <div className="App">
      <div className='container'>
        <h1>{count}</h1>
        <div className='btn-group'>
          <button onClick={() => setCount(count + 1)} className='btn-plus'>+</button>
          <button onClick={() => setCount(count - 1)} className='btn-minus'>-</button>
          <button onClick={() => setCount(count = 0)} className='btn-reset'>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;

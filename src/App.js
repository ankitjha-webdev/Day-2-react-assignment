import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './style.css';

const App = () => {

  let [count, setCount] = useState(0)
  return (
    <div className="counter">
      <header className="counter-header">
        <h1 className="counter-h1">COUNTER APPLICATION</h1>
        <h3>The Count  Value is:  </h3>
        <h1>{count}</h1>
        <button className="btn" onClick={()=>count < 25 ? setCount(count+1) :""}>Increment</button>
        <button className="btn" onClick={()=>count > 0?setCount(count-1) :""}>Decrement</button>
        <button className="btn" onClick={()=>setCount(0)}>Reset</button>
        
      </header>
      <footer>Created by @Ankit Kumar
        <p>contact@ankitkumar.engineer</p>
      </footer>
    </div>
  );
}

export default App;

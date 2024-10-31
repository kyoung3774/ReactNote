import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  function Down(){
    setCount(count - 1);
  }

  function Reset() {
    setCount(0);
  }

  function Up() {
    setCount(count + 1);
  }

  return (
    <div>
      <input type='button' value='-' onClick={Down}></input>
      <input type='button' value='0' onClick={Reset}></input>
      <input type='button' value='+' onClick={Up}></input>
      <span>{count}</span>
    </div>
  );
}

export default App;

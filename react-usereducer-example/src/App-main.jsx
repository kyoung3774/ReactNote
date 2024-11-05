import './App.css';
import { useState, useReducer } from 'react';

function App() {

  function countReducer(oldCount, action) {
    if(action.type === 'up') {
      return oldCount + action.num;
    } else if(action.type === 'down') {
      return oldCount - action.num;
    } else if(action.type === 'reset') {
      return 0
    } 
  }

  const [count, countDispatch] = useReducer(countReducer, 0); //()
  
  const [num, setNum] = useState(0);

  // 브라우져 화면 구현부
  return (
    <div className="App">

      <input type='button' value="-" onClick={() => {
        countDispatch({type: 'down', num: num});
      }}></input>

      <input type='button' value="reset" onClick={() => {
        countDispatch({type:'reset', num: num});
      }}></input>

      <input type='button' value="+" onClick={() => {
        countDispatch({type: 'up', num: num});
      }}></input>

      <input type='text' onChange={(event) => {
        setNum(Number(event.target.value));
      }}></input>

      <span>{count}</span>
    </div>
  );
}

export default App;

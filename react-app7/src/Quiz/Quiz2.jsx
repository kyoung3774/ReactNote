import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [length, setLength] = useState(0);

  function Change(e) {
    setLength(e.target.value.length);
  }

  return (
    <div>
      <input type='text' placeholder='텍스트 입력' onChange={Change}></input>
      <p>글자 수: {length}</p>
    </div>
  );
}

export default App;
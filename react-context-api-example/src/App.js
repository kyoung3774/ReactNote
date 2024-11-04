import './App.css';
import { createContext, useContext } from 'react';

// 공통 테마 생성
const themeDefault = { border: '10px solid red' };

// 컨텍스트 생성
const themeContext = createContext(themeDefault); // 초기값

function Sub1() {
  // 컨텍스트에서 현재 테마 꺼내기
  const theme = useContext(themeContext);

  return (
    // Sub2와 Sub2가 포함하고 있는 Sub1을 Provider로 감싸고 Provider에 새로운 스타일 추가
    <themeContext.Provider value={{ border: '10px solid green' }}>
      <div style={theme}>
        <h1>Sub1</h1>
        <Sub2></Sub2>
      </div>
    </themeContext.Provider>
  );
}

function Sub2() {
  // 컨텍스트에서 현재 테마 꺼내기
  const theme = useContext(themeContext);
  console.log('Sub2: ', theme);

  return (
    <div style={theme}>
      <h1>Sub2</h1>
      <Sub3></Sub3>
    </div>
  );
}

function Sub3() {
  // 컨텍스트에서 현재 테마 꺼내기
  const theme = useContext(themeContext);
  console.log('Sub3: ', theme);
  
  return (
    <div style={theme}>
      <h1>Sub3</h1>
    </div>
  );
}

function App() {
  // 컨텍스트에서 현재 테마 꺼내기
  const theme = useContext(themeContext);

  return (
    <div className="root" style={theme}>
      <Sub1></Sub1>
    </div>
  );
}

export default App;

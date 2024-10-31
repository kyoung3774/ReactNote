import logo from './logo.svg';
import './App.css';
import Recat from 'react';

function App() {

  // 자바스크립트로 엘리먼트 생성하기
  let element1 = Recat.createElement("div",null,"Hello"); // ("태그명",몰라,"")

  // 리액트의 jsx로 엘리먼트 생성하기
  let element2 = <div>Hello</div>

  // 
  const content = 'Hi';
  const namePlaceholder = "이름을 입력하세요";

  // JSX 문법에서 변수를 표현할 때는 {} 기호를 사용
  return (
    <div>
      {element1}
      {element2}
      <div>{content}</div>
      <input placeholder={namePlaceholder}></input>
    </div>
  );
}

export default App;

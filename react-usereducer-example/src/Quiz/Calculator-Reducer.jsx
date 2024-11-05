import './App.css';
import { useState, useReducer } from 'react';

// 계산기 앱 만들기

function App() {
  const [num1, setNum1] = useState(null); // 입력한 첫번째 숫자
  const [num2, setNum2] = useState(null); // 입력한 두번째 숫자
  const [operator, setOperator] = useState(null); // 입력한 연산자
  const [input, setInput] = useState(''); // 현재 식
  // const [result, setResult] = useState(null); // 결과

  // 숫자를 입력하는 함수
  const inputNumber = (value) => {
    setInput(input + value); // 현재 입력된 식 업데이트 (숫자와 연산자)

    if (operator === null) {
      setNum1(value); // 첫 번째 숫자 저장
    } else {
      setNum2(value); // 두 번째 숫자 저장
    }
  };

  // 연산자를 입력하는 함수
  const inputOper = (value) => {
    setInput(input + value);
    setOperator(value);
  };

  // 결과 계산
  const resultReducer = (oldResult, action) => {

    let tempResult = 0;

    switch (action.type) {
      case '+':
        tempResult = action.num1 + action.num2;
        break;
      case '-':
        tempResult = action.num1 - action.num2;
        break;
      case '*':
        tempResult = action.num1 * action.num2;
        break;
      case '/':
        tempResult = action.num1 / action.num2;
        break;
      case '0':
        tempResult = null;
        break;
      default:
        tempResult = null;
    }
    return tempResult;
  };

  const [result, resultDispatch] = useReducer(resultReducer, null);

  // 입력 초기화
  const clear = () => {
    setInput(''); //식
    resultDispatch({type:'0'}); //setState 대신 resultDispatch로 변경
    setNum1(null); //숫자1
    setNum2(null); //숫자2
    setOperator(null); //연산자
  };

  return (
    <div>
      <h3>계산기</h3>
      <div>
        <div><span>식:</span>{input}</div>
        <div><span>결과:</span>{result}</div>
      </div>

      <div>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
          <button key={num} onClick={() => inputNumber(num)}>
            {num}
          </button>
        ))}
      </div>
      <div>
        {['+', '-', '*', '/'].map((op) => (
          <button key={op} onClick={() => inputOper(op)}>
            {op}
          </button>
        ))}
      </div>
      <button onClick={() => {
        resultDispatch({ type: operator, num1: num1, num2: num2 })
      }}>=</button>
      <button onClick={clear}>C</button>
    </div>
  );
}

export default App;

import './App.css';
import stlyed, { styled } from 'styled-components';

// styled로 버튼 만들기
const SimpleButton = stlyed.button`
  color: white;
  background-color: green;
`;

// SimpleButton을 상속받기
const LargeButton = stlyed(SimpleButton)`
  font-size: 50px;
`;
0
// 일반 방식으로 버튼 컴포넌트 생성
const ReactButton = (props) => {
  return (
    // className속성 값을 설정해야 styled로 상속처리 가능
    <button className={props.className}>{props.children}</button>
  );
};

// ReactButton을 상속받기
const LargeReactButton = styled(ReactButton)`
  font-size: 50px;
`;

// 함수와 조건문을 사용하여 스타일 적용
const PrimaryButton = stlyed.button`
  color: ${function (props) {
    // 리턴값이 적용
    if(props.primary) {
      return 'red';
    } else {
      return 'blue';
    }
  }}
`;

function App() {
  return (
    <div>
      <SimpleButton>Simple</SimpleButton>
      <LargeButton>Large</LargeButton>
      <ReactButton>React</ReactButton>
      <LargeReactButton>LargeReact</LargeReactButton>
      <PrimaryButton>PrimaryButton</PrimaryButton>
      <PrimaryButton primary>PrimaryButton</PrimaryButton>
    </div>
  );
}

export default App;

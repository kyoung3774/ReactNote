import './App.css';
import { useState } from 'react';

function Header(props) {
  return (
    <header>
      <h1><a href='/' onClick={(event) => {
          event.preventDefault(); // 페이지 이동 방지
          props.onChangeMode();}}>{props.title}</a>
      </h1>
    </header>
  );
}

function Nav(props) {
  const lis = [];
  for (let t of props.topics) {
    lis.push(<li key={t.id}><a href={'/read/' + t.id} id={t.id} onClick={(event) => {
        event.preventDefault();
        props.onChangeMode(event.target.id);}}>{t.title}</a>
        </li>)
  }

  return (
    <ol>
      {lis}
    </ol>
  );
}

function Article(props) {
  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  );
}

function App() {

  // 모드를 state로 생성
  // state: 상태를 관리하며, 컴포넌트를 새로 생성하는 역할
  let [mode, setMode] = useState('WELCOME'); // 인수: 초기값

  // nav의 id를 저장할 state 생성
  let [id, setId] = useState(null);

  // 본문을 저장할 수 있는 변수
  let content = null;

  const topics = [
    { id: 1, title: 'html', body: 'html is..' },
    { id: 2, title: 'css', body: 'css is..' },
    { id: 3, title: 'javascript', body: 'javascript is..' }
  ];

  // 모드에 따라 Article 컴포넌트를 생성
  if (mode === "WELCOME") {
    content = <Article title="Welcome" body="Hello, Web"></Article>

  } else if (mode === "READ") {
    // 선택한 id에 따라 Article 컴포넌트 생성
    let title, body = null;

    for (let t of topics) {
      if (t.id === Number(id)) { // 배열의 id와 현재 id가 같은지 비교
        title = t.title;
        body = t.body;
      }
    }

    content = <Article title={title} body={body}></Article> // 클릭한 Nav 요소
  }

  // 브라우져 화면 구현부
  return (
    <div>
      {/* Header를 클릭하면 모드가 WELCOME으로 변경 */}
      <Header title="Web" onChangeMode={() => {
        setMode('WELCOME');}}>
      </Header>

      {/* Nav를 클릭하면 모드가 READ로 변경 */}
      <Nav topics={topics} onChangeMode={(id) => {
          setMode('READ');
          setId(id);}}>
      </Nav>

      {/* 변환되는 모드마다의 본문출력 */}
      {content}

    </div>
  );
}

export default App;

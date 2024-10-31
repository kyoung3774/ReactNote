import './App.css';
import { useState } from 'react';

function Header(props) {
  return (
    <header>
      <h1><a href='/' onClick={
        (event) => {
          event.preventDefault();
          props.onChangeMode();
        }
      }>{props.title}</a></h1>
    </header>
  );
}

//
function Nav(props) {

  const lis = [];

  for (let t of props.topics) {
    lis.push(<li key={t.id}><a href={'/read/' + t.id} id={t.id} onClick={(event) => {
      event.preventDefault();
      props.onChangeMode(event.target.id);
    }}>{t.title}</a></li>)
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

function Create(props) {
  return (
    <article>
      <h2>Create</h2>
      {/* submit 버튼을 클릭하면 전달받은 이벤트 함수를 실행 */}
      <form onSubmit={(event) => {
        event.preventDefault(); // 페이지 이동 방지
        const title = event.target.title.value;
        const body = event.target.body.value;
        props.onCreate(title, body);}}>
        <p>
          <input type='text' name='title' placeholder='title'></input>
        </p>
        <p>
          <textarea name='body' placeholder='body'></textarea>
        </p>
        <p>
          <input type='submit' value='Create'></input>
        </p>
      </form>
    </article>
  );
}
function App() {

  let [mode, setMode] = useState('WELCOME');

  let [id, setId] = useState(null);

  let [nextId, setNextId] = useState(4);

  let content = null;

  let [topics, setTopics] = useState([
    { id: 1, title: 'html', body: 'html is..' },
    { id: 2, title: 'css', body: 'css is..' },
    { id: 3, title: 'javascript', body: 'javascript is..' }
  ]);


  if (mode === "WELCOME") {

    content = <Article title="Welcome" body="Hello, Web"></Article>

  } else if (mode === "READ") {

    let title, body = null;

    for (let t of topics) {
      if (t.id === Number(id)) {
        title = t.title;
        body = t.body;
      }
    }
    content = <Article title={title} body={body}></Article>

  } else if (mode === "CREATE") {

    // Create 컴포넌트에서 등록 버튼을 클릭하면 게시물이 등록되는 이벤트 추가
    content = <Create onCreate={
      (title, body) => {
        const newTopics = [...topics];
        let newTopic = { id: nextId, title: title, body: body }
        newTopics.push(newTopic);
        setTopics(newTopics);
        setMode('READ');
        setId(nextId);
        setNextId(nextId + 1);
      }
    }></Create>
  }

  return (
    <div>
      <Header title="Web" onChangeMode={
        () => {
          setMode('WELCOME');
        }}>
      </Header>

      <Nav topics={topics} onChangeMode={
        (id) => {
          setMode('READ');
          setId(id);
        }}>
      </Nav>
      {content}

      {/* 등록폼으로 이동하는 링크 */}
      <a href='/create' onClick={
        (event) => {
          event.preventDefault(); // 다른 페이지로 이동하는것을 방지(새로고침 방지)
          setMode('CREATE'); // 모드 전환
        }
      }>Create</a>
    </div>
  );
}

export default App;

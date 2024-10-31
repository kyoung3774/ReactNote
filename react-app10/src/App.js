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
      <form onSubmit={
        (event) => {
          event.preventDefault();
          const title = event.target.title.value;
          const body = event.target.body.value;
          props.onCreate(title, body);
        }
      }>
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

function Update(props) {

  const [title, setTitle] = useState(props.title);
  const [body, setBody] = useState(props.body);
  
  return (
    <article>
      <h2>Update</h2>
      <form onSubmit={
        (event) => {
          event.preventDefault();
          const title = event.target.title.value;
          const body = event.target.body.value;
          props.onUpdate(title, body);
        }
      }>
        <p>
          <input type='text' name='title' value={title} placeholder='title' onChange={(event) => {
            event.preventDefault();
            setTitle(event.target.value);
          }}></input>
        </p>
        <p>
          <textarea name='body' value={body} placeholder='body' onChange={(event) => {
            event.preventDefault();
            setBody(event.target.value);
          }}></textarea>
        </p>
        <p>
          <input type='submit' value='Update'></input>
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
  let contextControl = null;

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

    contextControl =<><a className='update-a' href={'/update/' + id} onClick={(event) => {
      event.preventDefault();
      setMode('UPDATE');
    }}>Update</a>
    <input className='delete-a' type='button' value='Delete' onClick={() => {
      const newTopics = [];
      for(let t of topics) {
        if(t.id !== Number(id)) {
          newTopics.push(t);
        }
      }
      setTopics(newTopics);
      setMode('WELCOME');
    }}></input>
    </>
  } else if (mode === "CREATE") {
    content = <Create onCreate={(title, body) => {
      const newTopics = [...topics];
      let newTopic = { id: nextId, title: title, body: body }
      newTopics.push(newTopic);
      setTopics(newTopics);
      setMode('READ');
      setId(nextId);
      setNextId(nextId + 1);
    }}>
    </Create>

  } else if (mode === 'UPDATE') {
    let title, body = null;

    for (let t of topics) {
      if (t.id === Number(id)) {
        title = t.title;
        body = t.body;
      }
    }
    content = <Update title={title} body={body} onUpdate={(title, body) => {
      const newTopics = [...topics];
      const updateTopic = {id: Number(id), title: title, body: body};
      for(let i in newTopics) {
        if(newTopics[i].id === Number(id)) {
          newTopics[i] = updateTopic;
        }
      }
      setTopics(newTopics);
      setMode('READ');
    }}></Update>
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

      <a href='/create' onClick={(event) => {
        event.preventDefault();
        setMode('CREATE');
      }
      }>Create</a>

      {contextControl}
    </div >
  );
}

export default App;

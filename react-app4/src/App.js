import './App.css';

function Header() {
  return (
    <header>
      <h1><a href='/'>React</a></h1>
    </header>
  );
}

function Nav(){
  return(
    <ol>
        <li><a href='/read/1'>html</a></li>
        <li><a href='/read/2'>css</a></li>
        <li><a href='/read/3'>js</a></li>
    </ol>
  );
}

function Article(){
  return(
    <article>
        <h2>Welcome</h2>
        Hello, WEB
    </article>
  );
}

function App() {
  return (
    <div>
      <Header></Header>
      <Nav></Nav>
      <Article></Article>
    </div>
  );
}

export default App;

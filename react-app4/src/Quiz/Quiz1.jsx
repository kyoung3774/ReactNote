import './App.css';

function Item() {
  return (
    <div>
      Item Component<br></br>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Item List</h1>
      <Item></Item>
      <Item></Item>
      <Item></Item>
      <Item></Item>
      <Item></Item>
    </div>
  );
}

export default App;

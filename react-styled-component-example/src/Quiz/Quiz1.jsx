import { BrowserRouter, Routes, Route, Link, NavLink, useParams } from 'react-router-dom';
import Home from '/src/Quiz/Home';
import Abuot from '/src/Quiz/About';
import Contact from '/src/Quiz/Contact';
import '/src/Quiz/Quiz.css';


function App() {
  return (
    <>
        <ul className='App'>
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/abuot'>Abuot</NavLink></li>
          <li><NavLink to='/contact'>Contact</NavLink></li>
        </ul>

        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/abuot' element={<Abuot></Abuot>}></Route>
          <Route path='/contact' element={<Contact></Contact>}></Route>
          <Route path='/*' element={'Not Found'}></Route>
        </Routes>
    </>
  );
}

export default App;

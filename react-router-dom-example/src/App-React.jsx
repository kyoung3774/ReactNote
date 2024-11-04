import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link, NavLink, useParams } from 'react-router-dom';
import Home from './component/Home';
import Contact from './component/Contect';
import Topics from './component/Topics';

// 전체 UI를 반환하는 함수
function App() {
  return (
    <>
      <h1>Hello React Router DOM</h1>
      <ul>
        {/* a태그 -> Link컴포넌트, herf속성 -> to속성 */}
        {/* a태그: 클릭시 마다 request 발생 */}
        {/* Link컴포넌트:  */}
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/topics'>Topics</NavLink></li>
        <li><NavLink to='/contact'>Contact</NavLink></li>
      </ul>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/topics/*' element={<Topics></Topics>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>

        {/* 존재하지않는 URL경로가 호출됬을때 */}
        <Route path='/*' element={'Not Found'}></Route>
      </Routes>
    </>
  );
}

export default App;

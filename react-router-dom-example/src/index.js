import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Home 영역의 UI를 반환하는 함수
function Home() {
  return (
    <div>
      <h2>Home</h2>
      Home...
    </div>
  );
}

// Topics 영역의 UI를 반환하는 함수
function Topics() {
  return (
    <div>
      <h2>Topics</h2>
      Topics...
    </div>
  );
}

// Contact 영역의 UI를 반환하는 함수
function Contact() {
  return (
    <div>
      <h2>Contact</h2>
      Contact...
    </div>
  );
}

// 전체 UI를 반환하는 함수
function App() {
  return (
    <>
      <h1>Hello React Router DOM</h1>
      <ul>
        <li><a href='/'>Home</a></li>
        <li><a href='/topics'>Topics</a></li>
        <li><a href='/contact'>Contact</a></li>
      </ul>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/topics' element={<Topics></Topics>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>

        {/* 존재하지않는 URL경로가 호출됬을때 */}
        <Route path='/*' element={'Not Found'}></Route>
      </Routes>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
// 라우트 기능을 활성화하기 위해, <BrowserRouter> 
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

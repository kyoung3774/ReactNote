import { BrowserRouter, Routes, Route, Link, NavLink, useParams } from 'react-router-dom';
import Topic from './Topic';
import Data from './Data.json';

// topic 배열 생성(DB 테이블 레코드의 대체 데이터)

// Topics 영역의 UI를 반환하는 함수
function Topics() {
  // Link 목록 저장 배열
  let lis = [];

  for (let t of Data) {
    lis.push(<li key={t.id}><NavLink to={'/topics/' + t.id}>{t.title}</NavLink></li>)
  }

  return (
    <div>
      <h2>Topics</h2>
      <ul>
        {lis}
      </ul>

      {/* Route태그를 하나로 통합 */}
      <Routes>
        {/*  */}
        <Route path='/:topic_id' element={<Topic></Topic>}></Route>
      </Routes>
    </div>
  );
}

export default Topics;
import { BrowserRouter, Routes, Route, Link, NavLink, useParams } from 'react-router-dom';
import Data from './Data.json';

function Topic() {
  // useParams(): 현재 URL 주소에서 파라미터를 꺼내오는 기능
  let params = useParams();

  // 배열의 find()를 사용하여 id가 파라미터와 일치하는 topic 찾기
  // find(): 배열의 요소중 ture인 요소를 반환
  let findTopic = Data.find((topic) => {
    if (topic.id === Number(params.topic_id)) {
      return true;
    }
  });

  if (findTopic === undefined) {
    findTopic = {
      title: 'Sorry',
      description: 'Not found'
    }
  }

  return (
    <div>
      <h3>{findTopic.title}</h3>
      {findTopic.description}
    </div>
  );
}

export default Topic;
import { BrowserRouter, Routes, Route, Link, NavLink, useParams } from 'react-router-dom';
import Movie from './Movie'
import moviesData from './moviesData.json'

function Movies() {
  let lis = [];

  for (let m of moviesData) {
    lis.push(<li key={m.id}><NavLink to={'/movies/' + m.id}>{m.title}</NavLink></li>)
  }

  return (
    <div>
      <h2>Movies List</h2>
      <ul>
        {lis}
      </ul>

      <Routes>
        <Route path='/:movie_id' element={<Movie></Movie>}></Route>
      </Routes>
    </div>
  );
}

export default Movies;
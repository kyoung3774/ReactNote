import Data from './Data.json'
import stlyed, { styled } from 'styled-components';

const StyleCSS = stlyed.button`
  background-color: skyblue;
`;

function Home() {
  return (
    <>
      <StyleCSS>
        <div>
          <h1>{Data[0].title}</h1>
          <p>{Data[0].description}</p>
        </div>
      </StyleCSS>
    </>
  );
}

export default Home;
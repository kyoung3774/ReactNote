import Data from './Data.json'
import stlyed, { styled } from 'styled-components';

const StyleCSS = stlyed.button`
  background-color: #f0bef7;
`;

function About() {
  return (
    <>
      <StyleCSS>
        <div>
          <h1>{Data[1].title}</h1>
          <p>{Data[1].description}</p>
        </div>
      </StyleCSS>
    </>
  );
}

export default About;
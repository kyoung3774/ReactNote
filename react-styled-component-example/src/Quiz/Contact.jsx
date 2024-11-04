import Data from './Data.json'
import stlyed, { styled } from 'styled-components';

const StyleCSS = stlyed.button`
  background-color: #ebee34;
`;

function Contact() {
  return (
    <>
      <StyleCSS>
        <div>
          <h1>{Data[2].title}</h1>
          <p>{Data[2].description}</p>
        </div>
      </StyleCSS>
    </>
  );
}

export default Contact;
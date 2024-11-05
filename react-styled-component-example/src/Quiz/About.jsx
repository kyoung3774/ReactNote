import Data from './Data.json'

function About() {
  const style = {
    backgroundColor: 'pink'
  }
  
  return (
    <>
      <div style={style}>
        <h1>{Data[1].title}</h1>
        <p>{Data[1].description}</p>
      </div>
    </>
  );
}

export default About;
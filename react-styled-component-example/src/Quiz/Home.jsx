import Data from './Data.json'

function Home() {
  const style = {
    backgroundColor: 'skyblue'
  }

  return (
    <>
        <div style={style}>
          <h1>{Data[0].title}</h1>
          <p>{Data[0].description}</p>
        </div>
    </>
  );
}

export default Home;
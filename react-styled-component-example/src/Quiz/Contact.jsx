import Data from './Data.json'


function Contact() {
  const style = {
    backgroundColor: 'yellow'
  }

  return (
    <>
        <div style={style}>
          <h1>{Data[2].title}</h1>
          <p>{Data[2].description}</p>
        </div>
    </>
  );
}

export default Contact;
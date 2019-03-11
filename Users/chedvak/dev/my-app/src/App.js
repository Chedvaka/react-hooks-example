import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {

  const [count, setCount] = useState(0);
  const [name, setName] = useState('harry');
  const [surname, setSurname] = useState('potter');
  const width = useWindowWidth();

  useEffect(() => {
    document.title = name + " " + surname;
  });

  return (
    <div className="App">
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
    </button>
      <br />
      <section>
        <div >
          <div>Name: </div>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <div>surname: </div>
          <input
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
        </div>
        <br />
        <div>
          <div>width: </div>
          <div>{width}</div>
        </div>
      </section>
    </div>
  );
};
export default App;


function useWindowWidth() {
  debugger
  const [width, setWidth] = useState(window.innerWidth);
  const handleResize = () => setWidth(window.innerWidth);
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  });
  return width;
}




//https://youtu.be/dpw9EHDh2bM
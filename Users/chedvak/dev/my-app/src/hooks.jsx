import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {

  const [count, setCount] = useState(0);
  const [name, setName] = useState('harry');
  const [surname, setSurname] = useState('potter');

  useEffect(() => {
    document.title = name + " " + surname;
  });

//just willmount
//   useEffect(() => {
//     document.title = name + " " + surname;
//   },[]);

//just when name change
//   useEffect(() => {
//     document.title = name + " " + surname;
//   },[name]);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  });

  const handleResize = () => {
    setWidth(window.innerWidth);
  }

  return (
    <div className="App">
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
    </button>
      <br />
      <section>
        <div >
          <lable>Name: </lable>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <lable>surname: </lable>
          <input
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
        </div>
        <br />
        <div>
          <lable>width: </lable>
          <lable>{width}</lable>
        </div>
      </section>
    </div>
  );

};

export default App;


//https://www.youtube.com/watch?time_continue=2180&v=dpw9EHDh2bM
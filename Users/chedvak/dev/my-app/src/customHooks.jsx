import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {

  const [count, setCount] = useState(0);
  const name = useFormInput('harry');
  const surname = useFormInput('potter');
  const width = useWindowWidth();

  useEffect(() => {
    document.title = name.value + " " + surname.value;
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
          <div>name: </div>
          <input
           {...name}
          />
        </div>
        <div>
          <div>surname: </div>
          <input
           {...surname}
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

function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  function handleChange(e) {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange
  };
}


function useWindowWidth() {
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





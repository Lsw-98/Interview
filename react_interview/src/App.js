import React, { useEffect, useLayoutEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
function App() {
  const [state, setState] = useState("hello world")
  
  useEffect(() => {
    let i = 0;
    while (i <= 100000000) {
      i++;
    };
    setState("world hello");
  }, []);

  useLayoutEffect(() => {
    let i = 0;
    while (i <= 100000000) {
      i++;
    };
    setState("world hello");
  }, []);
  
  return (
    <>
      <div>{state}</div>
    </>
  );
}
export default App;

import React, { useState } from 'react';
import data from './data';


function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if (count <= 0) {
      amount = 1;
    }
    if (count > 8) {
      amount = 8;
    }
    setText(data.slice(0, amount));
    console.log('mein gareeb hoon ');
  }

  return (
    <div className="container">
      <h2 className='titleText'>DUMMY TEXT GENERATOR </h2>
      <div className="randomTextForm" onClick={handleSubmit}   >
        <label htmlFor="amount" className='paragraph'>Pargaraph : </label>
        <input type="number" name="amount" id="amount" className='amount' value={count} onChange={(e) => setCount(e.target.value)} />
        <button className='button' onClick={handleSubmit}>Generate</button>
      </div>
      <div className="generatedrandomText">
        {
          text.map((item, index) => {
            return <p key={index} className='dummytext'>{item}</p>;
          })}
      </div>
    </div>
  )
}

export default App;
// @mondalcodehub-NOV22
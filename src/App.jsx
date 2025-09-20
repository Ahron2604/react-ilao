// this is the react JSX intro
import React from 'react';
function App() {
  const myElement = <h5>Hello World</h5>
  const myElement2 = <h5>The result of 5 + 5 is {5 + 5}</h5>
  const name = "Ahron James Ilao"
  const age = 20
  const myElement3 = <h1>I love JSX!</h1>;
  const myElement4 = React.createElement('h1', {}, 'I do not use JSX!');
  const myElement5 = <h1>React is {5 + 5} tmes better with JSX</h1>;
  const myElement6 = (
  <ul>
    <li>apples</li>
    <li>bananas</li>
    <li>cherries</li>
  </ul>
);
const myElement7 = (
  <div>
    <p>i am a paragraph.</p>
    <p>i am a paragraph too.</p>
  </div>
);
const myElement8 = <input type="text" />;
const myElement9 = <h1 className="myclass">Hello World</h1>;
const myElement10 = <h1>Hello {/* Wonderful */} World </h1>;
const brand = "ford";
const model = "mustang";
  
  
  return (
    <>
      {myElement}
      {myElement2}
      <h5>Hello, {name}</h5>
      <h5> I am {age} years old</h5>
      <button> Click Me </button>
      {myElement3}
      {myElement4}
      {myElement5}
      {myElement6}
      {myElement7}
      {myElement8}
      {myElement9}
      {myElement10}
      <h2>My Car</h2>
      <p>It is a Ford Mustang.</p>
      <h2>My Car</h2>
      <p>It is a {brand} {model}.</p>

     
    </>
  )
}
export default App

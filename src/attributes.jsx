import React from 'react';
function Car() {

    const x = "myclass";
    const myfunc = () => {
        alert('Hello World')
    };
    const mystyles = {
        color : "red",
        fonstsize: "20px",
        backgroundcolor: "lightyellow",

    };

  return (
    <>
    <h1 className="myclass">Hello World</h1>
    <h1 className={x}>Hello World</h1>
    <button onClick = {myFunc}>Click me</button>
    <button onClick = {myFunc} disabled >Click me</button>
    <button onClick = {myFunc} disabled={true}>Click me</button>
    <button onClick = {myFunc} disabled={false}>Click me</button>
    </>
  );
}
export default attributes
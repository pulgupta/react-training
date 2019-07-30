import React from "react";
import logo from "./logo.svg";
import "./App.css";

// A very small component
const Img = props => {
  return <img src={logo} className="App-logo" alt={props.alt} />;
};

// this means that I was getting a props but now react will just pick two properties from the props and pass to our method.
const Img1 = ({ alt: alt, className }) => {
  return <img src={logo} className="App-logo" alt={alt} />;
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Img alt="xyz" />
        <Img1 alt="abc" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

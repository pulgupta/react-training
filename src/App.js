import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Img from "./components/Img";
import MyAnchor from "./components/anchor";

// A very small component
const Img1 = props => {
  return <img src={logo} className="App-logo" alt={props.alt} />;
};

// this means that I was getting a props but now react will just pick two properties from the props and pass to our method.
const Img2 = ({ alt: alt, className }) => {
  return <img src={logo} className="App-logo" alt={alt} />;
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Img alt="abc" />
        <Img1 alt="xyz" />
        <Img2 alt="abc" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <MyAnchor href="https://reactjs.org" text="Learn React" />
      </header>
    </div>
  );
}

export default App;

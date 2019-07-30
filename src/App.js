import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MyImg from "./components/MyImg";
import MyAnchor from "./components/MyAnchor";
import MyHeader from "./components/MyHeader";
import Student from "./components/Student/Student";

// A very small component
const Img1 = props => {
  return <img src={logo} className="App-logo" alt={props.alt} />;
};

// this means that I was getting a props but now react will just pick two properties from the props and pass to our method.
const Img2 = ({ alt: alt, className }) => {
  return <img src={logo} className="App-logo" alt={alt} />;
};

// passing all the sub components like a children to our header component
function App() {
  return (
    <div className="App">
      <MyHeader className="App-header">
        <MyImg alt="abc" />
        <Img1 alt="xyz" />
        <Img2 alt="abc" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <MyAnchor href="https://reactjs.org" text="Learn React" />
        <Student />
      </MyHeader>
    </div>
  );
}

export default App;

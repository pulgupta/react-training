import React from "react";
import logo from "./logo.svg";
import "./App.css";
// import MyImg from "./components/MyImg";
// import MyAnchor from "./components/MyAnchor";
// import MyHeader from "./components/MyHeader";
import Student from "./components/Student/Student";
import { Route, BrowserRouter } from "react-router-dom";
import StudentDetails from "./components/StudentDetails";
import MultipleDetails from "./components/MultipleDetails";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import MyAccordianContainer from "./components/MyAccordianContainer";
import reducers from "./reducers/index";

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

// A very small component
const Img1 = props => {
  return (
    <div>
      <img src={logo} className="App-logo" alt={props.alt} />
      <br />
      <a className="btn btn-primary" href="/student">
        Check Students
      </a>
      <br />
      <br />
      <MyAccordianContainer title="My Accordian" isOpen={true}>
        <p>This is my content in the accordian</p>
      </MyAccordianContainer>
    </div>
  );
};

// this means that I was getting a props but now react will just pick two properties from the props and pass to our method.
// const Img2 = ({ alt: alt, className }) => {
//   return <img src={logo} className="App-logo" alt={alt} />;
// };

// passing all the sub components like a children to our header component
function App() {
  return (
    <div className="App">
      {/* <MyHeader className="App-header">
        <MyImg alt="abc" />
        <Img1 alt="xyz" />
        <Img2 alt="abc" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <MyAnchor href="https://reactjs.org" text="Learn React" />
      </MyHeader> */}
      <Provider
        store={createStoreWithMiddleware(
          reducers,
          window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
        )}
      >
        <BrowserRouter>
          <Route exact path="/" component={Img1} />
          <Route exact path="/student" component={Student} />
          <Route exact path="/studentdetails" component={StudentDetails} />
          <Route exact path="/details" component={MultipleDetails} />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;

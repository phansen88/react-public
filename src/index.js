import React from "react";
import ReactDOM from "react-dom";
import './css/index.css';
import logo from './logo.svg';
import './css/App.css';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          No need
        </p>
        <section>
      <Router>
      <div>
        <h1>hello</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">Topics</Link>
          </li>
        </ul>

        <Routes>
          <Route path="/about" element={<About/>} />
          <Route path="/"  element={<Home/>} /> 
        </Routes>
      </div>
    </Router>
      </section>
      </header>
      
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals(console.log);
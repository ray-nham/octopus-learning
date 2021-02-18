import logo from './logo.svg';
import './App.css';
import React,{useState, useEffect} from "react";

function App() {
  const [data , setData] = useState(null)
  useEffect(() => {
    const fetchData = async () => {
      fetch("./config.json").then(
        function(response) {
          return response.json();
        }
      ).then(function(data) {
        setData(data);
      });
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Ray Nham - Octopus Learning
        </p>
        <p>{data && data.app  ? data.app.greeting : "Hello"}</p>
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

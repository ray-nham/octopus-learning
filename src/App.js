import logo from './logo.svg';
import './App.css';
import React,{useState} from "react";

function App() {
  const [data , setData] = useState(null)
    fetch("./config.json").then(
        function(res){
            return res.json()
        }).then(function(data){
        setData(data)
    }).catch(
        function(err){
            console.log(err, ' error')
        }
    )
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Ray Nham - Octopus Learning
        </p>
        <p>{data ? data.greeting : "Hello"}</p>
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

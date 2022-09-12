import React from "react"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./components/Login";
import NavBar from "./components/NavBar";


function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <NavBar></NavBar>
      <Login></Login>
      
      

    </div>
  );
}

export default App;

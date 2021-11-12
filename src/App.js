import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Checkbox from 'rc-checkbox';

function App() {
  return (
    <div className="App">
      <header className="App-body">

      <form action="/action_page.php">
        <input type="text" placeholder="Search.." name="search"></input>
        <button type="submit">Submit</button>
      </form>

        <p>
        <input type="checkbox" id="chkb" name="chkb" value="Name"/>
        <label for="Name"> Remember me</label>
        </p>

      </header>
    </div>
  );
}

export default App;

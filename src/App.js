import React from 'react';
//import ReactDOM from 'react-dom';
import './App.css';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import Tracklist from './components/Tracklist';


function App() {
  return (
    <div className='App'>
      <header className='jamming'>
        <h1>Jamming</h1>
      </header>
      <div>
      <SearchBar />
      </div>
      <div className='columns'>
        <SearchResults />
        <Tracklist />
      </div> 
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;

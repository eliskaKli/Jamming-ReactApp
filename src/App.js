import React from 'react';
//import ReactDOM from 'react-dom';
import SearchBar from './components/SearchBar';
import Tracklist from './components/Tracklist';
import Playlist from './components/Playlist';
import './App.css';


function App() {
  return (
    <div className='app'>
      <header className='jamming'>
        <h1>Jamming</h1>
      </header>
      <div>
        <SearchBar onSearch={search}/>
      </div>
      <div className='columnsContainer'>
        <Tracklist  
          className='resultsColumn'
        />
        <Playlist 
          className='playlistColumn'
        />
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

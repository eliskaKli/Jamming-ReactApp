import React, { useState, useCallback, useEffect } from 'react';

import './App.css';

import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import Playlist from './components/Playlist';
import Spotify from './util/Spotify';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState("New Playlist");
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [userName, setUserName] = useState("user name");
  const [userImg, setUserImg] = useState("profile Img");

  const search = useCallback((term) => {
    Spotify.search(term).then(setSearchResults);
  }, []);

  const addTrack = useCallback(
    (track) => {
      if (playlistTracks.some((savedTrack) => savedTrack.id === track.id))
        return;

      setPlaylistTracks((prevTracks) => [...prevTracks, track]);
    },
    [playlistTracks]
  );

  const removeTrack = useCallback((track) =>{
    setPlaylistTracks((prevTracks) =>
      prevTracks.filter((currentTrack) => currentTrack.id !== track.id)
      );
  }, []);

  const updatePlaylistName = useCallback((name) => {
    setPlaylistName(name);
  }, []);

  const savePlaylist = useCallback(() => {
    const trackUris = playlistTracks.map((track) => track.uri);
    Spotify.savePlaylist(playlistName, trackUris).then(() => {
      setPlaylistName("New Playlist");
      setPlaylistTracks([]);
    });
  }, [playlistName, playlistTracks]);

  useEffect( () => {
    Spotify.getUser().then( (userData) => {
      setUserName(userData.id);
      setUserImg(userData.images[0]?.url);
    }).catch(error => {
      console.error('Error fetching user data', error);
    }) 
  }, []);

  return (
    <div className='App'>
      <header className='Jamming'>
        <h1>Jamming</h1>
      </header>
      <div>
        <SearchBar onSearch={search}/>
      </div>
      <div className='ColumnsContainer'>
        <SearchResults className='SearchResults' searchResults={searchResults} onAdd={addTrack} />
        <Playlist 
          className='Playlist' 
          playlistName={playlistName}
          playlistTracks={playlistTracks}
          onNameChange={updatePlaylistName}
          onRemove={removeTrack}
          onSave={savePlaylist}
          userName={userName}
          userImg={userImg}
        />
      </div> 
    </div>
  );
};

export default App;

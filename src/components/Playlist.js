import React, { useCallback } from "react";

import "../components_styles/Playlist.css";

import Tracklist from "./Tracklist";
import UserData from "./UserData";

function Playlist(props) {
  const handleNameChange = useCallback(
    (event) => {
      props.onNameChange(event.target.value);
    },
    [props.onNameChange]
  );

  return (
    <div className="Playlist">
      <div className="Playlist-headlines">
        <h2>My Playlist</h2>
        <input onChange={handleNameChange} defaultValue={"New Playlist"} />
      </div>
      <div className="User">
        <UserData
          userName={props.userName}
          userImg={props.userImg}
        />
      </div>

      <hr />
      <Tracklist
        tracks={props.playlistTracks}
        isRemoval={true}
        onRemove={props.onRemove}
      />
      <button className="PlaylistSave" onClick={props.onSave}>
        Add Playlist to Spotify
      </button>
    </div>
  );
}

export default Playlist;

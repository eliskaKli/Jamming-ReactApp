import React, { useCallback } from "react";

import "../components_styles/Playlist.css";

import Tracklist from "./Tracklist";

function Playlist(props) {
    const handleNameChange = useCallback(
        (event) => {
            props.onNameChange(event.target.value);
        },
        [props.onNameChange]
    );

    return(
        <div className="Playlist">
            <h2>My Playlist</h2>
            <input onChange={handleNameChange} defaultValue={"New Playlist"} />
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
};

export default Playlist;
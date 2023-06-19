import React, { useCallback } from "react";

import "../components_styles/Playlist";

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
            <Tracklist
                track={props.playlistTracks}
                isRemoval={true}
                onRemove={props.onRemove}
            />
            <button className="Playlist-save" onClick={props.onSave}>
                Add Playlist to Spotify
            </button>
        </div>
    );
};

export default Playlist;
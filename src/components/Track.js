import React, { useCallback } from "react";

import "../components_styles/Track.css";

function Track(props) {
    const addTrack = useCallback(
        (event) => {
            props.onAdd(props.track);        
        },
        [props.onAdd, props.track, props]
    );

    const removeTrack = useCallback(
        (event) => {
            props.onRemove(props.track);
        },
        [props.onRemove, props.track, props]
    );

    function renderAction() {
        if (props.isRemoval) {
            return (
                <button className="TrackAction" onClick={removeTrack}>
                    –
                </button>
            );
        }
        return (
            <button className="TrackAction" onClick={addTrack}>
                +
            </button>
        );
    };


    return(
        <div className="Track">
            <div className="TrackInfo">
                <p className="SongName">{props.track.name}</p>
                <p className="SongArtist">{props.track.artist}</p>
                <p className="SongAlbum">{props.track.album}</p>
            </div>
            <div>
                {renderAction()}
            </div>
        </div>
    );
};

export default Track;

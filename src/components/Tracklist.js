import React from "react";

import "../components_styles/Tracklist.css";

import Track from "./Track";


const Tracklist = (props) => {
    return (
        <div className="Tracklist">
            {props.tracks.map((track) => {
                return (
                    <Track
                        track={track}
                        key={track.id}
                        onAdd={props.onAdd}
                        isRemoval={props.isRemoval}
                        onRemove={props.onRemove}
                    />
                );
            })}
        </div>
    );        
};

export default Tracklist;
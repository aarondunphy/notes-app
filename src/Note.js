import React from 'react'

export default function Note(props) {

    return (
        <div className="note">
            { props.note.body }
            <div className="add-note">
                <button onClick={props.handleAddNote}>+</button>
            </div>
        </div>
    );

}
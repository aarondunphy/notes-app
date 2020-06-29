import React from 'react'

const Note = props => {

    return (
        <div className="note">
            <textarea value={props.note.body} onChange={props.handleNoteUpdate}></textarea>
            <div className="add-note">
                <button onClick={props.handleAddNote}>+</button>
            </div>
        </div>
    );

}

export default Note
import React, { useEffect } from 'react'

const Note = (props) => {
    let noteTextarea

    useEffect(() => {
        noteTextarea.focus()
    })
    
    return (
        <div className="note">
            <textarea 
                data-testid="newNoteTextarea"
                value={props.note.body} 
                onChange={props.handleNoteUpdate} 
                ref={(textarea) => { noteTextarea = textarea }}
            >
            </textarea>
            <div className="add-note">
                <button data-testid="addNoteButton" onClick={props.handleAddNote}>+</button>
            </div>
        </div>
    )
}

export default Note
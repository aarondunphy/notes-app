import React, { useState } from 'react'

const NoteItem = (props) => {

    const [hoverActive, setHoverActiveState] = useState(false)

    const setHoverActive = state =>{
        if(props.notesCount === 1){
            state = false
        }
        setHoverActiveState(state)
    }

    return (
        <li 
            onClick={props.handleNoteClick}
            onMouseEnter={() => setHoverActive(true)}
            onMouseLeave={() => setHoverActive(false)}
        >
            {props.title}
            {
                hoverActive ? 
                    <button data-testid="deleteNoteButton" onClick={props.handleDeleteNote}>-</button>
                    : null
            }
        </li>

    )

}

export default NoteItem
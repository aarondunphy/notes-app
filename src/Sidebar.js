import React from 'react'

function Sidebar(props) {

    const list = props.notes.map(note => 
        <li>{note.title}</li>
    )

    return (
        <div className="sidebar">
            <ul>
                { list }
            </ul>
        </div>
    );

}

export default Sidebar
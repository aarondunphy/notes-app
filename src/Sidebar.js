import React from 'react'

class Sidebar extends React.Component {
    
    render() {
        
        const list = this.props.notes.map((note, index) => 
            <li onClick={() => this.props.handleNoteClick(index)} key={index}>
                {note.title}
            </li>
        )

        return (
            <div className="sidebar">
                <ul>
                    { list }
                </ul>
            </div>
        );   
    }
}

export default Sidebar
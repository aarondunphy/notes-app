import React from 'react'
import NoteItem from './NoteItem'
class Sidebar extends React.Component {
    
    constructor(props){
        super(props)
        this.generateTitle = this.generateTitle.bind(this)
    }
    
    generateTitle(title){
        const characters = title.split('')
        const titleLimit = 25
        if(characters.length < titleLimit) {
            return title
        } else {
            return characters.splice(0, titleLimit).join('') + '...'
        }
    }

    render() {
        
        const noteList = this.props.notes.map((note, index) => 
            <NoteItem
                key={index}
                title={this.generateTitle(note.body)}
                handleNoteClick={() => this.props.handleNoteClick(index)}
                handleDeleteNote={() => this.props.handleDeleteNote(index)}
            ></NoteItem>
        )

        return (
            <div className="sidebar">
                <ul>
                    { noteList }
                </ul>
            </div>
        );   
    }
}

export default Sidebar
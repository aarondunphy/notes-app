import React from 'react'

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

        
        const list = this.props.notes.map((note, index) => 
            <li onClick={() => this.props.handleNoteClick(index)} key={index}>
                {this.generateTitle(note.body)}
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
import React from 'react'

class NoteItem extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            hoverActive: false
        }
        this.setHoverActive = this.setHoverActive.bind(this)
    }

    setHoverActive(state){
        if(this.props.notesCount === 1){
            state = false
        }
        this.setState({hoverActive: state})
    }

    render(){
        let deleteButton
        if(this.state.hoverActive){
            deleteButton = (
                <button data-testid="deleteNoteButton" onClick={this.props.handleDeleteNote}>-</button>
            )
        }
        return (
            <li 
                onClick={this.props.handleNoteClick}
                onMouseEnter={() => this.setHoverActive(true)}
                onMouseLeave={() => this.setHoverActive(false)}
            >
                {this.props.title}
                {deleteButton}
            </li>

        )
    }

}

export default NoteItem
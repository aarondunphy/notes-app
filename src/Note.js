import React from 'react'

class Note extends React.Component{

    constructor(props){
        super(props)
        this.textarea = React.createRef();
    }

    componentDidUpdate(){
        this.textarea.current.focus();
    }

    render(){
        return (
            <div className="note">
                <textarea 
                    value={this.props.note.body} 
                    onChange={this.props.handleNoteUpdate} 
                    ref={this.textarea}
                >
                </textarea>
                <div className="add-note">
                    <button onClick={this.props.handleAddNote}>+</button>
                </div>
            </div>
        )
    }

}

export default Note
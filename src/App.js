import React from 'react'
import Sidebar from './Sidebar'
import Note from './Note'
import './App.css'

class App extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            activeNoteIndex: 0,
            notes: [
                {body: 'This is my body one'},
                {body: 'This is my body two'},
                {body: 'This is my body three with a really long first line'},
            ]
        }
        this.handleNoteClick = this.handleNoteClick.bind(this)
        this.handleAddNote = this.handleAddNote.bind(this)
        this.handleNoteUpdate = this.handleNoteUpdate.bind(this)
    }


    handleNoteClick(index) {
        this.setState({
            activeNoteIndex: index
        })
    }

    handleAddNote() {
        const newNotes = [...this.state.notes]
        newNotes.push({body: ''})
        this.setState({
            notes: newNotes,
            activeNoteIndex: newNotes.length - 1,
        })
    }

    handleNoteUpdate(e) {
        const notes = [...this.state.notes]
        notes[this.state.activeNoteIndex].body = e.target.value
        this.setState({
            notes: notes
        })
    }

    render() {

        return (
            <div className="App">
                <header className="App-header">
                    <Sidebar notes={this.state.notes} handleNoteClick={this.handleNoteClick}></Sidebar>
                    <Note
                        note={this.state.notes[this.state.activeNoteIndex]}
                        handleAddNote={this.handleAddNote}
                        handleNoteUpdate={this.handleNoteUpdate}
                    >    
                    </Note>
                </header>
            </div>
        );

    }
}
export default App;

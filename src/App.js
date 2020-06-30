import React from 'react'
import Sidebar from './Sidebar'
import Note from './Note'
import './App.css'

class App extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            activeNoteIndex: 0,
            notes: []
        }
        this.handleNoteClick = this.handleNoteClick.bind(this)
        this.handleAddNote = this.handleAddNote.bind(this)
        this.handleNoteUpdate = this.handleNoteUpdate.bind(this)
        this.handleDeleteNote = this.handleDeleteNote.bind(this)
    }

    componentDidMount(){
        if(localStorage.getItem('notes')){
            this.setState({
                activeNoteIndex: localStorage.getItem('activeNoteIndex') ? localStorage.getItem('activeNoteIndex') : 0,
                notes: JSON.parse(localStorage.getItem('notes'))
            })
        }else{
            this.setState({
                notes: [
                    {body: 'Welcome to Aaron\'s notes app'},
                ]
            })
        }
    }

    handleNoteClick(index) {
        this.setState({
            activeNoteIndex: index
        })
        this.updateStorage(index)
    }

    handleDeleteNote(index) {
        let notes = [...this.state.notes]
        notes.splice(index, 1)
        if(notes.length === 0){
            notes.push({body: ''})
        }
        this.setState({
            activeNoteIndex: 0,
            notes: notes
        })
        this.updateStorage()
    }

    handleAddNote() {
        const newNotes = [...this.state.notes]
        newNotes.push({body: ''})
        this.setState({
            notes: newNotes,
            activeNoteIndex: newNotes.length - 1,
        })
        this.updateStorage()
    }

    handleNoteUpdate(e) {
        const notes = [...this.state.notes]
        notes[this.state.activeNoteIndex].body = e.target.value
        this.setState({
            notes: notes
        })
        this.updateStorage()
    }

    updateStorage(activeNoteIndex = null) {
        localStorage.setItem('notes', JSON.stringify([...this.state.notes]))
        localStorage.setItem('activeNoteIndex', activeNoteIndex === null ? this.state.activeNoteIndex : activeNoteIndex)
    }

    render() {

        let note;
        if(this.state.notes.length){
            note = <Note
                note={this.state.notes[this.state.activeNoteIndex]}
                handleAddNote={this.handleAddNote}
                handleNoteUpdate={this.handleNoteUpdate}
            >    
            </Note>
        }
        return (
            <div className="App">
                <header className="App-header">
                    <Sidebar 
                        notes={this.state.notes}
                        handleNoteClick={this.handleNoteClick}
                        handleDeleteNote={this.handleDeleteNote}
                    ></Sidebar>
                    { note }
                </header>
            </div>
        );

    }
}
export default App;

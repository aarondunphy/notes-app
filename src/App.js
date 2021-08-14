import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import Note from './Note'
import './App.css'

const App = (props) => {

    const [activeNoteIndex, setActiveNoteIndex] = useState(0)
    const [notes, setNotes] = useState([])

    useEffect(() => {
        updateStorage()
    }, [notes, activeNoteIndex])

    useEffect(() => {
        const initialNote = [
            {body: 'Welcome to Aaron\'s notes app'},
        ]

        if(localStorage.getItem('notes')){
            setActiveNoteIndex(localStorage.getItem('activeNoteIndex') ? localStorage.getItem('activeNoteIndex') : 0)
            JSON.parse(localStorage.getItem('notes')).length > 0 ? 
                setNotes(JSON.parse(localStorage.getItem('notes')))
                : setNotes(initialNote)
        }else{
            setNotes(initialNote)
        }
    }, [])

    const handleNoteClick = index => {
        setActiveNoteIndex(index)
    }

    const handleDeleteNote = (event, index) => {
        event.stopPropagation();
        let newNotes = [...notes]
        newNotes.splice(index, 1)
        if(newNotes.length === 0){
            newNotes.push({body: ''})
        }
        setActiveNoteIndex(0)
        setNotes(newNotes)
    }

    const handleAddNote = () => {
        const newNotes = [...notes]
        newNotes.push({body: ''})
        setActiveNoteIndex(newNotes.length - 1)
        setNotes(newNotes)
    }

    const handleNoteUpdate = e => {
        const newNotes = [...notes]
        newNotes[activeNoteIndex].body = e.target.value
        setNotes(newNotes)
    }

    const updateStorage = () => {
        localStorage.setItem('notes', JSON.stringify([...notes]))
        localStorage.setItem('activeNoteIndex', activeNoteIndex)
    }

    return (
        <div className="App">
            <header className="App-header">
                <Sidebar 
                    notes={notes}
                    handleNoteClick={handleNoteClick}
                    handleDeleteNote={handleDeleteNote}
                ></Sidebar>
                {
                    notes.length ? <Note
                            note={notes[activeNoteIndex]}
                            handleAddNote={handleAddNote}
                            handleNoteUpdate={handleNoteUpdate}
                        >    
                        </Note> : null
                }
            </header>
        </div>
    );

}
export default App;

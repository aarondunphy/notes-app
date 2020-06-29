import React from 'react'
import Sidebar from './Sidebar'
import Note from './Note'
import './App.css'

class App extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            notes: [
                {title: 'Title One', body: 'This is my body one'},
                {title: 'Title Two', body: 'This is my body two'},
                {title: 'Title Three', body: 'This is my body three'},
            ],
            note: {title: 'Title One', body: 'This is my body one'},
        }
        this.handleNoteClick = this.handleNoteClick.bind(this)
    }


    handleNoteClick(index) {
        this.setState({
            note: this.state.notes[index]
        })
    }

    render() {

        return (
            <div className="App">
                <header className="App-header">
                    <Sidebar notes={this.state.notes} handleNoteClick={this.handleNoteClick}></Sidebar>
                    <Note note={this.state.note}></Note>
                </header>
            </div>
        );

    }
}
export default App;

import React from 'react'
import Sidebar from './Sidebar'
import Note from './Note'
import './App.css'

class App extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            test: 'this',
            notes: [
                {title: 'Title One', body: 'This is my body one'},
                {title: 'Title Two', body: 'This is my body two'},
                {title: 'Title Three', body: 'This is my body three'},
            ]
        }
    }

    render() {

        return (
            <div className="App">
                <header className="App-header">
                    <Sidebar notes={this.state.notes}></Sidebar>
                    <Note></Note>
                </header>
            </div>
        );

    }
}
export default App;

import React from 'react';
import { fireEvent, render, screen, cleanup, within } from '@testing-library/react';
import App from './App';

afterEach(cleanup)

test('First render shows default note', () => {
  render(<App />)
  const firstNote = screen.getByText('Welcome to Aaron\'s notes app')
  expect(firstNote).toBeTruthy()
})

test('A new note can be added to the sidebar', () => {
    const {getByTestId} = render(<App />)
    const addNoteButton = getByTestId('addNoteButton')
    fireEvent.click(addNoteButton)
    expect(getByTestId('sidebarList').querySelectorAll('li').length).toBe(2)
    fireEvent.click(addNoteButton)
    expect(getByTestId('sidebarList').querySelectorAll('li').length).toBe(3)
})
  
test('Adding content to a new note', () => {
    const {getByTestId} = render(<App />)
    const addNoteButton = getByTestId('addNoteButton')
    fireEvent.click(addNoteButton)
    fireEvent.change(getByTestId('newNoteTextarea'), {target: {value: "My new note!"}})
    const newNote = within(getByTestId('sidebarList')).getByText("My new note!")
    expect(newNote).toBeTruthy()
})

test('Adding content to a new note', () => {
    const {getByTestId} = render(<App />)
    const addNoteButton = getByTestId('addNoteButton')
    fireEvent.click(addNoteButton)
    fireEvent.change(getByTestId('newNoteTextarea'), {target: {value: "My last note!"}})
    fireEvent.mouseOver(getByTestId('sidebarList').lastElementChild)
    fireEvent.click(getByTestId('deleteNoteButton'))
    expect(screen.queryByText('My last note!')).toBeFalsy()
})
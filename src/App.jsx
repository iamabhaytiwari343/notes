// src/App.js
import React, { useState } from 'react';
import NoteList from './NoteList';
import NoteForm from './NoteForm';
import './App.css';
import Clock from './Clock';


function App() {
  const [notes, setNotes] = useState([]);
  const [editingNote, setEditingNote] = useState(null);

  const addNote = (newNote) => {
    setNotes([...notes, { ...newNote, id: Date.now() }]);
  };

  const updateNote = (updatedNote) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === editingNote.id ? { ...updatedNote, id: note.id } : note
      )
    );
    setEditingNote(null);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className="app">
      <h1>Note Taking App</h1>
      <div className="flex-container">
        <div className="sidebar">
          <NoteList notes={notes} onEdit={setEditingNote} onDelete={deleteNote} />
        </div>
        <div className="content">
          <NoteForm onSubmit={editingNote ? updateNote : addNote} noteToEdit={editingNote} />
          <Clock />
          
        </div>
      </div>
    </div>
  );
}

export default App;

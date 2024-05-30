// src/App.js
import React, { useState } from 'react';
import NoteList from './NoteList';
import NoteForm from './NoteForm';
import Clock from './Clock';
import './App.css';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [editingNote, setEditingNote] = useState(null);

  const addNote = (newNote) => {
    setNotes((prevNotes) => [...prevNotes, { ...newNote, id: Date.now() }]);
  };

  const updateNote = (updatedNote) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === updatedNote.id ? updatedNote : note
      )
    );
    setEditingNote(null);
  };

  const deleteNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  return (
    <div className="app">
      <h1>Note Taking App</h1>
      <div className="flex-container">
        <aside className="sidebar">
          <NoteList notes={notes} onEdit={setEditingNote} onDelete={deleteNote} />
        </aside>
        <main className="content">
          <NoteForm onSubmit={editingNote ? updateNote : addNote} noteToEdit={editingNote} />
          <Clock />
        </main>
      </div>
    </div>
  );
};

export default App;

// src/components/NoteList.js
import React from 'react';
import Notes from './Notes.jsx';

const NoteList = ({ notes, onEdit, onDelete }) => {
    return (
        <div className="note-list">
            {notes.map((note) => (
                <Notes key={note.id} note={note} onEdit={onEdit} onDelete={onDelete} />
            ))}
        </div>
    );
};

export default NoteList;

// src/components/Note.js
import React from 'react';

const Note = ({ note, onEdit, onDelete }) => {
    const handleExport = () => {
        const text = `${note.title}\n\n${note.content}`;
        const element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', `${note.title}.txt`);
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    };

    return (
        <div className="note">
            <h3>{note.title}</h3>
            <p>{note.content}</p>
            <button onClick={() => onEdit(note)}>Edit</button>
            <button onClick={() => onDelete(note.id)}>Delete</button>
            <button onClick={handleExport}>Export</button>
        </div>
    );
};

export default Note;

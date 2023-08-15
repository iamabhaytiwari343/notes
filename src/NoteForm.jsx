// src/components/NoteForm.js
import React, { useState } from 'react';

const NoteForm = ({ onSubmit, noteToEdit }) => {
    const [title, setTitle] = useState(noteToEdit ? noteToEdit.title : '');
    const [content, setContent] = useState(noteToEdit ? noteToEdit.content : '');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ title, content });
        setTitle('');
        setContent('');
    };

    return (
        <form onSubmit={handleSubmit} className="note-form">
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                placeholder="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            <button type="submit">{noteToEdit ? 'Update' : 'Add'} Note</button>
        </form>
    );
};

export default NoteForm;

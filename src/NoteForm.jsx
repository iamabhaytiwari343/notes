// src/components/NoteForm.js
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const NoteForm = ({ onSubmit, noteToEdit }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (noteToEdit) {
      setTitle(noteToEdit.title);
      setContent(noteToEdit.content);
    } else {
      setTitle('');
      setContent('');
    }
  }, [noteToEdit]);

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
        required
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <button type="submit">
        {noteToEdit ? 'Update' : 'Add'} Note
      </button>
    </form>
  );
};

NoteForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  noteToEdit: PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string,
  }),
};

NoteForm.defaultProps = {
  noteToEdit: null,
};

export default NoteForm;

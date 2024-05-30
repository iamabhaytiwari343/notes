// src/components/Note.js
import React from 'react';
import PropTypes from 'prop-types';

const Note = ({ note, onEdit, onDelete }) => {
  const handleExport = () => {
    const text = `${note.title}\n\n${note.content}`;
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', `${note.title}.txt`);
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="note">
      <h3>{note.title}</h3>
      <p>{note.content}</p>
      <button onClick={() => onEdit(note)} aria-label={`Edit ${note.title}`}>Edit</button>
      <button onClick={() => onDelete(note.id)} aria-label={`Delete ${note.title}`}>Delete</button>
      <button onClick={handleExport} aria-label={`Export ${note.title}`}>Export</button>
    </div>
  );
};

Note.propTypes = {
  note: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Note;

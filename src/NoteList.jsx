// src/components/NoteList.js
import React from 'react';
import PropTypes from 'prop-types';
import Notes from './Notes.jsx';

const NoteList = ({ notes, onEdit, onDelete }) => {
  return (
    <div className="note-list">
      {notes.length > 0 ? (
        notes.map((note) => (
          <Notes key={note.id} note={note} onEdit={onEdit} onDelete={onDelete} />
        ))
      ) : (
        <p>No notes available.</p>
      )}
    </div>
  );
};

NoteList.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default NoteList;

import React from 'react';
import './NoteCard.css';

export default function NoteCard({ note, onDelete }) {
  return (
    <div className="note-card">
      <p>{note.content}</p>
      <button className="delete-btn" onClick={() => onDelete(note.id)}>×</button>
    </div>
  );
}

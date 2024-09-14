import React, { useState } from 'react';
import './NoteForm.css';

export default function NoteForm({ onAdd }) {
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content.trim()) {
      onAdd(content);
      setContent('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="note-form">
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="New Note"
      />
      <button type="submit">➤</button>
    </form>
  );
}

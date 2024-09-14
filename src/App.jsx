import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NoteCard from './components/NoteCard';
import NoteForm from './components/NoteForm';
import './App.css';

export default function App() {
  const [notes, setNotes] = useState([]);

  const fetchNotes = async () => {
    try {
      const response = await axios.get('http://localhost:7070/notes');
      setNotes(response.data);
    } catch (error) {
      console.error('Error fetching notes:', error);
    }
  };

  const addNote = async (content) => {
    try {
      await axios.post('http://localhost:7070/notes', { id: 0, content });
      fetchNotes();
    } catch (error) {
      console.error('Error adding note:', error);
    }
  };

  const deleteNote = async (id) => {
    try {
      await axios.delete(`http://localhost:7070/notes/${id}`);
      fetchNotes();
    } catch (error) {
      console.error('Error deleting note:', error);
    }
  };

  const handleRefresh = () => {
    fetchNotes();
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div className="app">
      <h1>Notes</h1>
      <button onClick={handleRefresh} className="refresh-btn">⟳</button>
      <div className="notes-container">
        {notes.map((note) => (
          <NoteCard key={note.id} note={note} onDelete={deleteNote} />
        ))}
      </div>
      <NoteForm onAdd={addNote} />
    </div>
  );
}

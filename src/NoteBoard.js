import React, { useState, useEffect } from 'react';
import Node from './Node';
import NoteForm from './noteForm';

const NoteBoard = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    setNotes(savedNotes);
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  const deleteNote = (index) => {
    const newNotes = notes.filter((_, i) => i !== index);
    setNotes(newNotes);
  };

  return (
    <div className="note-board">
      <NoteForm addNote={addNote} />
      <div className="notes">
        {notes.map((note, index) => (
          <Node key={index} note={note} index={index} deleteNote={deleteNote} />
        ))}
      </div>
    </div>
  );
};

export default NoteBoard;
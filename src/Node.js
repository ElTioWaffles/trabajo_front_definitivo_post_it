import React from 'react';

const Node = ({ note, index, deleteNote }) => {
  const noteClass = note.important ? 'note important' : 'note';

  return (
    <div className={noteClass} style={{ transform: `rotate(${note.rotation}deg)` }}>
      <h3>{note.title}</h3>
      <p>{note.description}</p>
      <button onClick={() => deleteNote(index)}>Eliminar</button>
    </div>
  );
};

export default Node;
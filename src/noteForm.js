import React, { useState } from 'react';

const NoteForm = ({ addNote }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [important, setImportant] = useState(false);
  const maxTitleLength = 30;
  const maxDescriptionLength = 250;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.length > maxTitleLength || description.length > maxDescriptionLength) {
      alert(`El título no puede tener más de ${maxTitleLength} caracteres y la descripción no puede tener más de ${maxDescriptionLength} caracteres.`);
      return;
    }
    if (!description) return;
    addNote({
      title,
      description,
      important,
      rotation: Math.random() * 10 - 5
    });
    setTitle('');
    setDescription('');
    setImportant(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        maxLength={maxTitleLength}
      />
      <textarea
        placeholder="Descripción"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        maxLength={maxDescriptionLength}
        required
      />
      <label>
        Importante:
        <input
          type="checkbox"
          checked={important}
          onChange={(e) => setImportant(e.target.checked)}
        />
      </label>
      <button type="submit">Agregar Nota</button>
    </form>
  );
};

export default NoteForm;
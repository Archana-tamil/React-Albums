import React, { useState } from 'react';

const AlbumForm = ({ addAlbum }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addAlbum({ title });
    setTitle('');
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Album Title"
        required   />
      <button type="button" class="btn btn-outline-success">Add Album</button>
      <br />
      <br />
    </form>
  );
};

export default AlbumForm;

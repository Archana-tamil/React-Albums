import React, { useState } from 'react';

const Album = ({ album, updateAlbum, deleteAlbum }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(album.title);

  const handleUpdate = () => {
    updateAlbum({ ...album, title });
    setIsEditing(false);
  };

  return (
    <div className="album">
      {isEditing ? (
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onBlur={handleUpdate}
        />
      ) : (
        <h3>{album.title}</h3>
      )}
      <button class="btn btn-outline-primary" onClick={() => setIsEditing(!isEditing)}>
        {isEditing ? 'Cancel' : 'Edit'}
      </button>
      <button class="btn btn-outline-danger" onClick={() => deleteAlbum(album.id)}>Delete</button>
    </div>
  );
};

export default Album;

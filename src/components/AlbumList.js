import React from 'react';
import Album from './Album';

const AlbumList = ({ albums, updateAlbum, deleteAlbum }) => {
  return (
    <div className="album-list">
      {albums.map(album => (
        <Album key={album.id} album={album} updateAlbum={updateAlbum} deleteAlbum={deleteAlbum} />
      ))}
    </div>
  );
};

export default AlbumList;

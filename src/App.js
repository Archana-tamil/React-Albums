import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AlbumList from './components/AlbumList';
import AlbumForm from './components/AlbumForm';

import './styles/App.css';

const App = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetchAlbums();
  }, []);

  const fetchAlbums = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/albums');
      setAlbums(response.data);
    } catch (error) {
      console.error('Error fetching albums', error);
    }
  };

  const addAlbum = async (newAlbum) => {
    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/albums', newAlbum);
      setAlbums([...albums, response.data]);
    } catch (error) {
      console.error('Error adding album', error);
    }
  };

  const updateAlbum = async (updatedAlbum) => {
    try {
      const response = await axios.put(`https://jsonplaceholder.typicode.com/albums/${updatedAlbum.id}`, updatedAlbum);
      setAlbums(albums.map(album => album.id === updatedAlbum.id ? response.data : album));
    } catch (error) {
      console.error('Error updating album', error);
    }
  };

  const deleteAlbum = async (id) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/albums/${id}`);
      setAlbums(albums.filter(album => album.id !== id));
    } catch (error) {
      console.error('Error deleting album', error);
    }
  };

  return (
    <div className="container">
      <h1 color='white'> React Albums</h1>
      <AlbumForm addAlbum={addAlbum} />
      <AlbumList albums={albums} updateAlbum={updateAlbum} deleteAlbum={deleteAlbum} />
    </div>
  );
};

export default App;

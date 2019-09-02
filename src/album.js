const API_URL = require('./config');

const getAlbum = (id) => fetch(`${API_URL}/albums/${id}`)
  .then((data) => data.json());

const getAlbumTracks = (id) => fetch(`${API_URL}/albums/${id}/tracks`)
  .then((data) => data.json());

module.exports = {
  getAlbum,
  getAlbumTracks,
};

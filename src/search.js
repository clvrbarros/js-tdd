const API_URL = require('./config');

const search = (query, type) => fetch(`${API_URL}/search?q=${query}&type=${type}`)
  .then((data) => data.json());

const searchArtists = (query) => {
  search(query, 'artist');
};

const searchAlbums = (query) => {
  search(query, 'album');
};

const searchPlaylists = (query) => {
  search(query, 'playlist');
};

const searchTracks = (query) => {
  search(query, 'track');
};

module.exports = {
  search,
  searchArtists,
  searchAlbums,
  searchTracks,
  searchPlaylists,
};

const search = (query, type) => fetch(`https://api.spotify.com/v1/search?q=${query}&type=${type}`)
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

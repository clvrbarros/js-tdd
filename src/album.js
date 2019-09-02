const getAlbum = (id) => fetch(`https://api.spotify.com/v1/albums/${id}`)
  .then((data) => data.json());

const getAlbumTracks = (id) => fetch(`https://api.spotify.com/v1/albums/${id}/tracks`)
  .then((data) => data.json());

module.exports = {
  getAlbum,
  getAlbumTracks,
};

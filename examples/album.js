global.fetch = require('node-fetch');
const { search, searchAlbums } = require('../src/search');

const albums = async () => {
  const data = await searchAlbums('Ciano');
  data.albums.items.map((obj) => console.log(obj.name));
};

albums();

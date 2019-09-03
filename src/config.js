const API_URL = 'https://api.spotify.com/v1';
const TOKEN_API = 'BQDTOcBugcQ5QDV837nbp73yju5AY6AsESYg1SjclCVJUGbFG4DF9T9s8h2_u_T-RZrWeI7_s6RWt8l1wOPu_LoMP6to7Z1nCRbRVxcGXBeOWSxRUj7bTx2zNxL0qcwAU_-vcaSKHrjgjQQkqg';

const HEADERS = {
  headers: {
    Authorization: `Bearer ${TOKEN_API}`,
  },
};

module.exports = { API_URL, HEADERS };

import axios from 'axios';

const KEY = 'AIzaSyAFGOPPNAkk0qELhRYPTEU2GwFDjaB2CiE';

//creating custom instance of axios and import it as youtube
export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  },
});

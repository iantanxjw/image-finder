import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 3e8f8752ec4519fc9e5bd3bb117e40d4e0396548615771c0649e0d476dbc4d75'
  }
})
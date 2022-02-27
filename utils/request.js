import axios from 'axios';

const request = axios.create({
  baseURL: 'https://couduit.productionready.io',
})

export default request
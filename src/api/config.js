import axios from 'axios'


export const HTTP = axios.create({
  baseURL: `https://localhost:7032/api/`,
  headers: {
    NCApiKey: process.env.NC_APP_API_KEY
  }
})
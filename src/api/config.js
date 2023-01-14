import axios from 'axios'

export const HTTP = axios.create({
  baseURL: `https://nutricarev2.azurewebsites.net/api/`,
  headers: {
    NCApiKey: process.env.VUE_APP_API_KEY
  }
})
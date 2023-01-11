import axios from 'axios'

export const HTTP = axios.create({
  baseURL: `https://nutricare.azurewebsites.net/api/`,
  headers: {
    NCApiKey: process.env.VUE_APP_API_KEY
  }
})
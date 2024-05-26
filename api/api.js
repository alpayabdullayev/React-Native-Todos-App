import axios from 'axios'
const BASE_URL = 'https://66533019813d78e6d6d77f20.mockapi.io/' 

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {'Content-Type': 'application/json'}
})

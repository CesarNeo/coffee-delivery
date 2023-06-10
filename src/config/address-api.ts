import axios from 'axios'

const addressApi = axios.create({
  baseURL: import.meta.env.VITE_ADDRESS_API_URL,
})

export default addressApi

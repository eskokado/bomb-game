import axios from 'axios'

const api = axios.create({
  baseURL: 'http://192.168.15.9:3005'
})

export default api

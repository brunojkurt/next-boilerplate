import axios from 'axios'
import { parseCookies } from 'nookies'

export function getAxios(ctx = {}) {
  const { 'nextauth.token': token } = parseCookies(ctx)

  const api = axios.create({
    baseURL: process.env.API_URL
  })

  api.setAuthorization = token => {
    api.defaults.headers['Authorization'] = `Bearer ${token}`
  }

  api.interceptors.request.use(config => {
    return config
  })

  if (token) {
    api.setAuthorization(token)
  }

  return api
}

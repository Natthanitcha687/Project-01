// src/lib/api.js
import axios from 'axios'

export const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000'
export const api = axios.create({
  baseURL: API_URL,
  withCredentials: true
})

api.interceptors.request.use(cfg => {
  const token = localStorage.getItem('token')
  if (token) cfg.headers.Authorization = `Bearer ${token}`
  return cfg
})

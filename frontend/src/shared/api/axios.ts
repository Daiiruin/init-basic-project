import axios from "axios"

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
})

let accessToken = ""
let refreshPromise: Promise<string> | null = null

export function setAccessToken(token: string) {
  accessToken = token
}

function refreshAccessToken(): Promise<string> {
  if (!refreshPromise) {
    refreshPromise = axios
      .post<{ access_token: string }>(
        `${import.meta.env.VITE_API_URL}/auth/refresh`,
        {},
        { withCredentials: true },
      )
      .then((res) => {
        setAccessToken(res.data.access_token)
        return res.data.access_token
      })
      .finally(() => {
        refreshPromise = null
      })
  }
  return refreshPromise
}

api.interceptors.request.use((config) => {
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`
  }
  return config
})

api.interceptors.response.use(
  (res) => res,
  async (error) => {
    if (error.response?.status === 401 && !error.config._retry) {
      error.config._retry = true
      try {
        const token = await refreshAccessToken()
        error.config.headers.Authorization = `Bearer ${token}`
        return api.request(error.config)
      } catch {
        setAccessToken("")
        window.location.href = "/login"
        return Promise.reject(error)
      }
    }
    return Promise.reject(error)
  },
)

export default api

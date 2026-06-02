import { useState, useEffect } from "react"
import { getMe } from "@features/auth/api/auth.api"

interface Me {
  id: string
  email: string
}

export function useMe() {
  const [me, setMe] = useState<Me | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getMe()
      .then(setMe)
      .catch(() => setMe(null))
      .finally(() => setLoading(false))
  }, [])

  return { me, loading }
}

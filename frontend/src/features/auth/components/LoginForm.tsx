import { useState, type FormEvent } from "react"
import { useAuth } from "@features/auth/hooks/useAuth"
import { Button, Input } from "@design-system"

export function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { handleLogin, error, loading } = useAuth()

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    handleLogin(email, password)
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <Input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      {error && <p role="alert">{error}</p>}
      <Button type="submit" disabled={loading}>
        {loading ? "Chargement..." : "Se connecter"}
      </Button>
    </form>
  )
}

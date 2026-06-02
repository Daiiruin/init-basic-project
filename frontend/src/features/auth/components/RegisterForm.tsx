import { useState, type FormEvent } from "react"
import { useAuth } from "@features/auth/hooks/useAuth"
import { Button } from "@design-system"
import { Input } from "@design-system"

export function RegisterForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { handleRegister, error, loading } = useAuth()

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    handleRegister(email, password)
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
        placeholder="Password..."
        minLength={8}
        required
      />
      {error && <p role="alert">{error}</p>}
      <Button type="submit" disabled={loading}>
        {loading ? "Chargement..." : "S'inscrire"}
      </Button>
    </form>
  )
}

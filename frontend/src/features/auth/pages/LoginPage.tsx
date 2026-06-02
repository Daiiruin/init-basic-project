import { Link } from "react-router-dom"
import { LoginForm } from "@features/auth/components/LoginForm"

export function LoginPage() {
  return (
    <div>
      <h1>Connexion</h1>
      <LoginForm />
      <p>
        Pas encore de compte ? <Link to="/register">S'inscrire</Link>
      </p>
    </div>
  )
}

import { Link } from "react-router-dom"
import { RegisterForm } from "@features/auth/components/RegisterForm"

export function RegisterPage() {
  return (
    <div>
      <h1>Inscription</h1>
      <RegisterForm />
      <p>
        Déjà un compte ? <Link to="/login">Se connecter</Link>
      </p>
    </div>
  )
}

import { useMe } from "@features/auth/hooks/useMe"

export function HomePage() {
  const { me, loading } = useMe()

  if (loading) return <p>Chargement...</p>

  return (
    <div>
      <h1>Accueil</h1>
      {me ? (
        <p>Connecté en tant que <strong>{me.email}</strong></p>
      ) : (
        <p>Non connecté</p>
      )}
    </div>
  )
}

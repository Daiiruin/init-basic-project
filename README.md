# init-basic-project

Boilerplate full-stack prêt à l'emploi avec authentification par email/mot de passe. Conçu pour être cloné comme point de départ pour de nouveaux projets.

---

## Stack

| Couche | Technologie |
|---|---|
| Frontend | React 18 + TypeScript + Vite |
| Routing | React Router v6 |
| Style | styled-components + design system tokens |
| HTTP client | axios (avec intercepteur JWT) |
| Backend | NestJS 10 |
| Base de données | PostgreSQL 16 + TypeORM |
| Auth | JWT (access token 15min + refresh token 7j en cookie httpOnly) |
| Package manager | pnpm |
| Dev environment | Docker Compose |

---

## Fonctionnalités

- Inscription par email/mot de passe
- Connexion avec retour du token JWT
- Rafraîchissement automatique du token (refresh token en cookie httpOnly)
- Route protégée `GET /auth/me` pour récupérer l'utilisateur connecté
- Design system minimal avec tokens de couleur, espacement et border-radius
- Alias de chemins TypeScript (`@design-system`, `@features`, `@shared`, `@hooks`)

---

## Structure

```
init-basic-project/
├── backend/
│   └── src/
│       └── features/
│           └── auth/           # Register, Login, Refresh, Me
│               ├── dto/
│               ├── entities/
│               ├── guards/
│               ├── strategies/
│               ├── auth.controller.ts
│               ├── auth.service.ts
│               └── auth.module.ts
├── frontend/
│   └── src/
│       ├── design-system/      # Button, Input, tokens
│       ├── features/
│       │   ├── auth/           # Forms, pages, hooks, API
│       │   └── home/           # Page d'accueil
│       └── shared/
│           └── api/            # Instance axios + intercepteur JWT
├── docker-compose.yml
└── .env.example
```

---

## Démarrage rapide

```bash
# 1. Copier les variables d'environnement
cp .env.example .env

# 2. Lancer l'environnement de développement
docker-compose up --build
```

| Service | URL |
|---|---|
| Frontend | http://localhost:5173 |
| Backend | http://localhost:3000 |
| PostgreSQL | localhost:5432 |

> Générer de vrais secrets JWT : `node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"`

---

## Connexion à la base de données

| Champ | Valeur (défaut) |
|---|---|
| Host | `localhost` |
| Port | `5432` |
| Database | `app` |
| Username | `app` |
| Password | `secret` |

---

## Endpoints API

| Méthode | Route | Auth | Description |
|---|---|---|---|
| POST | `/auth/register` | Non | Créer un compte |
| POST | `/auth/login` | Non | Se connecter |
| POST | `/auth/refresh` | Cookie | Rafraîchir l'access token |
| GET | `/auth/me` | Bearer | Récupérer l'utilisateur connecté |

---

## Ajouter une feature

1. Créer un dossier `frontend/src/features/<nom>/`
2. Y ajouter `pages/`, `components/`, `hooks/`, `api/` selon les besoins
3. Côté backend, créer un module dans `backend/src/features/<nom>/`
4. Enregistrer le module dans `app.module.ts`

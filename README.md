# init-basic-project

Full-stack boilerplate: React + TypeScript + Vite · NestJS · PostgreSQL · Docker · pnpm

## Quick start

1. Copy `.env.example` to `.env` and fill in secrets
2. `docker-compose up --build`
3. Frontend: http://localhost:5173
4. Backend: http://localhost:3000

## Structure

- `frontend/` — React + Vite + TypeScript
- `backend/` — NestJS + TypeORM + PostgreSQL
- `docker-compose.yml` — dev orchestration (hot-reload)

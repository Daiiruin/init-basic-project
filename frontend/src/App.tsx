import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { LoginPage } from "@features/auth/pages/LoginPage"
import { RegisterPage } from "@features/auth/pages/RegisterPage"
import { HomePage } from "@features/home/pages/HomePage"

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

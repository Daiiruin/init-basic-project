import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { isAxiosError } from "axios";
import { login, register } from "@features/auth/api/auth.api";

function extractErrorMessage(err: unknown, fallback: string): string {
    if (isAxiosError(err)) {
        const msg = err.response?.data?.message;
        if (Array.isArray(msg)) return msg[0];
        if (typeof msg === "string") return msg;
    }
    return fallback;
}

export function useAuth() {
    const navigate = useNavigate();
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    async function handleLogin(email: string, password: string) {
        setLoading(true);
        setError(null);
        try {
            await login(email, password);
            navigate("/");
        } catch (err) {
            setError(
                extractErrorMessage(
                    err,
                    "Une erreur inconue est survenue lors de la connexion. Veuillez réessayez.",
                ),
            );
        } finally {
            setLoading(false);
        }
    }

    async function handleRegister(email: string, password: string) {
        setLoading(true);
        setError(null);
        try {
            await register(email, password);
            navigate("/");
        } catch (err) {
            setError(
                extractErrorMessage(
                    err,
                    "Une erreur inconue est survenue lors de la connexion. Veuillez réessayez.",
                ),
            );
        } finally {
            setLoading(false);
        }
    }

    return { handleLogin, handleRegister, error, loading };
}

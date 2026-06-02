import api, { setAccessToken } from '@shared/api/axios';

export async function register(email: string, password: string): Promise<void> {
  const { data } = await api.post<{ access_token: string }>('/auth/register', { email, password });
  setAccessToken(data.access_token);
}

export async function login(email: string, password: string): Promise<void> {
  const { data } = await api.post<{ access_token: string }>('/auth/login', { email, password });
  setAccessToken(data.access_token);
}

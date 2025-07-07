export interface User {
  id: string;
  username: string;
  email: string;
  role: 'admin' | 'user';
  createdAt: Date;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

export interface LoginCredentials {
  username: string;
  password: string;
}
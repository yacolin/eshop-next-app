export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponseData {
  user_id: number;
  username: string;
  access_token: string;
  refresh_token: string;
  expires_at: number;
  token_type: string;
  is_new_user: boolean;
}

export interface AuthState {
  userId: number | null;
  username: string | null;
  accessToken: string | null;
  refreshToken: string | null;
  isAuthenticated: boolean;
}

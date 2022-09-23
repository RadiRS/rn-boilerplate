export interface AuthState {
  user: object | null;
  status?: 'idle' | 'signIn' | 'signOut';
  accessToken: string | null;
}

export type ActionMap<M extends { [index: string]: unknown }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

// TODO: Define User type
export type AuthUser = null | Record<string, string | number | boolean>;

export type AuthState = {
  isAuthenticated: boolean;
  isInitialized: boolean;
  user: AuthUser;
};

export type AuthContextType = {
  isAuthenticated: boolean;
  isInitialized: boolean;
  user: AuthUser;
  method: 'jwt' | 'auth0';
  login: (email: string, password: string) => void;
  register: (email: string, password: string) => void;
  logout: VoidFunction;
};

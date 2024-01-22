import { ActionMap, AuthContextType, AuthState, AuthUser } from '@/types/authentication';
import React from 'react';
import { createContext } from 'react';

enum Types {
  Initial = 'INITIAL',
  Login = 'LOGIN',
  Logout = 'LOGOUT',
  Register = 'REGISTER',
}

type AuthPayload = {
  [Types.Initial]: {
    isAuthenticated: boolean;
    user: AuthUser;
  };
  [Types.Login]: { user: AuthUser };
  [Types.Logout]: undefined;
  [Types.Register]: { user: AuthUser };
};

type AuthAction = ActionMap<AuthPayload>[keyof ActionMap<AuthPayload>];

const initialState: AuthState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null,
};

const AuthReducer = (state: AuthState, action: AuthAction) => {
  switch (action.type) {
    case Types.Initial:
      return {
        isAuthenticated: action.payload.isAuthenticated,
        isInitialized: true,
        user: action.payload.user,
      };
    case Types.Login:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
      };
    case Types.Logout:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    case Types.Register:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
      };

    default:
      return state;
  }
};

export const AuthContext = createContext<AuthContextType | null>(null);

interface AuthProviderProps {
  children: React.ReactNode;
}

export function AuthProvider(props: AuthProviderProps) {
  const { children } = props;

  const [state, dispatch] = React.useReducer(AuthReducer, initialState);

  const login: AuthContextType['login'] = (email, password) => {
    dispatch({
      type: Types.Login,
      payload: {
        user: {
          email,
          password,
        },
      },
    });
  };

  const register: AuthContextType['register'] = (email, password) => {
    dispatch({
      type: Types.Register,
      payload: {
        user: {
          email,
          password,
        },
      },
    });
  };

  const logout: AuthContextType['logout'] = () => {
    dispatch({
      type: Types.Logout,
    });
  };

  return (
    <AuthContext.Provider value={{ ...state, method: 'jwt', login, register, logout }}>{children}</AuthContext.Provider>
  );
}

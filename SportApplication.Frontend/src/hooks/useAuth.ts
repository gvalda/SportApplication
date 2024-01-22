import { AuthContext } from '@/contexts/AuthContext';
import React from 'react';

export const useAuth = () => {
  const context = React.useContext(AuthContext);

  if (!context) throw new Error('Auth context must be used within an AuthProvider');

  return context;
};

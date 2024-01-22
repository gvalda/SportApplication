import ActionButton from '@/components/ActionButton';
import { PATH_AUTH } from '@/router/paths';
import { IconLogin } from '@tabler/icons-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export function LoginButton() {
  const navigate = useNavigate();

  return (
    <ActionButton onClick={() => navigate(PATH_AUTH.login)} title='Login'>
      <IconLogin size={16} />
    </ActionButton>
  );
}

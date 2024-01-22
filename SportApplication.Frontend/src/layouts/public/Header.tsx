import { ColorSchemeToggle } from '@/components/ColorSchemeToggle';
import { LoginButton } from '@/components/LoginButton';
import { UserMenu } from '@/components/UserMenu';
import { useAuth } from '@/hooks/useAuth';
import { Group } from '@mantine/core';
import styles from '@styles/layouts/public/Header.module.scss';
import { Icon123 } from '@tabler/icons-react';
import React from 'react';

export function Header() {
  const { isAuthenticated } = useAuth();

  return (
    <div className={styles.header}>
      <Icon123 size={28} />

      <Group gap='xs'>
        <ColorSchemeToggle />
        {isAuthenticated ? <UserMenu /> : <LoginButton />}
      </Group>
    </div>
  );
}

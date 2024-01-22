import { ColorSchemeToggle } from '@/components/ColorSchemeToggle';
import { LoginButton } from '@/components/LoginButton';
import { UserMenu } from '@/components/UserMenu';
import { useAuth } from '@/hooks/useAuth';
import { Burger, Group } from '@mantine/core';
import styles from '@styles/layouts/dashboard/Header.module.scss';
import { Icon123 } from '@tabler/icons-react';
import React from 'react';

interface HeaderProps {
  navbarOpened: boolean;
  onNavbarToggle: () => void;
}

export function Header(props: HeaderProps) {
  const { navbarOpened, onNavbarToggle } = props;

  const { isAuthenticated } = useAuth();

  return (
    <div className={styles.header}>
      <Group>
        <Burger opened={navbarOpened} onClick={onNavbarToggle} size='sm' hiddenFrom='sm' />
        <Icon123 size={28} />
      </Group>

      <Group gap='xs'>
        <ColorSchemeToggle />
        {isAuthenticated ? <UserMenu /> : <LoginButton />}
      </Group>
    </div>
  );
}

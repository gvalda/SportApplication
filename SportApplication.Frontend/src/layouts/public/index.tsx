import { Header } from '@/layouts/public/Header';
import { AppShell } from '@mantine/core';
import styles from '@styles/layouts/public/PublicLayout.module.scss';
import React from 'react';
import { Outlet } from 'react-router-dom';

export function PublicLayout() {
  return (
    <AppShell header={{ height: 50 }}>
      <AppShell.Header>
        <Header />
      </AppShell.Header>
      <AppShell.Main className={styles.main}>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}

import { Header } from '@/layouts/dashboard/Header';
import { Navbar } from '@/layouts/dashboard/Navbar';
import { AppShell } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import styles from '@styles/layouts/dashboard/DashboardLayout.module.scss';
import React from 'react';
import { Outlet } from 'react-router-dom';

export function DashboardLayout() {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();

  return (
    <AppShell header={{ height: 50 }} navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !mobileOpened } }}>
      <AppShell.Header>
        <Header navbarOpened={mobileOpened} onNavbarToggle={toggleMobile} />
      </AppShell.Header>
      <AppShell.Navbar>
        <Navbar />
      </AppShell.Navbar>
      <AppShell.Main className={styles.main}>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}

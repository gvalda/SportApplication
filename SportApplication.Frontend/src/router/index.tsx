import { DashboardLayout } from '@/layouts/dashboard';
import { PublicLayout } from '@/layouts/public';
import { DevPage } from '@/pages/DevPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { LoginPage } from '@/pages/auth/LoginPage';
import RegisterPage from '@/pages/auth/RegisterPage';
import { TrainerCreatePage } from '@/pages/dashboard/TrainerCreatePage';
import { TrainerListPage } from '@/pages/dashboard/TrainerListPage';
import React from 'react';
import { useRoutes } from 'react-router-dom';

export function Router() {
  return useRoutes([
    {
      path: 'auth',
      children: [
        { path: 'login', element: <LoginPage /> },
        { path: 'register', element: <RegisterPage /> },
      ],
    },
    {
      path: 'inside',
      element: <DashboardLayout />,
      children: [
        { path: 'trainers', element: <TrainerListPage /> },
        { path: 'trainer/create', element: <TrainerCreatePage /> },
      ],
    },
    {
      path: '*',
      element: <PublicLayout />,
      children: [
        { path: '404', element: <NotFoundPage /> },
        { path: '*', element: <DevPage /> },
      ],
    },
  ]);
}

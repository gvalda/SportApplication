import { useComputedColorScheme, useMantineColorScheme } from '@mantine/core';
import { IconMoon, IconSun } from '@tabler/icons-react';
import styles from '@styles/components/ColorSchemeToggle.module.scss';
import cx from 'clsx';
import React from 'react';
import ActionButton from '@/components/ActionButton';

export function ColorSchemeToggle() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('dark', { getInitialValueInEffect: true });

  return (
    <ActionButton
      onClick={() => setColorScheme(computedColorScheme === 'dark' ? 'light' : 'dark')}
      title='Toggle color scheme'
    >
      <IconSun size={16} className={cx(styles.icon, styles.light)} />
      <IconMoon size={16} className={cx(styles.icon, styles.dark)} />
    </ActionButton>
  );
}

import React from 'react';
import styles from '@styles/components/ActionButton.module.scss';
import { ActionIcon, ActionIconProps } from '@mantine/core';

interface HeaderActionButtonProps extends ActionIconProps {
  children: React.ReactNode;
  title?: string;
  onClick?: () => void;
}

export default function ActionButton(props: HeaderActionButtonProps) {
  const { children, title, onClick, ...rest } = props;

  return (
    <ActionIcon
      className={styles.button}
      variant='transparent'
      radius='xl'
      size='lg'
      title={title}
      onClick={onClick}
      {...rest}
    >
      {children}
    </ActionIcon>
  );
}

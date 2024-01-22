import cx from 'clsx';
import { ActionIcon, Avatar, Divider, Group, Popover, Text, UnstyledButton } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import React from 'react';
import styles from '@styles/components/UserMenu.module.scss';
import { IconLogout } from '@tabler/icons-react';
import { useAuth } from '@/hooks/useAuth';

export function UserMenu() {
  const [userMenuOpened, { toggle, close }] = useDisclosure(false);
  const { logout } = useAuth();

  return (
    <Popover position='bottom-end' opened={userMenuOpened} onClose={close} withinPortal>
      <Popover.Target>
        <ActionIcon
          onClick={toggle}
          variant='transparent'
          className={cx(styles.user, { [styles['user-active']]: userMenuOpened })}
          radius='xl'
          p='md'
        >
          <Avatar variant='transparent' size='sm'>
            <img
              src='/images/user-avatar-demo.jpg'
              alt='User avatar'
              width='100%'
              height='100%'
              style={{ objectFit: 'cover', borderRadius: '100%' }}
            />
          </Avatar>
        </ActionIcon>
      </Popover.Target>
      <Popover.Dropdown p={0}>
        <Text size='sm' px='md' py='sm'>
          User name
        </Text>
        <Divider />
        <UnstyledButton px='sm' py='xs' onClick={logout}>
          <Group>
            <IconLogout size={16} />
            <Text size='sm'>Logout</Text>
          </Group>
        </UnstyledButton>
      </Popover.Dropdown>
    </Popover>
  );
}

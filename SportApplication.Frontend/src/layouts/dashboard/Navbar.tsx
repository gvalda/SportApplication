import ActionButton from '@/components/ActionButton';
import { NavbarLinksGroup } from '@/layouts/dashboard/NavbarLinksGroup';
import { PATH_DASHBOARD } from '@/router/paths';
import { ScrollArea } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconChevronLeft, IconChevronRight, IconPuzzleFilled } from '@tabler/icons-react';
import React from 'react';
import styles from '@styles/layouts/dashboard/Navbar.module.scss';

const links = [
  {
    label: 'Trainers',
    icon: <IconPuzzleFilled />,
    links: [
      { label: 'Trainers', to: PATH_DASHBOARD.trainer.list },
      { label: 'Create trainer', to: PATH_DASHBOARD.trainer.new },
    ],
  },
];

export function Navbar() {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <div className={styles.navbar}>
      <ScrollArea className={styles.links}>
        <div className={styles['links-inner']}>
          {links.map(link => (
            <NavbarLinksGroup key={link.label} {...link} />
          ))}
        </div>
      </ScrollArea>

      <div className={styles.footer}>
        <ActionButton onClick={toggle} m='xs' ml='auto' display='flex' title='Toggle sidebar'>
          {opened ? <IconChevronLeft size={16} /> : <IconChevronRight size={16} />}
        </ActionButton>
      </div>
    </div>
  );
}

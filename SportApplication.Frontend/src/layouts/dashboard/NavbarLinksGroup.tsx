import { Box, Collapse, Group, Text, ThemeIcon, UnstyledButton, rem } from '@mantine/core';
import { IconChevronRight } from '@tabler/icons-react';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from '@styles/layouts/dashboard/NavbarLinksGroup.module.scss';

interface NavbarLinksGroupProps {
  label: string;
  icon: React.ReactNode;
  links: { label: string; to: string }[];
}

export function NavbarLinksGroup(props: NavbarLinksGroupProps) {
  const { label, icon, links } = props;

  const hasLinks = Array.isArray(links);
  const [opened, setOpened] = React.useState(false);
  const items = (hasLinks ? links : []).map(({ label, to }) => (
    <Text component={Link} className={styles.link} to={to} key={label}>
      {label}
    </Text>
  ));

  return (
    <>
      <UnstyledButton onClick={() => setOpened(o => !o)} className={styles.control}>
        <Group justify='space-between' gap={0}>
          <Box style={{ display: 'flex', alignItems: 'center' }}>
            <ThemeIcon variant='light' size={30}>
              {icon}
            </ThemeIcon>
            <Box ml='md'>{label}</Box>
          </Box>
          {hasLinks && (
            <IconChevronRight
              className={styles.chevron}
              stroke={1.5}
              style={{
                width: rem(16),
                height: rem(16),
                transform: opened ? 'rotate(-90deg)' : 'none',
              }}
            />
          )}
        </Group>
      </UnstyledButton>
      {hasLinks ? <Collapse in={opened}>{items}</Collapse> : null}
    </>
  );
}

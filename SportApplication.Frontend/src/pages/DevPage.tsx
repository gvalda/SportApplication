import { PATH_DASHBOARD } from '@/router/paths';
import { Box, Button, Title } from '@mantine/core';
import React from 'react';
import { Link } from 'react-router-dom';

export function DevPage() {
  return (
    <Box m='xl' p='md'>
      <Title order={1} ta='center' mb='md'>
        Dev Page
      </Title>
      <Button component={Link} to={PATH_DASHBOARD.root} m='auto' display='block' w='min-content'>
        Go to dashboard
      </Button>
    </Box>
  );
}

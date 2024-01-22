import { Stack, Text } from '@mantine/core';
import React from 'react';

interface ErrorBoxProps {
  message: string;
  icon: React.ReactNode;
}

export function ErrorBox(props: ErrorBoxProps) {
  const { message, icon } = props;

  return (
    <Stack align='center' gap='xs' m='md'>
      {icon}
      <Text ml='xs'>{message}</Text>
    </Stack>
  );
}

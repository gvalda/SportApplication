import { Box, Button, Divider, Group, Paper, PasswordInput, Stack, Text, TextInput } from '@mantine/core';
import { isNotEmpty, useForm } from '@mantine/form';
import styles from '@styles/pages/LoginPage.module.scss';
import { IconBrandApple, IconBrandGoogleFilled } from '@tabler/icons-react';
import React from 'react';

interface FormProps {
  email: string;
  password: string;
  terms: boolean;
}

export function LoginPage() {
  const form = useForm<FormProps>({
    initialValues: {
      email: '',
      password: '',
      terms: true,
    },

    validate: {
      email: val => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
      password: isNotEmpty('Password is required'),
    },
  });

  return (
    <Box className={styles.wrapper}>
      <Paper radius={0} p='xl' withBorder className={styles.form}>
        <Text size='lg' fw={500}>
          Welcome to{' '}
          <Text span c='indigo' fw='bolder'>
            SportApplication
          </Text>
          , login with
        </Text>

        <Group grow mb='md' mt='md'>
          <Button radius='xl' variant='light'>
            <IconBrandGoogleFilled />
          </Button>
          <Button radius='xl' variant='light'>
            <IconBrandApple />
          </Button>
        </Group>

        <Divider label='Or continue with email' labelPosition='center' my='lg' className={styles.divider} />

        <form onSubmit={form.onSubmit(() => {})}>
          <Stack>
            <TextInput
              required
              label='Email'
              placeholder='hello@our.friend'
              {...form.getInputProps('email')}
              radius='md'
            />

            <PasswordInput
              required
              label='Password'
              placeholder='Your password'
              {...form.getInputProps('password')}
              radius='md'
            />
          </Stack>

          <Group justify='space-between' mt='xl'>
            <Text c='dimmed' size='xs' className={styles.anchor}>
              Don't have an account? Register
            </Text>
            <Button type='submit' radius='xl'>
              Login
            </Button>
          </Group>
        </form>
      </Paper>
    </Box>
  );
}

import { CreateTrainer } from '@/types/models';
import { Button, Paper, Stack, TextInput } from '@mantine/core';
import { isNotEmpty, useForm } from '@mantine/form';
import { DateInput } from '@mantine/dates';
import React from 'react';
import { formatToDateOnly } from '@/utils/dates';
import dayjs from 'dayjs';

type PartialCreateTrainer = Partial<CreateTrainer>;

interface TrainerCreateFormProps {
  isSaving: boolean;
  onSubmit: (newTrainer: CreateTrainer) => void;
}

export function TrainerCreateForm(props: TrainerCreateFormProps) {
  const { isSaving, onSubmit } = props;

  const form = useForm<PartialCreateTrainer, (values: PartialCreateTrainer) => CreateTrainer>({
    initialValues: {
      name: '',
    },

    transformValues: ({ birthDate, ...rest }) =>
      ({
        ...rest,
        birthDate: formatToDateOnly(dayjs(birthDate)),
      } as CreateTrainer),

    validate: {
      name: isNotEmpty('Name is required'),
      birthDate: isNotEmpty('Birth date is required'),
    },
  });

  return (
    <Paper m='xl' p='md' maw={500} ml='auto' mr='auto'>
      <form onSubmit={form.onSubmit(onSubmit)}>
        <Stack>
          <TextInput label='Name' placeholder='eg. John Doe' required {...form.getInputProps('name')} />
          <DateInput label='Birth date' placeholder='eg. 2000-01-01' required {...form.getInputProps('birthDate')} />
          <Button type='submit' loading={isSaving} fullWidth>
            Create
          </Button>
        </Stack>
      </form>
    </Paper>
  );
}

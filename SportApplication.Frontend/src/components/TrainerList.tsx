import { ErrorBox } from '@/components/ErrorBox';
import { PATH_DASHBOARD } from '@/router/paths';
import { Guid } from '@/types';
import { Trainer } from '@/types/models';
import { ActionIcon, Box, Button, LoadingOverlay, Paper, Table } from '@mantine/core';
import { IconBoxOff, IconTrash } from '@tabler/icons-react';
import React from 'react';
import { Link } from 'react-router-dom';

interface TrainerListProps {
  trainers?: Trainer[];
  isLoading: boolean;
  onDelete: (id: Guid) => void;
}

export function TrainerList(props: TrainerListProps) {
  const { trainers = [], isLoading, onDelete } = props;

  const rows = trainers.map(trainer => (
    <Table.Tr key={trainer.id}>
      <Table.Td>{trainer.name}</Table.Td>
      <Table.Td>{trainer.birthDate}</Table.Td>
      <Table.Td>
        <ActionIcon
          title='Delete trainer'
          variant='subtle'
          color='red'
          onClick={() => onDelete(trainer.id)}
          radius='xl'
        >
          <IconTrash size={20} />
        </ActionIcon>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <Box m='xl'>
      <Button
        component={Link}
        to={PATH_DASHBOARD.trainer.new}
        variant='light'
        color='blue'
        radius='xl'
        mb='sm'
        ml='auto'
        w='min-content'
        display='block'
      >
        Create trainer
      </Button>
      <Paper p='md' pos='relative' mih={200}>
        <LoadingOverlay visible={isLoading} />
        <Table>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Name</Table.Th>
              <Table.Th>Birth Date</Table.Th>
              <Table.Th>Actions</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {isLoading ||
              (rows.length ? (
                rows
              ) : (
                <Table.Tr>
                  <Table.Td colSpan={2}>
                    <ErrorBox message='No trainers found' icon={<IconBoxOff size={30} />} />
                  </Table.Td>
                </Table.Tr>
              ))}
          </Table.Tbody>
        </Table>
      </Paper>
    </Box>
  );
}

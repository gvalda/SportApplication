import { TrainerList } from '@/components/TrainerList';
import { useDeleteTrainer, useTrainers } from '@/hooks/useQuery';
import React from 'react';

export function TrainerListPage() {
  const { data: trainers, isLoading } = useTrainers();
  const { mutate: deleteTrainer } = useDeleteTrainer();

  return <TrainerList trainers={trainers} isLoading={isLoading} onDelete={deleteTrainer} />;
}

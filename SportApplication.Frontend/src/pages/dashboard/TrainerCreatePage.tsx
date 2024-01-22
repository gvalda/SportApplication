import { TrainerCreateForm } from '@/components/TrainerCreateForm';
import { useCreateTrainer } from '@/hooks/useQuery';
import { PATH_DASHBOARD } from '@/router/paths';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export function TrainerCreatePage() {
  const { mutate: createTrainer, isLoading } = useCreateTrainer({
    onSuccess: () => navigate(PATH_DASHBOARD.trainer.list),
  });
  const navigate = useNavigate();

  return <TrainerCreateForm isSaving={isLoading} onSubmit={createTrainer} />;
}

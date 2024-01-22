import { useMutation, useQuery } from 'react-query';
import axios from 'axios';
import { getBackendUrl } from '@/utils/environment';
import { CreateTrainer, Trainer } from '@/types/models';
import { queryClient } from '@/index';

const urlToFetch = (url: string) => `${getBackendUrl()}/api/${url}`;

export const useTrainers = () =>
  useQuery({
    queryKey: ['trainers'],
    queryFn: async () => await axios.get<Trainer[]>(urlToFetch('trainers')).then(res => res.data),
  });

interface UseCreateTrainerProps {
  onSuccess?: () => void;
}

export const useCreateTrainer = (props: UseCreateTrainerProps) =>
  useMutation({
    mutationFn: async (trainer: CreateTrainer) =>
      await axios.post<Trainer>(urlToFetch('trainers'), trainer).then(res => res.data),
    ...props,
  });

export const useDeleteTrainer = () =>
  useMutation({
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['trainers'] }),
    mutationFn: async (id: string) => await axios.delete<void>(urlToFetch(`trainers/${id}`)),
  });

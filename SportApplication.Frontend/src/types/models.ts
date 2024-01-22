import { DateOnly, Guid } from '@/types';

export interface Trainer {
  id: Guid;
  name: string;
  birthDate: DateOnly;
}

export interface CreateTrainer {
  name: string;
  birthDate: DateOnly;
}

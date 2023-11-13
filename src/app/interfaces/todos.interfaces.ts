export interface TodoSote {
  id: string | number;
  description: string;
  status: TodoStatusSote;
  createdAt: string | Date;
}

export type TodoStatusSote = 'vacio' | 'en-progreso' | 'terminado';

export type FilterStatusSote = TodoStatusSote | 'all'

export type Orders = 'newest' | 'oldest'

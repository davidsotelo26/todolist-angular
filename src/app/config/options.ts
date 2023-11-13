import { FilterStatusSote, Orders, TodoStatusSote } from '../interfaces/todos.interfaces';
import { traductions } from '../utils/traductions';

export const formOptions: { name: string; value: TodoStatusSote }[] = [
  { value: 'vacio', name: traductions['vacio'] },
  { value: 'en-progreso', name: traductions['en-progreso'] },
  { value: 'terminado', name: traductions['terminado'] },
];

export const filterOptions: { name: string; value: FilterStatusSote }[] = [
  { value: 'all', name: traductions['all'] },
  ...formOptions,
];

export const orderOptions: { value: Orders; name: string }[] = [
  {
    value: 'newest',
    name: 'Más Nueva a Más Antigua',
  },
  {
    value: 'oldest',
    name: 'Más Antigua a Más Nueva',
  },
];

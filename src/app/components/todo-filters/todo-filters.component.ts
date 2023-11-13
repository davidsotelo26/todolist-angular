import { Component, inject } from '@angular/core';
import { filterOptions } from 'src/app/config/options';
import { FilterStatusSote } from 'src/app/interfaces/todos.interfaces';
import { TodosServiceSote } from 'src/app/services/todos.service';
import { traductions } from 'src/app/utils/traductions';

@Component({
  selector: 'app-todo-filters',
  templateUrl: './todo-filters.component.html',
  styleUrls: ['./todo-filters.component.scss'],
})
export class TodoFiltersComponent {
  public selectedStatus: { name: string; value: FilterStatusSote } =
    filterOptions[0];

  private todosService = inject(TodosServiceSote);
  public filterOptions = filterOptions;

  constructor() {
    this.todosService.filterSubject.pipe().subscribe((filter) => {
      this.selectedStatus = { name: traductions[filter], value: filter };
    });
  }

  public filterByStatus(selectedStatus: { name: string; value: FilterStatusSote }) {
    this.todosService.filterByStatus(selectedStatus.value);
  }
}

import { Component, Input } from '@angular/core';
import { TodoSote } from 'src/app/interfaces/todos.interfaces';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
})
export class TodoListComponent {
  @Input() todoList?: TodoSote[] | null;
}

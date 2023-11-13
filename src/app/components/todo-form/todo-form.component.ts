import { Component, inject } from '@angular/core';
import { formOptions } from 'src/app/config/options';
import { TodoSote, TodoStatusSote } from 'src/app/interfaces/todos.interfaces';
import { TodosServiceSote } from 'src/app/services/todos.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
})
export class TodoFormComponent {
  private todosService = inject(TodosServiceSote);

  public newTodoDescription: string = '';
  public newTodoStatus: { value: TodoStatusSote; name: string } = formOptions[0];
  public statusOptions = formOptions;

  public addTodo() {
    const newTodo: TodoSote = {
      id: Math.random(),
      description: this.newTodoDescription,
      status: this.newTodoStatus.value,
      createdAt: new Date(),
    };

    this.todosService.addTodo(newTodo);

    this.newTodoDescription = '';
    this.newTodoStatus = formOptions[0];
  }

  public changeStatus(newStatus: { value: TodoStatusSote; name: string }) {
    this.newTodoStatus = newStatus;
  }
}

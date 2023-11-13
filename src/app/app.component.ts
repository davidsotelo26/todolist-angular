import { Component, inject } from '@angular/core';
import { TodoSote } from './interfaces/todos.interfaces';
import { TodosServiceSote } from './services/todos.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public todos?: TodoSote[];
  private todosService = inject(TodosServiceSote);
  private todosSubscription: Subscription;

  constructor() {
    this.todosSubscription = this.todosService.getTodos().subscribe((todos) => {
      this.todos = todos;
      console.log(todos)
    });
  }

  ngDestroy() {
    this.todosSubscription.unsubscribe();
  }
}

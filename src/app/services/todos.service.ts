import { Injectable } from '@angular/core';
import {
  FilterStatusSote,
  Orders,
  TodoSote,
  TodoStatusSote,
} from '../interfaces/todos.interfaces';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodosServiceSote {
  private todos: TodoSote[] = [];
  private todosSubject = new BehaviorSubject<TodoSote[]>(this.todos);
  public filterSubject = new BehaviorSubject<FilterStatusSote>('all');

  constructor() {
    this.loadFromLocalStorage();
    this.setupFiltering();
  }

  public getTodos(): Observable<TodoSote[]> {
    return this.todosSubject.asObservable();
  }

  private setupFiltering() {
    this.filterSubject.subscribe((status) => {
      const filteredTodos =
        status === 'all'
          ? this.todos
          : this.todos.filter((todo) => todo.status === status);
      this.todosSubject.next(filteredTodos);
    });
  }

  public filterByStatus(status: FilterStatusSote) {
    this.filterSubject.next(status);
    return this.todosSubject.asObservable();
  }

  public orderByDate(order: Orders) {
    this.todos.sort((a, b) => {
      const dateA = new Date(a.createdAt).getTime();
      const dateB = new Date(b.createdAt).getTime();
      return order === 'newest' ? dateB - dateA : dateA - dateB;
    });
    this.update();
  }

  public addTodo(newTodo: TodoSote) {
    this.todos.push(newTodo);
    this.update();
  }

  public removeTodo(todoId: TodoSote['id']) {
    this.todos = this.todos.filter((todo) => todo.id !== todoId);
    this.update();
  }

  public changeTodoStatus(todoId: TodoSote['id'], newStatus: TodoStatusSote) {
    const todoIndex = this.todos.findIndex((todo) => todo.id === todoId);

    if (todoIndex === -1) return;

    this.todos[todoIndex].status = newStatus;

    this.update();
  }

  private loadFromLocalStorage() {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      this.todos = JSON.parse(storedTodos);
    }
  }

  private update() {
    this.todosSubject.next(this.todos);
    this.updateLocalStorage();
  }

  private updateLocalStorage() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}

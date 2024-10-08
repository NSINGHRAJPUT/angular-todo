import { Component } from '@angular/core';
import { Todo } from './todo.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
})
export class TodoComponent {
  todos: Todo[] = [];
  newTask: string = '';
  addTodo(): void {
    if (this.newTask.trim()) {
      const newTodo: Todo = {
        id: Date.now(),
        task: this.newTask,
        completed: false,
      };
      this.todos.push(newTodo);
      this.newTask = '';
    }
  }

  toggleComplete(todo: Todo): void {
    todo.completed = !todo.completed;
  }

  deleteTodo(todoId: number): void {
    this.todos = this.todos.filter((todo) => todo.id !== todoId);
  }
}

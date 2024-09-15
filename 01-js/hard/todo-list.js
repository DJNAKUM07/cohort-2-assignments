/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.todos = [];
  }

  // Add a new todo to the list
  add(todo) {
    if (typeof todo !== 'string' || todo.trim() === '') {
      throw new Error('Todo must be a non-empty string');
    }
    this.todos.push(todo);
  }

  // Remove a todo from the list by its index
  remove(indexOfTodo) {
    if (indexOfTodo < 0 || indexOfTodo >= this.todos.length) {
      // Ignore invalid index
      return;
    }
    this.todos.splice(indexOfTodo, 1);
  }

  // Update a todo at a specific index
  update(index, updatedTodo) {
    if (index < 0 || index >= this.todos.length) {
      // Ignore invalid index
      return;
    }
    if (typeof updatedTodo !== 'string' || updatedTodo.trim() === '') {
      throw new Error('Updated todo must be a non-empty string');
    }
    this.todos[index] = updatedTodo;
  }

  // Get all todos
  getAll() {
    return this.todos;
  }

  // Get a todo by its index
  get(indexOfTodo) {
    if (indexOfTodo < 0 || indexOfTodo >= this.todos.length) {
      return null;
    }
    return this.todos[indexOfTodo];
  }

  // Clear all todos
  clear() {
    this.todos = [];
  }
}



class TodoOLD {
  constructor() {
    this.todos = [];
  }

  add(todo) {
    this.todos.push(todo);
  }

  remove(idx) {
    if (idx <= this.todos.length - 1) {
      let beforeIdx = this.todos.slice(0, idx);
      let afterIdx = this.todos.slice(idx + 1, this.todos.length);

      this.todos = [...beforeIdx, ...afterIdx];
    }
  }

  update(idx, updated) {
    if (idx <= this.todos.length - 1)
      this.todos[idx] = updated;
  }

  getAll() {
    return this.todos;
  }

  get(idx) {
    if (idx <= this.todos.length - 1)
      return this.todos[idx];
    else
      return null;
  }

  clear() {
    this.todos = [];
  }
}

module.exports = Todo;

import React from 'react';
import Todo from './Todo'

class TodoList extends React.Component {
  constructor(props){
    super(props);

    this.state = {
                  todos: [
                    { id: 1, text: "Item 1", done: false},
                    { id: 2, text: "Item 2", done: false},
                    { id: 3, text: "Item 3", done: false},
                    { id: 4, text: "Item 4", done: false}
                  ]
                };

        this.newTodo = this.newTodo.bind(this);
    } // constructor

  newTodo(event){
    event.preventDefault();

    var todos = this.state.todos;
    
    // push a new empty object to the array of ToDos
    todos.push({ id: "" });

    this.setState(state => ({
      todos: todos
    }));
  } // newTodo

  render(){
    const todoList = this.state.todos.map((todo) =>
      <Todo key={todo.id.toString()} id={todo.id} text={todo.text} done={todo.done} />
    );

    return <React.Fragment>
            <h1>React To-do App</h1>

            {todoList}

            <a href="#" onClick={this.newTodo}>New Todo</a>
          </React.Fragment>
  } // render
} // class

export default TodoList;
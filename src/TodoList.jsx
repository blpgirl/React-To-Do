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
                }
    }

  render(){
    const todoList = this.state.todos.map((todo) =>
      <Todo key={todo.id.toString()} id={todo.id} text={todo.text} done={todo.done} />
    );

    return <React.Fragment>
            <h1>React To-do App</h1>

            {todoList}
          </React.Fragment>
  } // render
} // class

export default TodoList;
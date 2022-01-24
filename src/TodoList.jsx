import React from 'react';
import Todo from './Todo'

class TodoList extends React.Component {
  constructor(props){
    super(props);

    this.state = { todos: [] };

        this.newTodo = this.newTodo.bind(this);
    } // constructor

    // get the data from the API in nodejs
    componentDidMount(){
      console.log("entre al mount aunque ni idea de como");
        fetch('https://ToDo-REST-API.leyla-maria-bon.repl.co/todos/')
          .then(response => response.json())
          .then(data => {
            this.setState(state => ({
              todos: data.todos
            }));
          });
      } // componentDidMount

  newTodo(event){
    event.preventDefault();

    var todos = this.state.todos;
    
    // push a new empty object to the array of ToDos
    todos.push({ _id: "" });

    this.setState(state => ({
      todos: todos
    }));
  } // newTodo

  render(){
    console.log("a ver que obtuve");
    console.log(this.state.todos);
    const todoList = this.state.todos.map((todo) =>
      <Todo key={todo._id.toString()} id={todo._id} text={todo.text} done={todo.done} />
    );

    return <React.Fragment>
            <h1>React To-do App</h1>

            {todoList}

            <a href="#" onClick={this.newTodo}>New Todo</a>
          </React.Fragment>
  } // render
} // class

export default TodoList;
import React from 'react';
import './App.css';

class Todo extends React.Component {
  constructor(props){
      super(props);

      // set done attribute and text attribute pass down
      this.state = { done: props.done,
                     text: props.text
                   };

      // click event call handleClick function of this class
      this.handleClick = this.handleClick.bind(this);

      // onchange event call handleChange function of this class
      this.handleChange = this.handleChange.bind(this);
      // on submit call handleSubmit function
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClick(event) {
    // set checked box to the opposite of the current state (done)
    this.setState(
      state => ({
        done: !state.done
      }),
      function(event){
        // onclick update checkbox state (first part up) and then do submit
        this.handleSubmit(event)
      }
    );
  }

  handleChange(event){
    let text = event.target.value;

    // let me change the input text to whatever I write
    this.setState(state => ({
      text: text
    }));
  }

  handleSubmit(event){
    console.log("Submit logic here");

    let id = this.props.id || this.state._id;

    // if id is not set then is a new task I'm creating
    if(id == "" || id == undefined){
      fetch('https://ToDo-REST-API.leyla-maria-bon.repl.co/todos/', {
          method: 'post',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            done: this.state.done,
            text: this.state.text
          })
        }).then(response => response.json())
        .then(data => {
          this.setState(state => ({
            _id: data._id
          }));
        });
    } else {
      // update an existing task
      fetch('https://ToDo-REST-API.leyla-maria-bon.repl.co/todos/'+id, {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            done: this.state.done,
            text: this.state.text
          })
        });
    } // else
  } // handleSubmit

  render() {
    // drawing a div with class todo and a checkbox inside with
    // the text attribute pass as the text
    // se inicializan en el constructor arriba
    return <div className="todo">
              <span>
                  <input type="checkbox" checked={this.state.done} onClick={this.handleClick} />
                  <input type="text" value={this.state.text} onChange={this.handleChange} 
                  onBlur={this.handleSubmit} 
                  className={(this.state.done)? 'done':'not-done'} />
                </span>
           </div>;
  }
}

export default Todo;
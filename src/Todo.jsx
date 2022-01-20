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
  }

  handleClick(event) {
    // set checked box to the opposite of the current state (done)
    this.setState(
      state => ({
        done: !state.done
      })
    );
  }

  handleChange(event){
    let text = event.target.value;

    // let me change the input text to whatever I write
    this.setState(state => ({
      text: text
    }));
  }

  render() {
    // drawing a div with class todo and a checkbox inside with
    // the text attribute pass as the text
    // se inicializan en el constructor arriba
    return <div className="todo">
              <span>
                  <input type="checkbox" checked={this.state.done} onClick={this.handleClick} />
                  <input type="text" value={this.state.text} onChange={this.handleChange} 
                  className={(this.state.done)? 'done':'not-done'} />
                </span>
           </div>;
  }
}

export default Todo;
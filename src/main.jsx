import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

class Todo extends React.Component {
  constructor(props){
      super(props);

      // set done attribute and text attribute pass down
      this.state = { done: (this.props.done == "true" && props.done),
                     text: props.text
                   };

      // click event call handleClick function of this class
      this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    // set checked box to the opposite of the current state (done)
    this.setState(
      state => ({
        done: !state.done
      })
    );
  }

  render() {
    // drawing a div with class todo and a checkbox inside with
    // the text attribute pass as the text
    // se inicializan en el constructor arriba
    return <div className="todo">
              <span>
                  <input type="checkbox" checked={this.state.done} onClick={this.handleClick} />
                  <input type="text" value={this.state.text} />
                </span>
           </div>;
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Todo text="Todo one" done="false" />
  </React.StrictMode>,
  document.getElementById('root')
)

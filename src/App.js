import React, { Component } from 'react';
import './App.css';
import Form from './Form';
import List from './List';


class App extends Component {

  state = {
    inputValue: "",
    todos: [
      {
        name: 'Complete Code Challenge',
        status: true

      },
      {
        name: 'Email Challenge to Chris Rathermel to review',
        status: true
      },
      {
        name: 'Recieve follow up interview',
        status: false
      }
    ]
  }


  handleChange=(evt)=>{
    this.setState({inputValue: evt.target.value});
  }

  handleClick=(index)=>{
    const todos = this.state.todos;
    todos[index].status = !todos[index].status;
    this.setState({todos})
  }

  onDelete=(index)=>{
    const todos = this.state.todos;
    todos.splice(index, 1);
    this.setState({todos});
  }

  onSubmit=(evt)=>{
    evt.preventDefault();
    const newToDo = {
      name: this.state.inputValue,
      status: false
    };
    const todos = this.state.todos;
    todos.push(newToDo);
    this.setState({ todos, inputValue: '' })
  }


  render() {
    return (
      <div className="App">
        <Form
          handleChange={this.handleChange}
          inputValue={this.state.inputValue}
          onSubmit={this.onSubmit}
        />
        <List
          todos={this.state.todos}
          handleClick={this.handleClick}
          onDelete={this.onDelete}
          />
      </div>
    );
  }
}

export default App;

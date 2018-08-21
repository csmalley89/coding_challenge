import React, { Component } from 'react';
import './App.css';
import Form from './Form';
import List from './List';
import {Col, Row} from 'react-materialize';


class App extends Component {

  state = {
    inputValue: "",
    todos: [
      {
        name: 'Recieve follow up interview',
        status: false
      },
      {
        name: 'Complete Code Challenge',
        status: true

      },
      {
        name: 'Email Challenge to Chris Rathermel to review',
        status: true
      }
    ]
  }



  handleChange=(evt)=>{
    this.setState({inputValue: evt.target.value});
  }

  handleClick=(index)=>{
    const todos = this.state.todos;
    todos[index].status = !todos[index].status;
    this.setState({todos});
  }

  onDelete=(index)=>{
    const todos = this.state.todos;
    todos.splice(index, 1);
    this.setState({todos});
  }

  onSubmit=(evt, index)=>{
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
        <Row>
          <Col s2={10} m2={8} className='card'>
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
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;

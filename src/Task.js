import React, { Component } from 'react';


class Task extends Component {
  render() {
    return (
      <div className="Task">
        <span style={{ textDecoration: this.props.todo.status ? 'line-through' : 'none'}}>{this.props.todo.name}</span>
        <button onClick={()=>this.props.handleClick(this.props.index)}>{this.props.todo.status ? 'Undo' : 'Complete'}</button>
        <button onClick={this.props.onDelete}>Delete</button>
      </div>

    );
  }
}

export default Task;

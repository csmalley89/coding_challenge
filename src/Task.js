import React, { Component } from 'react';
import {Icon} from 'react-materialize';

class Task extends Component {

  render() {
    return (
      <div className="Task">
        <ul>
          <a style={{ color: this.props.todo.status ? 'green' : 'red'}} onClick={()=>this.props.handleClick(this.props.index)}><Icon>{this.props.todo.status ? 'done' : 'trip_origin'}</Icon></a>&nbsp;
          <span style={{ textDecoration: this.props.todo.status ? 'line-through' : 'none'}}>{this.props.todo.name}</span>&nbsp;
          <a className="Right" onClick={()=>this.props.onDelete(this.props.index)}>X</a>
        </ul>
      </div>

    );
  }
}

export default Task;

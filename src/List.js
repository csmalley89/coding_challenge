import React, { Component } from 'react';
import Task from './Task';


class List extends Component {


  render() {
    return (
      <div id="list" className="List">
        {this.props.todos.map((todo, index)=>{
          return (
            <Task
              key={index}
              index={index}
              handleClick={this.props.handleClick}
              todo={todo}
              onDelete={this.props.onDelete}
            />
          )
        })}
      </div>
    );
  }
}

export default List;

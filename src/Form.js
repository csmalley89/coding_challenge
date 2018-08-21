import React, { Component } from 'react';


class Form extends Component {

  onSubmit(evt){
    evt.preventDefault();
    this.setState({inputValue: evt.target.value});

  }


  render() {
    return (
      <div className="Form">
        <form onSubmit={(evt)=>this.props.onSubmit(evt)}>
          <h3>Add a new todo!</h3>
          <input onChange={(evt) => this.props.handleChange(evt)}
          value={this.props.inputValue}

          />
          <button>Add</button>
          <hr />
        </form>
      </div>

    );
  }
}

export default Form;

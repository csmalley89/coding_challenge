import React, { Component } from 'react';
import {Row, Input, Icon} from 'react-materialize';

class Form extends Component {

  onSubmit(evt){
    evt.preventDefault();
    this.setState({inputValue: evt.target.value});

  }


  render() {
    return (
      <div className="Form">

        <h3>Todo list</h3>
        <Row>
          <form onSubmit={(evt)=>this.props.onSubmit(evt)}>
            <Input
              s={10}
              onChange={(evt) => this.props.handleChange(evt)}
              onClick={() => {window.Materialize.toast('Hit Enter to Submit', 4000)}}
              value={this.props.inputValue}
              label="Add a new todo">
              <Icon>input</Icon>
              <button>Add</button>
            </Input>
          </form>
        </Row>
      </div>

    );
  }
}

export default Form;

import React, { Component } from 'react';
import './TodoForm.css';

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {inputValue: ""};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            inputValue: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.addTodo(this.state.inputValue);
        this.setState({
            inputValue: ""
        })
    }

    render() {
        return (
            <div className="todoForm">
            <form onSubmit={this.handleSubmit}>
                    <input 
                    type='text'
                    placeholder='Add a new todo'
                    value={this.state.inputValue}
                    onChange={this.handleChange}
                    />
            </form>
            </div>
        );
    }
}

export default TodoForm;
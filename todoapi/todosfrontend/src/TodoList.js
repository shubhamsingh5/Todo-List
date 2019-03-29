import React, { Component } from 'react';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import './TodoList.css';
import * as apiCalls from './api';


class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            showArchived: false,
        }
        this.addTodo = this.addTodo.bind(this);
        this.showCompleted = this.showCompleted.bind(this);
        this.showArchived = this.showArchived.bind(this);
    }

    componentWillMount() {
        this.loadTodos();
    }

    async loadTodos() {
        let todos = await apiCalls.getTodos();
        this.setState({todos});
    }

    async addTodo(val) {
        let newTodo = await apiCalls.createTodo(val);
        this.setState({todos: [...this.state.todos, newTodo]})

    }

    async deleteTodo(id) {
        await apiCalls.removeTodo(id);
        const todos = this.state.todos.filter(todo => todo._id !== id);
        this.setState({todos: todos});
    }

    async toggleTodo(todo) {
        let updatedTodo = await apiCalls.updateTodo(todo);
        const todos = this.state.todos.map(t =>
            (t._id === updatedTodo._id) ? {
                ...t,
                completed: !t.completed
            } : t
        );
        this.setState({todos});
    }

    async archiveTodo(todo) {
        let updatedTodo = await apiCalls.archiveTodo(todo);
        const todos = this.state.todos.map(t =>
            (t._id === updatedTodo._id) ? {
                ...t,
                archived: !t.archived
            } : t
        );
        this.setState({todos: todos});
    }

    showCompleted() {
        this.setState({showArchived: false})
    }
    showArchived() {
        this.setState({showArchived: true})
    }

    render() {
        let compOrArch;
        if (this.state.showArchived) {
            compOrArch = this.state.todos.filter((t) => t.archived).map((u) => (
                <TodoItem
                    key={u._id}
                    {...u}
                    onDelete={this.deleteTodo.bind(this, u._id)}
                    onToggle={this.toggleTodo.bind(this, u)}
                    onArchive={this.archiveTodo.bind(this, u)}
                />
            ));
        } else {
            compOrArch = this.state.todos.filter((t) => (t.completed && !t.archived)).map((u) => (
                <TodoItem
                    key={u._id}
                    {...u}
                    onDelete={this.deleteTodo.bind(this, u._id)}
                    onToggle={this.toggleTodo.bind(this, u)}
                    onArchive={this.archiveTodo.bind(this, u)}
                />
            ));
        }
        const pendingTodos = this.state.todos.filter((t) => (!t.completed && !t.archived)).map((u) => (
            <TodoItem
              key={u._id}
              {...u}
              onDelete={this.deleteTodo.bind(this,u._id)}
              onToggle={this.toggleTodo.bind(this,u)}
              onArchive={this.archiveTodo.bind(this, u)}
            />
            ));

        return (
            <div className="container">
                <h1>Todo List</h1>
                <div className="topLevel">
                    <div className="pending">
                        <h3>Pending</h3>
                        {pendingTodos}
                    </div>
                    <div className="compOrArch">
                        <div className="category">
                            <button 
                                onClick={this.showCompleted}
                                className={!(this.state.showArchived) ? "selected" : ""}
                            >COMPLETED</button>
                            <button 
                                onClick={this.showArchived}
                                className={(this.state.showArchived) ? "selected" : ""}
                            >ARCHIVED</button>
                        </div>
                        {compOrArch}
                    </div>
                </div>
                <TodoForm addTodo={this.addTodo} />
            </div>
        )
    }
}

export default TodoList;
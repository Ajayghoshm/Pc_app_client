import React, { Component } from 'react';
import cx from 'classnames';
import uncheckImage from 'assets/images/checkbox-uncheck.svg';
import checkImage from 'assets/images/checkbox-check.svg';

class Tasks extends Component {
  state = {
    todos: this.props.notification
  };

  toggleComplete = todoId => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === todoId) todo.completed = !todo.completed;
        return todo;
      })
    });
  }

  deleteTodo = todoId => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== todoId)
    });
  }

  render() {
    return (
      <div>
      <div className="header">
      <h4 className="title">Notifications</h4>
    </div>
      <div className="card ">
        <div className="content"
        style={{'max-height': 400, 'min-height': 400, 'overflow-y': 'scroll'}}>
          <form >
          {this.state.todos.map(todo => (
            <div className={cx("todo-item", {completed: todo.completed})} key={todo.id}>
              <div className="todo-item-wrapper">
                <div className="todo-content">{todo.content}</div>
              </div>
            </div>
          ))}
          </form>
        </div>
        {/*<div className="footer">
          <hr />
          <div className="stats">
            <i className="fa fa-history"></i> Updated 3 minutes ago
              </div>
        </div>*/}
      </div>
      </div>
    );
  }
}

export default Tasks;
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = () => {
        return {
            backgroundColor: '#fefbd8',
            padding: '10px',
            boderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }
    // markComplete = (e) => {
    //     console.log(this.props)
    // }
  render() {
      const{id, title} = this.props.todo
  return (
      <div style={this.getStyle()}>
                <p>
                <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}
                 /> {' '}
                { title }
                <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>X</button>
                </p>
      </div>
  )
}
}

TodoItem.propTypes = {
    todo: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,
}
const btnStyle = {
    backgroundColor: 'red',
    color: '#fff',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}



export default TodoItem

import React from 'react';
import Todo from '../components/Todo';

const ToDoList = ({ todos, setToDos, filteredTodos }) => {
  return (
    <div className='todo-container'>
      <ul className='todo-list'>
        {filteredTodos.map(todo => (
          <Todo 
            todo={todo}
            key={todo.id}
            text={todo.text} 
            todos={todos}
            setToDos={setToDos}
          />
        ))}
      </ul>
    </div>
  )
};

export default ToDoList;
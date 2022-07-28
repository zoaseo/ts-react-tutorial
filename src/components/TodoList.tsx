import React from 'react';
// import { Todo } from '../App3';
import { Todo } from '../todoContext';

type TodoProps = {
    todos: Todo[];
    onDelete(id:number): void
}
const TodoList = ({todos, onDelete} : TodoProps) => {
    return (
        <div>
            <ul>
                {todos.map(todo=><li key={todo.id}><span>{todo.text}</span><button onClick={()=>onDelete(todo.id)}>삭제</button></li>)}
            </ul>
        </div>
    );
};

export default TodoList;
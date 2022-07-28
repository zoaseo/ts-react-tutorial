import React, { useReducer } from 'react';
import InsertTodo from './components/InsertTodo';
import TodoList from './components/TodoList';
import { TodoContext, useTodoDispatch, useTodoState } from './todoContext';

// 상태관리할 데이터
// 1.input의 값
// 2.할일목록
export type Todo = {
    id: number;
    text: string;
    isDone: boolean;
}

const App5 = () => {
    const state = useTodoState();
    const dispatch = useTodoDispatch();

    const { inputText, todos } = state;
    const onChange = (text:string) => dispatch({type: 'INPUT_CHANGE', inputText:text})
    const onCreate = () => dispatch({type: 'CREATE_TODO', todo: {
        id:3,
        text: state.inputText,
        isDone: false
    }})
    const onDelete = (id:number) => dispatch({type: 'DELETE_TODO', id:id})
    return (
        <TodoContext>
            <div>
                <InsertTodo inputText={inputText} onChange={onChange} onCreate={onCreate}/>
                <TodoList todos={todos} onDelete={onDelete}/>
            </div>
        </TodoContext>
    );
};

export default App5;
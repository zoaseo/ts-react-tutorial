import React, { useReducer } from 'react';
import InsertTodo from './components/InsertTodo';
import TodoList from './components/TodoList';

// 상태관리할 데이터
// 1.input의 값
// 2.할일목록
export type Todo = {
    id: number;
    text: string;
    isDone: boolean;
}

type State = {
    inputText: string;
    todos: Todo[]
}
// 액션
// input값이 변경될 때 inputText 변경 - INPUT_CHANGE
// 등록버튼 누르면 할 일 추가 - CREATE_TODO
// 삭제버튼 누르면 할 일 삭제 - DELETE_TODO
// 할 일 항목 클릭하면 isDone값을 반전 - DONE_TODO
type Action = { type: 'INPUT_CHANGE'; inputText: string}
 | { type: 'CREATE_TODO'; todo: Todo}
 | { type: 'DELETE_TODO'; id: number}
 | { type: 'DONE_TODO'; id: number}
function reducer(state: State, action: Action) : State {
    switch(action.type){
        case 'INPUT_CHANGE':
            return {
                ...state,
                inputText: action.inputText
            }
        case 'CREATE_TODO':
            return {
                ...state,
                todos: [
                    ...state.todos,
                    action.todo
                ],
                inputText: ""
            }
        case 'DELETE_TODO':
            return {
                ...state,
                todos: state.todos.filter(todo=> todo.id !== action.id)
            }
        case 'DONE_TODO':
            return {
                ...state,
                todos: state.todos.map(todo=> todo.id === action.id 
                    ? {...todo, isDone: !todo.isDone} : todo)
            }
        default:
            throw new Error("액션이 없어요.");
    }
}
const App3 = () => {
    const [ state, dispatch ] = useReducer(reducer,{
        inputText: "",
        todos: [{
            id: 1,
            text: "타입스크립트 공부",
            isDone: false
        },{
        id: 2,
        text: "리덕스 공부",
        isDone: false
        }]
    })
    const { inputText, todos } = state;
    const onChange = (text:string) => dispatch({type: 'INPUT_CHANGE', inputText:text})
    const onCreate = () => dispatch({type: 'CREATE_TODO', todo: {
        id:3,
        text: state.inputText,
        isDone: false
    }})
    const onDelete = (id:number) => dispatch({type: 'DELETE_TODO', id:id})
    return (
        <div>
            <InsertTodo inputText={inputText} onChange={onChange} onCreate={onCreate}/>
            <TodoList todos={todos} onDelete={onDelete}/>
        </div>
    );
};

export default App3;
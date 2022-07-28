import React, { createContext, Dispatch, useReducer, useContext } from 'react';

type Color = 'red' | 'orange' | 'green'
type State = {
    count: number;
    text: string;
    color: Color;
    isGood: boolean;
}
type Action = {type: 'SET_COUNT'; count: number}
 | {type: 'SET_TEXT'; text: string}
 | {type: 'SET_COLOR'; color: Color}
 | {type: 'TOGGLE_GOOD';}

// 디스패치를 위한 타입 (Dispatch를 리액트에서 불러올 수 있음)
type SampleDispatch = Dispatch<Action>

//  Context 만들기
const SampleStateContext = createContext<State | null>(null);
const SampleDispatchContext = createContext<SampleDispatch | null>(null);

 function reducer(state: State, action: Action) : State {
    switch(action.type){
        case 'SET_COUNT':
            return {
                ...state,
                count: action.count
            }
        case 'SET_TEXT':
            return {
                ...state,
                text: action.text
            }
        case 'SET_COLOR':
            return {
                ...state,
                color: action.color
            }
        case 'TOGGLE_GOOD':
            return {
                ...state,
                isGood: !state.isGood
            }
        default:
            throw new Error('액션이 없어요.');
    }
 }

export function SampleProvider({children}: {children:React.ReactNode}) {
    const [ state, dispatch ] = useReducer(reducer, {
        count: 0,
        text: 'Hello',
        color: 'red',
        isGood: true
    });
    return (
        <SampleStateContext.Provider value={state}>
            <SampleDispatchContext.Provider value={dispatch}>
                {children}
            </SampleDispatchContext.Provider>
        </SampleStateContext.Provider>
    )
}

// state와 dispatch를 쉽게 사용하기 위한 커스텀 hook
export function useSampleState() {
    const state = useContext(SampleStateContext);
    if(!state) throw new Error('찾을 수 없어') // 유효하지 않을 땐 에러를 발생
    return state
}

export function useSampleDispatch() {
    const dispatch = useContext(SampleDispatchContext);
    if(!dispatch) throw new Error('찾을 수 없어') // 유효하지 않을 땐 에러를 발생
    return dispatch
}
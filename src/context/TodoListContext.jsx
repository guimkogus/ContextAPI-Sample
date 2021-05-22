import React, { createContext, useReducer } from 'react';

export const TodoListContext = createContext();

const todosReducer = (state, action) => {
  switch(action.type) {
      case 'ADD_TODO':
          return [...state, {text: action.payload.text, id: state.length > 0 ? state[state.length - 1].id + 1 : 1}];

      case 'REMOVE_TODO':
          return state.filter((todo) => todo.id !== action.payload.id)

      default:
          return state;
  }
}

const TodoListContextProvider = ({children}) => {
  const [todos, dispatch] = useReducer(todosReducer, [
      {text: 'Uberização', id: 1},
      {text: 'Deep Link', id: 2},
      {text: 'QR Code Scanning', id: 3},
    ]);

  return (
      <TodoListContext.Provider value={{ todos, dispatch }}>
          {children}
      </TodoListContext.Provider>
  )
}

export default TodoListContextProvider;

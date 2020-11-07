const SET_TODOS = 'SET_TODOS';
const ADD_TODO = 'ADD_TODO';

export type TodoType = {
  name: string;
  description: string;
  id: string;
  completed: boolean;
};

export default function todoReducer(
  state: Array<TodoType>,
  action: ActionTypes
): Array<TodoType> {
  switch (action.type) {
    case SET_TODOS: {
      return [...action.payload.todos];
    }
    case ADD_TODO: {
      return [...state, action.payload.todo];
    }
    default: {
      return state;
    }
  }
}

type ActionTypes = ReturnType<typeof setTodos> & ReturnType<typeof addTodo>;

export const setTodos = (todos: Array<TodoType>) => {
  return {
    type: SET_TODOS,
    payload: {
      todos,
    },
  };
};

export const addTodo = (todo: TodoType) => {
  return {
    type: ADD_TODO,
    payload: {
      todo,
    },
  };
};

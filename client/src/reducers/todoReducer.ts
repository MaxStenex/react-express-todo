const SET_TODOS = 'SET_TODOS';

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
    default: {
      return state;
    }
  }
}

type ActionTypes = ReturnType<typeof setTodos>;

export const setTodos = (todos: Array<TodoType>) => {
  return {
    type: SET_TODOS,
    payload: {
      todos,
    },
  };
};

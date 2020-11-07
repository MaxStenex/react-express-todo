const SET_TODOS = 'SET_TODOS';
const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';
const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE';

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
    case DELETE_TODO: {
      state.forEach((todo: TodoType, index) => {
        if (todo.id === action.payload.id) {
          state.splice(index, 1);
          return;
        }
        return todo;
      });
      return [...state];
    }
    case TOGGLE_COMPLETE: {
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    }
    default: {
      return state;
    }
  }
}

type ActionTypes = ReturnType<typeof setTodos> &
  ReturnType<typeof addTodo> &
  ReturnType<typeof deleteTodo> &
  ReturnType<typeof toggleComplete>;

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

export const deleteTodo = (id: string) => {
  return {
    type: DELETE_TODO,
    payload: {
      id,
    },
  };
};

export const toggleComplete = (id: string) => {
  return {
    type: TOGGLE_COMPLETE,
    payload: {
      id,
    },
  };
};

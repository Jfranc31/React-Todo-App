import { createSlice } from '@reduxjs/toolkit'

// Initial state for the todos slice
const initialState = {
  todos: [],
  filter: 'all', // all, completed, incomplete
};

// Create the todos slice
const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
      // Action to add a new todo
        addTodo: (state, action) => {
            const newTodo = {
                id: Date.now(),
                text: action.payload,
                completed: false,
            };
            state.todos.push(newTodo);
        },

        // Action to toggle the completion status of a todo
        toggleTodo: (state, action) => {
            const todo = state.todos.find(todo => todo.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed;
            }
        },

        // Action to delete a todo
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        },

        // Action to set the current filter
        setFilter: (state, action) => {
            state.filter = action.payload;
        },
  },
});

export const { addTodo, toggleTodo, deleteTodo, setFilter } = todosSlice.actions;

export default todosSlice.reducer;
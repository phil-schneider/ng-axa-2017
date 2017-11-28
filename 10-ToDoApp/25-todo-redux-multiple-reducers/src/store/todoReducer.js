export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const LOADED_TODOS = 'LOADED_TODOS';

const initialState = {
    todos: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {...state,  todos: state.todos.concat(action.payload)};
        case REMOVE_TODO:
            return {...state,  todos: state.todos.filter(t => t !== action.payload)};
        case LOADED_TODOS:
            return {...state, todos: action.payload};
        default:
            return state;
    }
};

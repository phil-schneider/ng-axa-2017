import {ADD_TODO, LOADED_TODOS, REMOVE_TODO} from './todoReducer';

export const MESSAGE_SHOW = 'MESSAGE_SHOW';

const initialState = {
    message: ''
};

export default (state = initialState, action) => {
    switch (action.type) {
        case MESSAGE_SHOW:
            return {...state,  message: action.payload};
        case ADD_TODO:
            return {...state,  message: ''};
        case REMOVE_TODO:
            return {...state,  message: ''};
        case LOADED_TODOS:
            return {...state,  message: ''};
        default:
            return state;
    }
};

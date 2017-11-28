import {ADD_TODO, REMOVE_TODO} from './todoReducer';

export function addToDo(newToDo) {
    return { type: ADD_TODO, payload: newToDo }
}

export function removeToDo(toDo) {
    return { type: REMOVE_TODO, payload: toDo }
}

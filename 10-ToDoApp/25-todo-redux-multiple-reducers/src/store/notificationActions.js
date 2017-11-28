import {MESSAGE_SHOW} from './notificationReducer';

export function showMessage(message){
    return {type: MESSAGE_SHOW, payload: message};
}

const API_URL = 'http://localhost:3456/todos';

export function loadToDos() {
    return fetch(API_URL)
        .then(checkStatus)
        .then((resp) => resp.json())
        .then((resp) => resp.result);
}

export function saveToDo(toDo) {

    const headers = new Headers({
        'Content-Type': 'application/json'
    });

    return fetch(API_URL, {
        method: 'POST',
        headers,
        body: JSON.stringify(toDo)
    })
        .then(checkStatus)
        .then((resp) => resp.json())
        .then((resp) => resp.result);
}

export function deleteToDo(toDo) {

    return fetch(API_URL + `/${toDo.id}`, {
        method: 'DELETE',
    })
        .then(checkStatus);
}

function checkStatus(response) {
    if (response.ok) {
        return response;
    } else {
        throw new Error(response.statusText + ' ' + response.result);
    }
}

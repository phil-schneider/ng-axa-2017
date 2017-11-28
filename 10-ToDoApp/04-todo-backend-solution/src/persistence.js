import axios from 'axios';

const API_URL = 'http://localhost:3456/todos';

export function loadToDos(completed = 0) {
    return axios.get(API_URL, { params: { completed }})
        .then((response) => response.data.result )
        .catch((error) => console.log(error));
}

export function saveToDo(toDo) {

    return axios.post(API_URL, toDo)
        .then((response) => response.data.result )
        .catch((error) => console.log(error));
}

export function updateToDo(toDo) {

    return axios.put(`${API_URL}/${toDo.id}`, toDo)
        .catch((error) => console.log(error));
}

export function deleteToDo(toDo) {

    return axios.delete(`${API_URL}/${toDo.id}`)
        .catch((error) => console.log(error));

}
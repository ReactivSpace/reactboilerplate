export const SET_USERS = 'SET_USERS';
export const ADD_USER = 'ADD_USER';
export const USER_FETCHED = 'USER_FETCHED';
export const USER_UPDATED = 'USER_UPDATED';
export const USER_DELETED = 'USER_DELETED';

export function setUsers(users){
    return{
        type:SET_USERS,
        users
    }
}

 function handleResponse(response){
    if(response.ok){
        return response.json();
    } else{
        debugger;
        let error = new Error(response.statusText);
        error.response =response.statusText;
        throw error;
    }
}
export function addUser(user){
    return{
        type:ADD_USER,
        user
    }
};

export function userFetched(user){
    return{
        type:USER_FETCHED,
        user
    }
}

export function userUpdated(user){
    return{
        type:USER_UPDATED,
        user
    }
}
export function userDeleted(userId){
    return{
        type:USER_DELETED,
        userId
    }
}

export function saveUser(data){
    return dispatch=>{
        return fetch('/api/users',{
            method:'post',
            body:JSON.stringify(data),
            headers:{
                "Content-Type":"application/json"
            }
        }).then(handleResponse)
        .then(data=>dispatch(addUser(data.user)));
    }
};
export function updateUser(data) {
  return dispatch => {
      debugger;
    return fetch(`http://localhost:3000/api/v1/user/updateUserbyId`, {
      method: 'put',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(handleResponse)
    .then(data => dispatch(userUpdated(data)));
  }
}
export function deleteUser(id) {
  return dispatch => {
    return fetch(`/api/users/${id}`, {
      method: 'delete',
      headers: {
        "Content-Type": "application/json"
      }
    }).then(handleResponse)
    .then(data => dispatch(userDeleted(id)));
  }
}
export function fetchUsers() {
    return dispatch => {
        fetch('http://localhost:3000/api/v1/user/allUsers')
        .then(res=>res.json())
        .then(data => dispatch(setUsers(data.data)));
    }
};
export function fetchUser(id) {
    
    return dispatch => {
        fetch(`http://localhost:3000/api/v1/user/getById/${id}`)
        .then(res=>res.json())
        .then(data => dispatch(userFetched(data)));

    }
};
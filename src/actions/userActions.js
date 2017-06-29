import { ref, firebaseAuth } from '../config/firebase'

export const SET_USERS = 'SET_USERS';
export const ADD_USER = 'ADD_USER';
export const USER_FETCHED = 'USER_FETCHED';
export const USER_UPDATED = 'USER_UPDATED';
export const USER_DELETED = 'USER_DELETED';

export function setUsers(users) {
    return {
        type: SET_USERS,
        users
    }
}
function handleResponse(response) {
    debugger;
    if (response) {
        return response.json();
    } else {
        let error = new Error(response);
        error.response = response;
        throw error;
    }
}
export function addUser(user) {
    return {
        type: ADD_USER,
        user
    }
}
export function userFetched(user) {
    return {
        type: USER_FETCHED,
        user
    }
}
export function userUpdated(user) {
    return {
        type: USER_UPDATED,
        user
    }
}
export function userDeleted(userId) {
    return {
        type: USER_DELETED,
        userId
    }
}

////
export function saveUser(data) {
    var userId = firebaseAuth().currentUser.uid;
    debugger;
    return dispatch => {
        return ref.child(`users`)
            .push({
                title: data.title,
                description: data.description,
                userId: userId
            }).then(snap => dispatch(addUser(snap)));
    }

};
export function updateUser(data) {
    var onComplete = function(error) {
        
  if (error) {
      throw error;
    console.log('Synchronization failed');
  } else {
       return "success";
    console.log('Synchronization succeeded');
  }
};
    return dispatch => {
        return ref.child(`users`).child(data.key)
            .update({
                title: data.title,
                description: data.description,
                key:data.key
            },onComplete).then(data => dispatch(userUpdated(data)));
            
       console.log(data.key);
    }
}
export function deleteUser(key) {
    return dispatch => {
        return fetch(`/api/users/${key}`, {
            method: 'delete',
            headers: {
                "Content-Type": "application/json"
            }
        }).then(handleResponse)
            .then(data => dispatch(userDeleted(key)));
    }
}
export function fetchUsers() {
    debugger;
    const tasks = [];
    return dispatch => {
        var reff = ref.child('users');
        reff.on('value', snap => {
            snap.forEach(shot => {
                tasks.push({ ...shot.val(), key: shot.key });
            }).then(dispatch(setUsers(tasks)));
        });
    }
};
export function fetchUser(key) {
    return dispatch => {
        var reffs = ref.child('users').child(key);
        reffs.once('value')
            .then(function (snapshot) {
                var value=[];
                 value.push({...snapshot.val(),key: snapshot.key}) ;
                dispatch(userFetched(value[0]))
                console.log(value[0])
            });
    }
};
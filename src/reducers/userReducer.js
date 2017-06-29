import { SET_USERS, ADD_USER, USER_FETCHED, USER_UPDATED, USER_DELETED } from '../actions/userActions'

export default function users(state = [], action = {}) {
    switch (action.type) {
        case ADD_USER:
            return [
                ...state,
                action.user
            ];
        case USER_DELETED:
            return state.filter(item => item.key !== action.userId);
        case USER_UPDATED:
        debugger;
            return state.map(item => {
                if (item.key === action.key) return action;
                return item;
            });

        case USER_FETCHED:
            const index = state.findIndex(item => item.key === action.user.key);
            if (index > -1) {
                return state.map(item => {
                    if (item.key === action.user.key) return action.user;
                    return item;
                });
            } else {
                return [
                    ...state,
                    action.user
                ];
            }

        case SET_USERS:
            return action.users;

        default:
            return state;
    }
}
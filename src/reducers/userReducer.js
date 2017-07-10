import {SET_USERS, ADD_USER,USER_FETCHED,USER_UPDATED,USER_DELETED} from '../actions/userActions'
export default function users(state = [], action = {}) {
    switch (action.type) {
        case ADD_USER:
            return [
                ...state,
                action.user
            ];
            case USER_DELETED:
            return state.filter(item=>item._id!==action.userId);
            case USER_UPDATED:
            return state.map(item=>{
                if(item.id===action.user._id) return action.user;
                return item;
            });

        case USER_FETCHED:
            const index =state.findIndex(item=>item.id===action.user.id);
            if(index>-1){
                return state.map(item=>{
                    if(item.id===action.user.id) return action.user;
                    return item;
                });
            }else{
                return[
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
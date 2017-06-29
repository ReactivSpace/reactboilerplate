import {combineReducers} from 'redux';
import products from '../reducers/productReducer';
import users from '../reducers/userReducer';


export default combineReducers({
    products,users
});
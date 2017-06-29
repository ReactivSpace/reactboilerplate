import { ref, firebaseAuth } from '../config/firebase'

export const SET_PRODUCTS = 'SET_PRODUCTS';
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const PRODUCT_FETCHED = 'PRODUCT_FETCHED';
export const PRODUCT_UPDATED = 'PRODUCT_UPDATED';
export const PRODUCT_DELETED = 'PRODUCT_DELETED';

export function setProducts(products) {
    return {
        type: SET_PRODUCTS,
        products
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
export function addProduct(product) {
    return {
        type: ADD_PRODUCT,
        product
    }
}
export function productFetched(product) {
    return {
        type: PRODUCT_FETCHED,
        product
    }
}
export function productUpdated(product) {
    return {
        type: PRODUCT_UPDATED,
        product
    }
}
export function productDeleted(productId) {
    return {
        type: PRODUCT_DELETED,
        productId
    }
}

////
export function saveProduct(data) {
    var userId = firebaseAuth().currentUser.uid;
    debugger;
    return dispatch => {
        return ref.child(`products`)
            .push({
                title: data.title,
                cover: data.cover,
                userId: userId
            }).then(snap => dispatch(addProduct(snap)));
    }

};
export function updateProduct(data) {
    var onComplete = function(error) {
        
  if (error) {
      throw error;
    console.log('Synchronization failed');
  } else {
       return "success";
    console.log('Synchronization succeeded');
  }
};debugger;
    return dispatch => {
        return ref.child(`products`).child(data.key)
            .update({
                title: data.title,
                cover: data.cover,
                key:data.key
            },onComplete).then(data => dispatch(productUpdated(data)));
            
       console.log(data.key);
    }
}
export function deleteProduct(key) {
    return dispatch => {
        return fetch(`/api/products/${key}`, {
            method: 'delete',
            headers: {
                "Content-Type": "application/json"
            }
        }).then(handleResponse)
            .then(data => dispatch(productDeleted(key)));
    }
}
export function fetchProducts() {
    debugger;
    const tasks = [];
    return dispatch => {
        var reff = ref.child('products');
        reff.on('value', snap => {
            snap.forEach(shot => {
                tasks.push({ ...shot.val(), key: shot.key });
            }).then(dispatch(setProducts(tasks)));
        });
    }
};
export function fetchProduct(key) {
    return dispatch => {
        var reffs = ref.child('products').child(key);
        reffs.once('value')
            .then(function (snapshot) {
                var value=[];
                 value.push({...snapshot.val(),key: snapshot.key}) ;
                dispatch(productFetched(value[0]))
                console.log(value[0])
            });
    }
};
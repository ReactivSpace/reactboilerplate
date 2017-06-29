import { SET_PRODUCTS, ADD_PRODUCT, PRODUCT_FETCHED, PRODUCT_UPDATED, PRODUCT_DELETED } from '../actions/productActions'

export default function products(state = [], action = {}) {
    switch (action.type) {
        case ADD_PRODUCT:
            return [
                ...state,
                action.product
            ];
        case PRODUCT_DELETED:
            return state.filter(item => item.key !== action.productId);
        case PRODUCT_UPDATED:
        debugger;
            return state.map(item => {
                if (item.key === action.key) return action;
                return item;
            });

        case PRODUCT_FETCHED:
            const index = state.findIndex(item => item.key === action.product.key);
            if (index > -1) {
                return state.map(item => {
                    if (item.key === action.product.key) return action.product;
                    return item;
                });
            } else {
                return [
                    ...state,
                    action.product
                ];
            }

        case SET_PRODUCTS:
            return action.products;

        default:
            return state;
    }
}
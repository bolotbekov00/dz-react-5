
import { createStore } from 'redux';

const initialState = {
    purchasedItems: 0
};

const purchaseReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'PURCHASE_ITEM':
            return {
                ...state,
                purchasedItems: state.purchasedItems + 1
            };
        default:
            return state;
    }
};

const store = createStore(purchaseReducer);

export default store;

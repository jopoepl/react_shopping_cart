import { configureStore } from '@reduxjs/toolkit';


function orderReducer(state = { selectedOrder: ""}, action) {
  switch (action.type) {
    case 'SET_ORDER':
        return  { ...state, selectedOrder: action.payload  }
    // case 'SET_PRODUCTS':
    //     let sortedProducts = [...action.payload];
    //     if(state.selectedOrder === 'highest'){
    //         sortedProducts = sortedProducts.sort((a, b) => b.price - a.price);
    //     }
    //     if(state.selectedOrder === 'lowest'){
    //         sortedProducts = sortedProducts.sort((a, b) => a.price - b.price);
    //     }
    //     return  {...state, products: sortedProducts }
    default:
        return  state;
  } 
}


let store = configureStore({reducer: {order: orderReducer}})

console.log(store.getState(), "STORE")

export default store;
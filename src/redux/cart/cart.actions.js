import CartActionTypes from './cart.types';

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const addItem = item => ({
	type: CartActionTypes.ADD_ITEM,
	payload: item
})

// the pattern:
// in collection item, onClick button, add fn called addItem
// map disptach to props
// which connects the object sent to the state
// that sends to CartActionTypes, ADD_ITEM
// in this doc, the action is reecieved
// that is sent to cart reducer, which creates the payload, addItemToCart with state
// reducer imports that fn from cart utils, and sends a NEW object. 
// Q - do you still need initial state here? 
// then it exports cart reducer, and connects it to the store 




// export const addItem = item => ({
//   type: CartActionTypes.ADD_ITEM,
//   payload: item
// });
import {CartTypes} from "./cart.types";
import {addItemToCart} from "./cart.uitl";

const INITIAL_STATE =  {
  hidden: false,
  cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartTypes.TOGGLE_HIDDEN: return {
      ...state,
      hidden: !state.hidden
    }
    case CartTypes.ADD_ITEM: return {
      ...state,
      cartItems: addItemToCart(state.cartItems, action.payload)
    }

    default: return state;
  }
}

export { cartReducer }
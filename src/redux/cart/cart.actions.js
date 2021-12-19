import {CartTypes} from "./cart.types";


const toggleHidden = () => ({
    type: CartTypes.TOGGLE_HIDDEN
})

const addItem = (item) => ({
    type: CartTypes.ADD_ITEM,
    payload: item
})

export { toggleHidden , addItem }
import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
        addItem: (state,action) => {
            state.items.push(action.payload);
        },
        removeItem: (state) => {
            state.items.pop();
        },
        clearCart: (state) => {
            state.items.length = 0;
        }
    }
});

export const{addItem,removeItem,clearCart} = cartSlice.actions;

export default cartSlice.reducer;



/* 
addItem: (state, action) => {
    state.items.push(action.payload);
}
The action is the object automatically passed to the reducer when you dispatch something.
It usually looks like this:

{
  type: "cart/addItem",       // tells which reducer to run
  payload: "apple"            // data you're sending to the reducer
}
*/


/*
🔁 Example Flow:
If you dispatch:

dispatch(addItem("apple"));
Redux Toolkit automatically creates this action for you:

{
  type: "cart/addItem",
  payload: "apple"
}
So in your reducer:
action.type = "cart/addItem" → helps RTK know which reducer to call.
action.payload = "apple" → the actual data you're sending.

*/
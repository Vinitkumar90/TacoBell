import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
    // user: userReducer,
  },
});

export default appStore;



/*

🧠 Recap: Dispatching an Action
When you do this:

dispatch(addItem("apple"));
You're actually dispatching an action object:

{ type: "cart/addItem", payload: "apple" }

📦 What does the store hold?
configureStore({
  reducer: {
    cart: cartReducer,   
    user: userReducer  
  }
})

Redux internally combines this into a root reducer that looks like this under the hood:

function rootReducer(state = {}, action) {
  return {
    cart: cartReducer(state.cart, action),
    user: userReducer(state.user, action),
  };
}

//So yes — the state parameter here holds the state of all slices, and each individual reducer 
// is called with just its own piece of that state.


🔁 How action reaches the correct slice:
Let’s say you dispatch:

{ type: "cart/addItem", payload: "apple" }

Redux store:
Receives the action
Calls the root reducer
Passes the action to every individual slice reducer (cartReducer, userReducer, etc.)
Each slice reducer checks: “Does this action.type match one of my cases?”

Only cartReducer will recognize and handle "cart/addItem".

🧩 Inside cartReducer
This is what it looks like:

function cartReducer(state = { items: [] }, action) {
  switch(action.type) {
    case 'cart/addItem':
      state.items.push(action.payload);
      break;
    // etc
  }
}
But with createSlice, Redux Toolkit generates this switch-case for you automatically.

So:

If action.type === "cart/addItem", then addItem(state, action) is run.

Otherwise, it returns the state as-is.

✅ Final Flow Summary:
You dispatch an action (e.g., { type: "cart/addItem", payload: "apple" })

Redux sends it to the root reducer

The root reducer calls:

cart: cartReducer(state.cart, action),
user: userReducer(state.user, action)
cartReducer matches the action.type === "cart/addItem"

It runs the addItem reducer defined in the slice

State is updated → UI re-renders



*/
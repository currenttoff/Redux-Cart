/* 
Using Redux Toolkit 
npm install @reduxjs/toolkit
*/

import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { counter: 0 },
  reducers: {
    increment(state, action) {
      //directly return mutate state
      state.counter++;
    },
    decrement(state, action) {
      state.counter--;
    },
    reset(state, action) {
      state.counter = 0;
    },
    addBy(state, action) {
      state.counter += action.payload;
    },
  },
});

export const actions = counterSlice.actions;
const store = configureStore({
  reducer: counterSlice.reducer,
});

export default store;

/* 
Using Redux 
npm install redux react-redux
*/
/*
import { legacy_createStore } from "redux";

const reducerFn = (state = { counter: 0 }, action) => {
  //Sync Func
  //We should not mutate the original state
  if (action.type === "INC") {
    return { counter: state.counter + 1 };
  }
  if (action.type === "DEC") {
    return { counter: state.counter - 1 };
  }
  if (action.type === "RESET") {
    return { counter: 0 };
  }
  if (action.type === "ADD") {
    return { counter: state.counter + action.payload };
  }
  return state;
};

const store = legacy_createStore(reducerFn);

export default store;
*/

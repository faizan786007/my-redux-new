// const redux = require("redux");

// import * as redux from "redux";
import { createStore } from "redux";
import { combineReducers } from "redux";
import { todoReducer } from "./reducers/todoReducer";
import { noteReducer } from "./reducers/noteReducer";
const result = combineReducers({
	todoReducer,
	noteReducer,
});

// export const store = createStore(todoReducer);
export const store = createStore(result);

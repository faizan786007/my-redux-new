import { ADD_NOTE, DELETE_NOTE } from "../actions/noteActions";
const initialState = {
	notes: [
		{ text: "hi i am ali", createdOn: new Date() },
		{ text: "hi i am faizan", createdOn: new Date() },
		{ text: "hi i am rohit", createdOn: new Date() },
	],
};

export function noteReducer(state = initialState, action) {
	switch (action.type) {
		case ADD_NOTE:
			return {
				...state,
				notes: [...state.notes, { text: action.text, createdOn: new Date() }],
			};
		case DELETE_NOTE:
			// state.notes.splice(action.index, 1);
			// console.log(state.notes);
			// return {
			// 	...state,
			// 	notes: [...state.notes],
			// };
			return {
				...state,
				notes: state.notes.filter((note, i) => i !== action.index),
			};

		default:
			return state;
	}
}

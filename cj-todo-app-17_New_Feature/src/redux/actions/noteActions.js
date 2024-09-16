export const ADD_NOTE = "add note";
export const DELETE_NOTE = "delete note";

export const addNote = (text) => ({ type: ADD_NOTE, text });
export const deleteNote = (index) => ({ type: DELETE_NOTE, index });

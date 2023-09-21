// Importing necessary Redux functions and the contactsReducers.
import { combineReducers, createStore } from "redux";
import contactsReducers from "./reducers/contactsReducers";

// Combining multiple reducers into a single root reducer.
const store = combineReducers({
	contacts: contactsReducers
})

// Creating the Redux store by passing the root reducer to createStore.
export default createStore(store);

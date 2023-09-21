// Default State Value
const initialState = {
	contacts: []
}

// Reducer function for managing the "contacts" state.
const contactsReducers = (state = initialState, action) => {
	// Switch statement to handle different action types.
	switch (action.type) {
		// Case for setting contacts data.
		case "setContacts":
			// Creating a deep copy of the current contacts array.
			const contacts = JSON.parse(JSON.stringify(state.contacts));
			// Adding new contacts from the action payload to the copied array.
			contacts.push(...action.payload);

			// Returning a new state object with updated contacts data.
			return {
				...state,
				contacts
			};

		// Case for removing all contacts data.
		case "removeContacts":
			// Returning a new state object with an empty contacts array.
			return {
				...state,
				contacts: []
			};

		// Default case, returning the current state when the action type is not recognized.
		default:
			return state;
	}
}

// Exporting the contactsReducers function for use in the Redux store.
export default contactsReducers;

// Importing the Axios library.
import axios from "axios";

// Creating an Axios instance with custom configuration.
const instance = axios.create({
	// Setting the base URL for API requests from environment variables.
	baseURL: process.env.REACT_APP_API_BASE_URL,
	// Including an authorization header with an API bearer token from environment variables.
	headers: {
		Authorization: `Bearer ${process.env.REACT_APP_API_BEARER_TOKEN}`
	}
});

// Exporting the custom Axios instance for making API requests.
export default instance;

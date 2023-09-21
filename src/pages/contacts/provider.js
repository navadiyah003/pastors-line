// Importing necessary dependencies from React and other libraries.
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from "./../../lib/axios";
import { useDispatch, useSelector } from 'react-redux';

// Creating a context for managing contact-related data.
const Context = createContext({});

// Exported component for providing contact-related data to its children.
export const ContactsProvider = ({ children }) => {
	// Using Redux's useSelector to access contact data from the state.
	const contacts = useSelector((state) => state.contacts.contacts);

	// State variables for controlling modals, loading state, and query parameters.
	const [showModal, setShowModal] = useState(true);
	const [showContactModal, setShowContactModal] = useState(false);
	const [onlyEven, setOnlyEven] = useState(false);
	const [loading, setLoading] = useState(false);
	const dispatch = useDispatch();
	const { code } = useParams();
	const [params, setParams] = useState({
		query: "",
		page: 1,
	});

	// Defining headers for displaying contact data.
	const headers = [
		{ key: 'id', label: '#' },
		{ key: 'firstName', label: 'First Name' },
		{ key: 'phoneNumer', label: 'Phone Number' },
		{ key: 'country', label: 'Country' },
		{ key: 'action', label: 'Actions' }
	];

	// Effect to reset some state variables when the 'code' parameter changes.
	useEffect(() => {
		dispatch({
			type: "removeContacts"
		});

		setParams({
			query: "",
			page: 1,
		});

		setOnlyEven(false);
	}, [code]);

	// Memoized function to filter contacts based on the 'onlyEven' state.
	const getContacts = useMemo(() => {
		if (onlyEven) {
			return contacts.filter((contact) => contact.id % 2 === 0);
		}
		return contacts;
	}, [contacts, onlyEven]);

	// Effect to fetch contacts when the 'query' parameter changes.
	useEffect(() => {
		updateQueryAndFetch()
	}, [params.query]);

	const updateQueryAndFetch = () => {
		dispatch({
			type: "removeContacts"
		});

		fetchContacts();
	}

	// Effect to fetch contacts when the 'page' parameter changes.
	useEffect(() => {
		fetchContacts();
	}, [params.page]);

	// Function to make an asynchronous request to fetch contacts.
	const fetchContacts = async () => {
		setLoading(true);
		await axios.get('contacts.json', {
			params: {
				...params,
				companyId: 560,
				noGroupDuplicates: 1,
				...(code && {
					countryId: code
				})
			}
		}).then(({ data }) => {
			dispatch({
				type: "setContacts",
				payload: Object.keys(data.contacts).map((id) => data.contacts[id])
			});
		}).finally(() => {
			setLoading(false);
		});
	};

	// Function to handle changes in query parameters.
	const handleParamsChange = (state) => {
		setParams((prev) => (
			{
				...prev,
				...state
			}
		));
	};

	// Function to handle page changes.
	const handlePageChange = () => {
		handleParamsChange({ page: params.page + 1 });
	};

	// Function to handle opening/closing contact view modals.
	const handleContactViewModal = (record) => {
		if (typeof record === 'boolean') {
			setShowModal(!record);
			setShowContactModal(record);
		} else {
			setShowModal(false);
			setShowContactModal(record);
		}
	};

	// Providing data and functions via context to child components.
	return <Context.Provider value={{
		code,
		headers,
		loading,
		params,
		showModal,
		handleParamsChange,
		getContacts,
		showContactModal,
		handleContactViewModal,
		onlyEven,
		setOnlyEven,
		handlePageChange,
		updateQueryAndFetch
	}}>
		{children}
	</Context.Provider>;
}

// Exporting a custom hook for accessing the contact-related context.
export const useContacts = () => useContext(Context);

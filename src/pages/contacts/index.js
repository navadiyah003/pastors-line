import React from 'react';
import Modal from '../../components/utils/Modal';
import Button from '../../components/elements/Button';
import { Link } from 'react-router-dom';
import { useContacts } from './provider';
import ContactsList from './components/ContactsList';
import ContactView from './components/ContactView';

// Functional component for managing and displaying contacts.
export default function Contacts() {
	// Using the custom hook to access data from the contact context.
	const { code, showModal } = useContacts();

	return (
		<>
			{/* Modal component for displaying contact information */}
			<Modal open={showModal}>
				<Modal.Header>
					<Modal.Title>{code ? 'US' : 'All'} Contacts</Modal.Title>
				</Modal.Header>

				<Modal.Body>
					{/* Component for displaying the list of contacts */}
					<ContactsList />
				</Modal.Body>

				<Modal.Footer>
					{/* Links to filter contacts by All or US */}
					<Link to="/contacts">
						<Button>
							All Contacts
						</Button>
					</Link>

					<Link to="/contacts/226">
						<Button>
							US Contacts
						</Button>
					</Link>

					{/* Button to close the modal */}
					<Link to="/">
						<Button outlined>
							Close
						</Button>
					</Link>
				</Modal.Footer>
			</Modal>

			{/* Component for viewing detailed contact information */}
			<ContactView />
		</>
	);
}

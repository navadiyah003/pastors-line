// Importing necessary dependencies and components.
import React from 'react';
import Modal from '../../../components/utils/Modal';
import { useContacts } from '../provider';
import Button from '../../../components/elements/Button';

// Functional component for displaying detailed contact information.
export default function ContactView() {
	// Using the custom hook to access data and functions from the contact context.
	const { showContactModal, handleContactViewModal } = useContacts();

	return (
		<Modal open={showContactModal}>
			<Modal.Header>
				<Modal.Title>View Contacts</Modal.Title>
			</Modal.Header>

			<Modal.Body>
				{/* Displaying contact details in a table */}
				<table className="table">
					<thead>
						<tr>
							<th scope="col">#</th>
							<th scope="col">First Name</th>
							<th scope="col">Last Name</th>
							<th scope="col">Phone Number</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							{/* Populating contact details based on the selected contact */}
							<th scope="row">{showContactModal.id}</th>
							<td>{showContactModal.first_name}</td>
							<td>{showContactModal.last_name}</td>
							<td>{showContactModal.phone_number}</td>
						</tr>
					</tbody>
				</table>
			</Modal.Body>

			<Modal.Footer>
				{/* Button to close the contact view modal */}
				<Button outlined onClick={() => handleContactViewModal(false)}>
					Close
				</Button>
			</Modal.Footer>
		</Modal>
	);
}

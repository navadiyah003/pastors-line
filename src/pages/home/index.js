// Importing necessary dependencies and components.
import React from 'react';
import Button from '../../components/elements/Button';
import { Link, Outlet } from 'react-router-dom';

// Functional component for the home page.
export default function Home() {
	return (
		<div className='vh-100 d-flex justify-content-center align-items-center' style={{
			gap: 16
		}}>
			{/* Link to the "All Contacts" page */}
			<Link to={'/contacts'}>
				<Button className="btn btn-primary">
					All Contacts
				</Button>
			</Link>

			{/* Link to the "US Contacts" page */}
			<Link to={'/contacts/226'}>
				<Button className="btn btn-primary">
					US Contacts
				</Button>
			</Link>

			{/* Outlet for rendering child routes */}
			<Outlet />
		</div>
	);
}

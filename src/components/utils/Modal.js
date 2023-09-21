// Importing React library.
import React from 'react';

// Functional component for rendering a modal dialog.
const Modal = (props) => {
	// Destructuring props to extract necessary values and provide defaults.
	const { open, children, className = '', ...otherProps } = props;

	return (
		<>
			{/* Displaying a modal backdrop when the modal is open */}
			{open && <div className={`fade modal-backdrop show`}></div>}

			{/* Displaying the modal dialog when it's open */}
			{open && <div className="modal fade show" style={{
				display: 'block'
			}} role="dialog" aria-hidden="true">
				<div className={`modal-dialog modal-lg ${className}`} role="document" {...otherProps}>
					<div className="modal-content">
						{children}
					</div>
				</div>
			</div>}
		</>
	);
}

// Exporting the Modal component.
export default Modal;

// Begin::Modal Header Component
Modal.Header = (props) => {
	// Destructuring props to extract necessary values and provide defaults.
	const { className = '', children, ...otherProps } = props;

	return <div className={`modal-header ${className}`} {...otherProps}>
		{children}
	</div>
}
// End::Modal Header Component

// Begin::Modal Title Component
Modal.Title = (props) => {
	// Destructuring props to extract necessary values and provide defaults.
	const { className = '', children, ...otherProps } = props;

	return <h5 className={`modal-title ${className}`} {...otherProps}>{children}</h5>
}
// End::Modal Title Component

// Begin::Modal Body Component
Modal.Body = (porps) => {
	// Destructuring props to extract necessary values and provide defaults.
	const { className = '', children, ...otherProps } = porps;

	return <div className={`modal-body ${className}`} {...otherProps}>
		{children}
	</div>
}
// End::Modal Body Component

// Begin::Modal Footer Component
Modal.Footer = (porps) => {
	// Destructuring props to extract necessary values and provide defaults.
	const { className = '', children, ...otherProps } = porps;

	return <div className={`modal-footer ${className}`} {...otherProps}>
		{children}
	</div>
}
// End::Modal Footer Component

// Exporting Modal Header, Title, Body, and Footer components for use within the Modal.

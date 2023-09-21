// Importing React library.
import React from 'react';

// Functional component for rendering an input element with optional append content.
const Input = (props) => {
	// Destructuring props to extract necessary values.
	const { append, className, ...otherProps } = props;

	return (
		<div className="input-group mb-4">
			{/* Rendering the input element with specified properties and class */}
			<input className={`form-control ${className}`} {...otherProps} />
			<div className="input-group-append">
				{/* Rendering the append content, if provided */}
				{append}
			</div>
		</div>
	);
}

export default Input;

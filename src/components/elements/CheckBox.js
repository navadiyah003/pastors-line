// Importing React library.
import React from 'react';

// Functional component for rendering a checkbox input with a label.
const CheckBox = (props) => {
	// Destructuring props to extract necessary values.
	const { label, checked, onChange, id, labelProps, checkboxProps } = props;

	return (
		<div className="form-group">
			<div className="form-check">
				{/* Rendering the checkbox input with specified properties */}
				<input className="form-check-input" type="checkbox" id={id} checked={checked} onChange={onChange} {...checkboxProps} />
				{/* Rendering the label for the checkbox with specified properties */}
				<label className="form-check-label" htmlFor={id} {...labelProps}>
					{label}
				</label>
			</div>
		</div>
	);
}

export default CheckBox;

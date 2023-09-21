// Importing necessary dependencies.
import { forwardRef, useMemo } from "react";

// Functional component for rendering custom buttons.
const Button = forwardRef((props, ref) => {
	// Destructuring props and providing default values.
	const { children, color = 'primary', outlined = false, className = '', ...otherProps } = props;

	// Calculating the CSS class based on the button color and outline status.
	const getClasList = useMemo(() => {
		if (color === 'primary') return outlined ? 'btn-outline-primary' : 'custom-btn-primary'
		if (color === 'secondary') return outlined ? 'btn-outline-secondary' : 'custom-btn-secondary'
	}, [color, outlined]);

	return (
		// Rendering the button element with calculated CSS class and other props.
		<button ref={ref} className={`btn ${getClasList} ${className}`} {...otherProps}>
			{children}
		</button>
	);
});

export default Button;

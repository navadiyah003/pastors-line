// Importing React library.
import React from 'react';

// Functional component for rendering a table.
export default function Table(props) {
	// Destructuring props to extract necessary values and provide defaults.
	const { headers, records, children, loading, emptyRowMessage = 'No rows found' } = props;

	return (
		<table className="table table-bordered">
			<thead>
				<tr>
					{/* Rendering table headers based on provided header data */}
					{headers.map((header) => (
						<th scope="col" key={header.key}>{header.label}</th>
					))}
				</tr>
			</thead>
			<tbody>
				{/* Displaying a loading spinner when data is loading */}
				{loading &&
					<tr>
						<td align='center' colSpan={headers.length}>
							<div className="spinner-border" role="status">
							</div>
						</td>
					</tr>
				}
				{/* Mapping and rendering data records in the table */}
				{records.map((record, index) => (
					<tr key={index}>
						{headers.map((header) => (
							<td key={header.key}>{typeof children[header.key] !== 'undefined' && children[header.key](record)}</td>
						))}
					</tr>
				))}

				{/* Displaying a message when there are no records and not in loading state */}
				{!loading && records.length === 0 &&
					<tr>
						<td align='center' colSpan={headers.length}>{emptyRowMessage}</td>
					</tr>
				}
			</tbody>
		</table>
	);
}

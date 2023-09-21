// Importing necessary dependencies and components.
import CheckBox from "../../../components/elements/CheckBox";
import { useContacts } from "../provider";
import Button from "../../../components/elements/Button";
import Input from "../../../components/elements/Input";
import Table from "../../../components/elements/Table";
import InfiniteScroll from "react-infinite-scroll-component";

// Functional component for displaying a list of contacts.
const ContactsList = () => {
	// Using the custom hook to access data and functions from the contact context.
	const {
		headers,
		loading,
		getContacts,
		params,
		onlyEven,
		setOnlyEven,
		handleParamsChange,
		updateQueryAndFetch,
		handleContactViewModal,
		handlePageChange
	} = useContacts();

	// Function to load more data when scrolling.
	const loadData = () => {
		handlePageChange();
	};

	return (
		<div className="mb-4">
			{/* Input for searching contacts */}
			<Input
				placeholder="Search"
				value={params.query}
				onChange={(e) => {
					handleParamsChange({ query: e.target.value });
				}}
				append={<Button onClick={updateQueryAndFetch}>Search</Button>}
			/>

			<div
				style={{
					height: 300,
					overflow: "auto",
					marginBottom: 16
				}}
				id="infinityScroll"
			>
				{/* Infinite scroll component for lazy loading data */}
				<InfiniteScroll
					next={loadData}
					dataLength={getContacts?.length || 0}
					hasMore={true}
					loader={loading ? <p className="text-center">Loading...</p> : null}
					scrollableTarget={"infinityScroll"}
				>
					{/* Displaying contact data in a table */}
					<Table headers={headers} records={getContacts} loading={loading}>
						{{
							// Mapping data fields to table columns
							id: (record) => record.id,
							firstName: (record) => record.first_name,
							phoneNumer: (record) => record.full_phone_number,
							country: (record) => record.country.iso,
							action: (record) => (
								<Button onClick={() => handleContactViewModal(record)}>
									View
								</Button>
							),
						}}
					</Table>
				</InfiniteScroll>
			</div>

			{/* Checkbox for filtering only even contacts */}
			<CheckBox
				label="Only Even"
				id="onlyEven"
				value={onlyEven}
				onChange={(e) => setOnlyEven(e.target.checked)}
			/>
		</div>
	);
};

export default ContactsList;

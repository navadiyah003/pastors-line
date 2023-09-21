import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ContactsProvider } from "./pages/contacts/provider";
import Contacts from "./pages/contacts";
import Home from "./pages/home";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path="/" element={<Home />}>
					<Route exact path="/contacts">

						<Route exact index element={
							<ContactsProvider>
								<Contacts />
							</ContactsProvider>
						} />
						{/* For ALL Countries */}

						{/* For "US" Country (Country ID: 226)*/}
						<Route path=":code" element={
							<ContactsProvider>
								<Contacts />
							</ContactsProvider>
						} />
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;

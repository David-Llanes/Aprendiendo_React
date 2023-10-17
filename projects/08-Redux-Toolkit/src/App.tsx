import { Toaster } from "sonner";
import "./App.css";
import { CreateNewUser } from "./components/CreateNewUser";
import ListOfUsers from "./components/ListOfUsers";

function App() {
	return (
		<main style={{ display: "flex", gap: "4px", flexDirection: "column" }}>
			<ListOfUsers />
			<CreateNewUser />
			<Toaster richColors />
		</main>
	);
}

export default App;

import {
	Badge,
	Card,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeaderCell,
	TableRow,
	Title,
} from "@tremor/react";
import { EditIcon, TrashIcon } from "../icons/Icons";

import { useUsers } from "../hooks/useUsers";

export default function ListOfUsers() {
	const { users, removeUser } = useUsers();

	return (
		<Card>
			<Title>
				Usuarios
				<Badge style={{ marginLeft: "4px" }}>{users.length}</Badge>
			</Title>
			<Table>
				<TableHead>
					<TableRow>
						<TableHeaderCell>ID</TableHeaderCell>
						<TableHeaderCell>Nombre</TableHeaderCell>
						<TableHeaderCell>Email</TableHeaderCell>
						<TableHeaderCell>Acciones</TableHeaderCell>
					</TableRow>
				</TableHead>

				<TableBody>
					{users.map((item) => (
						<TableRow key={item.name}>
							<TableCell>{item.id}</TableCell>
							<TableCell
								style={{ display: "flex", alignItems: "center", gap: "0.5em" }}
							>
								<img
									style={{ width: "32px", height: "32px", borderRadius: "50%" }}
									src={`https://unavatar.io/github/${item.github}`}
									alt={item.name}
								/>
								{item.name}
							</TableCell>
							<TableCell>{item.email}</TableCell>
							<TableCell
								style={{ display: "flex", alignItems: "center", gap: "0.5em" }}
							>
								<button type="button">
									<EditIcon />
								</button>
								<button type="button" onClick={() => removeUser(item.id)}>
									<TrashIcon />
								</button>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</Card>
	);
}

import { Badge, Button, Card, TextInput, Title } from "@tremor/react";
import { useState } from "react";
import { useUsers } from "../hooks/useUsers";

export function CreateNewUser() {
	const { addUser } = useUsers();
	const [result, setResult] = useState<"ok" | "error" | null>(null);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		// manejo de errores
		setResult(null);

		const form = e.target as HTMLFormElement;
		const formData = new FormData(form);

		console.log(Object.fromEntries(formData)); // {name: 'as', email: 'sa', github: 'asa'}

		const name = formData.get("name") as string;
		const email = formData.get("email") as string;
		const github = formData.get("github") as string;

		if (!name || !email || !github) {
			return setResult("error");
		}

		// Aqui solo llega si no hubo errores
		addUser({ name, email, github });
		setResult("ok");
		form.reset();
	};

	return (
		<Card style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
			<Title>Create New User</Title>

			<form onSubmit={handleSubmit} className="flex flex-col gap-2">
				<TextInput name="name" placeholder="Nombre..." />
				<TextInput name="email" placeholder="Email..." />
				<TextInput name="github" placeholder="Usuario de Github..." />

				<div>
					<Button type="submit" style={{ marginTop: "16px" }}>
						Crear usuario
					</Button>

					<span className="ml-4">
						{result === "ok" && (
							<Badge color="green">Guardado correctamente</Badge>
						)}
						{result === "error" && (
							<Badge color="red">Error con los campos...</Badge>
						)}
					</span>
				</div>
			</form>
		</Card>
	);
}

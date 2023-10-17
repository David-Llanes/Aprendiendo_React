import { type Middleware } from "@reduxjs/toolkit";
import { toast } from "sonner";
import { rollbackUser } from "../store/users/slice";

// Guardar en local storage el estado o store
export const persistanceLocalStorageMiddleware: Middleware =
	(store) => (next) => (action) => {
		// fase 1: ANTES DE QUE SE HAGA LA ACCION QUE MODIFIQUE EL ESTADO
		next(action);
		// fase 2: DESPUES DE HABER REALIZADO LA ACCION, CON EL NUEVO ESTADO LISTO
		// console.log("store / estado global");
		// console.log(store.getState());
		localStorage.setItem("__redux__state__", JSON.stringify(store.getState()));
		console.log("SE ACTUALIZO EL LOCAL STORAGE");
	};

export const syncWithDatabaseMiddleware: Middleware =
	(store) => (next) => (action) => {
		// ANTES DE MODIFICAR EL ESTADO
		const { type, payload } = action;
		const previousState = store.getState();

		// Fase 1
		console.log({ action, state: store.getState() });
		// Fin fase 1
		next(action);
		// Fase 2
		// Ejemplo de aplicacion de un middleware
		if (type === "sliceUsers/deleteUserById") {
			const idToRemove = payload;
			const userToRemove = previousState.users.find(
				(user) => user.id === idToRemove,
			);
			fetch(`https://jsonplaceholder.typicode.com/users/${idToRemove}`, {
				method: "DELETE",
			})
				.then((res) => {
					if (!res.ok) throw new Error("Error al eliminar el usuario");
					toast.success("Se ha eliminado el usuario");
				})
				.catch((error) => {
					toast.error("Ocurrio un error al eliminar al usuario");
					if (userToRemove) {
						store.dispatch(rollbackUser(userToRemove));
					}
					console.log("Ha ocurrido un error...", error);
				});
		}
		if (type === "sliceUsers/rollbackUser") {
			console.log("XD");
		}

		console.log(store.getState());
	};

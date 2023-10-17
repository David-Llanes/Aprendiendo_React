import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type UserId = string;

export interface User {
	name: string;
	email: string;
	github: string;
}

export interface UserWityId extends User {
	id: UserId;
}

const DEFAULT_STATE: UserWityId[] = [
	{
		id: "1",
		name: "Naruto Uzumaki",
		email: "uzumaki@gmail.com",
		github: "NarutoUzumaki",
	},
	{
		id: "2",
		name: "Sasuke Uchiha",
		email: "sasuke@gmail.com",
		github: "SasukeUchiha",
	},
	{
		id: "3",
		name: "Sakura Haruno",
		email: "sakura@gmail.com",
		github: "SakuraHaruno",
	},
	{
		id: "4",
		name: "Kakashi Hatake",
		email: "kakashi@gmail.com",
		github: "KakashiHatake",
	},
	{
		id: "5",
		name: "Hinata Hyuga",
		email: "hinata@gmail.com",
		github: "HinataHyuga",
	},
	{
		id: "6",
		name: "Shikamaru Nara",
		email: "shikamaru@gmail.com",
		github: "ShikamaruNara",
	},
	{
		id: "7",
		name: "Ino Yamanaka",
		email: "ino@gmail.com",
		github: "InoYamanaka",
	},
	{
		id: "8",
		name: "Rock Lee",
		email: "rocklee@gmail.com",
		github: "RockLee",
	},
	{
		id: "9",
		name: "Neji Hyuga",
		email: "neji@gmail.com",
		github: "NejiHyuga",
	},
	{
		id: "10",
		name: "Tenten",
		email: "tenten@gmail.com",
		github: "Tenten",
	},
];

// Usano una IIFE
const initialState: UserWityId[] = (() => {
	const persistedState = localStorage.getItem("__redux__state__");
	return persistedState ? JSON.parse(persistedState).users : DEFAULT_STATE;
})();

export const usersSlice = createSlice({
	name: "sliceUsers",
	initialState,
	reducers: {
		addNewUser: (state, action: PayloadAction<User>) => {
			const id = crypto.randomUUID();
			//return [...state, { id, ...action.payload }];
			// Podemos mutar el estado porque ReduxToolkit usa Immer
			state.push({ id, ...action.payload });
		},
		deleteUserById: (state, action: PayloadAction<UserId>) => {
			const id = action.payload;
			return state.filter((user) => user.id !== id);
		},
		rollbackUser: (state, action: PayloadAction<UserWityId>) => {
			const isUserAlreadyDefined = state.some(
				(user) => user.id === action.payload.id,
			);

			if (!isUserAlreadyDefined) {
				//return [...state, action.payload];
				// Podemos mutar el estado porque ReduxToolkit usa Immer
				state.push(action.payload);
			}
		},
	},
});

// Contiene el estado
export default usersSlice.reducer;
// Contiene las acciones
export const { addNewUser, deleteUserById, rollbackUser } = usersSlice.actions;

/* 
Podemos mutar el estado dentro de los reducers ya que Redux ToolKit incorpora Immer. No es necesario hacer un return del estado si usamos la mutacion con Immer ya que tiene un return implicito

De esta manera podemos despreoucuparnos por generar un estado nuevo en cada accion, sino que podemos simplemente mutar el estado que ya tenemos, y immer  se encargara de hacer el resto

*/

import { configureStore } from "@reduxjs/toolkit";
import type { TypedUseSelectorHook } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import {
	persistanceLocalStorageMiddleware,
	syncWithDatabaseMiddleware,
} from "../middlewares/index";
import userReducer from "./users/slice";

// Este objeto store es un objeto: {getState: ƒ, dispatch: ƒ}
export const store = configureStore({
	reducer: { users: userReducer },
	middleware: [persistanceLocalStorageMiddleware, syncWithDatabaseMiddleware],
});

// Tipando Redux -> HAY QUE HACERLO NOSOTROS
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Con estas dos funciones podremos manipular el estado
// Tipando el useSelector -> Para consumir el estado
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// Tipando el dispatch
export const useAppDispatch: () => AppDispatch = useDispatch;

/* 

IMPORTANTE === equivalencias
 -- const state = useSelector(state => state) === store.getState()
 -- const dispatch = useDispatch() === store.dispatch()
------------------------------------------------------------------

useSelector() FUNCIONA DE LA SIGUIENTE MANERA:
	useSelector((store) => store.users);

	recibe el estado completo, el objeto que contiene todas las slice y decide qué parte regresarnos... EJEMPLO

	const users = useSelector((store) => store.users);


useDispatch(): funciona de la siguiente manera:
	al invocar useDispatch() nos regresa una funcion, con la cual podremos realizar las acciones para modificar el estado.
	
	Ejemplo
	const dispatch = useDispatch();
	dispatch(action(payload)) --> donde action es alguno de los definidos en las slices y recibe el payload
	Ejemplo:	dispatch(addNewUser({ name, email, github }));
*/

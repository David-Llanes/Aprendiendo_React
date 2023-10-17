import { useAppDispatch, useAppSelector } from "../hooks/store";
import {
	User,
	addNewUser,
	deleteUserById,
	type UserId,
} from "../store/users/slice";

//import { store } from "../store/index";

export function useUsers() {
	const users = useAppSelector((store) => store.users);
	const dispatch = useAppDispatch();
	//const { users } = store.getState();

	const addUser = ({ name, email, github }: User) => {
		//store.dispatch(addNewUser({ name, email, github }));
		dispatch(addNewUser({ name, email, github }));
	};

	const removeUser = (id: UserId) => {
		// store.dispatch(deleteUserById(id));
		dispatch(deleteUserById(id));
	};

	return { users, addUser, removeUser };
}

/* 
USAR LOS HOOKS 
	const users = useAppSelector((store) => store.users);
	const dispatch = useAppDispatch();
LO UNICO QUE HACEN ES SIMPLIFICARNOS EL ACCESO AL OBJETO store que creamos en store/index.ts

el hook useDispatch nos regresa la funcion dispatch() del objeto store.
asi que es lo mismo que usar store.dispatch()
Pasa lo mismo con useSelector () y utilizando store.getState()


NO SE RECOMIENDA EVITAR EL USO DE LOS HOOKS, ya que los hooks se encargan de mantener un estado y provocar rerenderizados cada vez que cambia. Si usamos store.getState() estamos accediendo y modificando al ESTADO GLOBAL directamente y no se provocan re renderizados, hasta hacer un refresh 
*/

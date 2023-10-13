import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, type RootState } from "../store";

import type { TypedUseSelectorHook } from "react-redux";

// Tipando el useSelector
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// Tipando el dispatch
export const useAppDispatch: () => AppDispatch = useDispatch;

// ESTO LO MOVI A store/index.ts
